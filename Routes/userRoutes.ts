import express  from "express";
import {handleCreateUser ,handleDeleteUser,handleGetUser,handleupdateUser} from "../Controllers/userController";
import validate from "../Middleware/validation";
import userSchema from "../Validation/userSchema";
//const { authenticateJwt, authenticateSession } = require('../Middleware/auth.js');

const router = express.Router();

router.get('/' , handleGetUser);
router.post('/' ,validate(userSchema) , handleCreateUser);
router.put('/:id' , handleupdateUser);
router.delete(':id' , handleDeleteUser);

export default router;
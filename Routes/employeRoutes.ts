import express  from "express";
import {handleLoginController , handleRegisterController} from "../Controllers/employeController";
import validate from "../Middleware/validation";
import employeSchema from "../Validation/employeSchema";

const router = express.Router();

router.post('/register', validate(employeSchema),handleRegisterController)
router.post('/login' , validate(employeSchema), handleLoginController)


export default router;
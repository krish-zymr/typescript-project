import express  from "express";
import {handleCreateMenu , handleGetMenu , handleGetMenuByTaste , handleGetMenuById} from "../Controllers/menuController";
import {authenticateJwt ,authenticateSession} from "../Middleware/auth";
import checkRole from "../Middleware/chechRole"
import validate from "../Middleware/validation";
import menuSchema from "../Validation/menuSchema";

const router = express.Router();

router.get('/' , handleGetMenu)
router.post('/', validate(menuSchema), handleCreateMenu)
router.get('/:tasteType' ,validate(menuSchema), handleGetMenuByTaste)
router.get('/getByID/:id' , handleGetMenuById)

export default router;
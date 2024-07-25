"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../Controllers/userController");
const validation_1 = __importDefault(require("../Middleware/validation"));
const userSchema_1 = __importDefault(require("../Validation/userSchema"));
//const { authenticateJwt, authenticateSession } = require('../Middleware/auth.js');
const router = express_1.default.Router();
router.get('/', userController_1.handleGetUser);
router.post('/', (0, validation_1.default)(userSchema_1.default), userController_1.handleCreateUser);
router.put('/:id', userController_1.handleupdateUser);
router.delete(':id', userController_1.handleDeleteUser);
exports.default = router;

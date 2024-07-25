"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeController_1 = require("../Controllers/employeController");
const validation_1 = __importDefault(require("../Middleware/validation"));
const employeSchema_1 = __importDefault(require("../Validation/employeSchema"));
const router = express_1.default.Router();
router.post('/register', (0, validation_1.default)(employeSchema_1.default), employeController_1.handleRegisterController);
router.post('/login', (0, validation_1.default)(employeSchema_1.default), employeController_1.handleLoginController);
exports.default = router;

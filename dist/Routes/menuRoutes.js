"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menuController_1 = require("../Controllers/menuController");
const validation_1 = __importDefault(require("../Middleware/validation"));
const menuSchema_1 = __importDefault(require("../Validation/menuSchema"));
const router = express_1.default.Router();
router.get('/', menuController_1.handleGetMenu);
router.post('/', (0, validation_1.default)(menuSchema_1.default), menuController_1.handleCreateMenu);
router.get('/:tasteType', (0, validation_1.default)(menuSchema_1.default), menuController_1.handleGetMenuByTaste);
router.get('/getByID/:id', menuController_1.handleGetMenuById);
exports.default = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetMenu = handleGetMenu;
exports.handleCreateMenu = handleCreateMenu;
exports.handleGetMenuByTaste = handleGetMenuByTaste;
exports.handleGetMenuById = handleGetMenuById;
const Menu_1 = __importDefault(require("../Models/Menu"));
const winston_1 = __importDefault(require("winston"));
const loggers_1 = require("../Loggers/loggers");
const MenuLogger = winston_1.default.loggers.get('menuLogger');
function handleGetMenu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield Menu_1.default.find();
            //menuLogger.info("Data Found")
            res.status(200).json(data);
        }
        catch (error) {
            console.log('Error occurred', error);
            res.status(500).json({ error, message: error.message });
        }
    });
}
function handleCreateMenu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        ///////////// Creating Multiple Data by Using Create method 
        const data = req.body;
        //const newMenu = new Menu(data);
        try {
            const savedMenu = yield Menu_1.default.create(data);
            loggers_1.menuLogger.info("Data Saved Sucessfully", savedMenu);
            res.status(200).json(savedMenu);
        }
        catch (error) {
            console.log('Error occurred', error);
            loggers_1.menuLogger.error("Error Occured", { error: error });
            res.status(500).json({ error: "Internal server error" });
        }
    });
}
function handleGetMenuByTaste(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tasteType = req.params.tasteType;
        // if (!tasteEnum.includes(tasteType)) {
        //     return res.status(404).json({ error: "Enter valid taste type" });
        // }
        try {
            const response = yield Menu_1.default.find({ taste: tasteType });
            loggers_1.menuLogger.info("Data Found Sucessfully", response);
            res.status(200).json(response);
        }
        catch (error) {
            console.log('Error occurred', error);
            loggers_1.menuLogger.error("Error Occured", { error: error });
            res.status(500).json({ error: "Internal server error" });
        }
    });
}
function handleGetMenuById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        if (!userId) {
            return res.status(404).json({ error: "Enter valid Id" });
        }
        try {
            const response = yield Menu_1.default.findById(userId);
            loggers_1.menuLogger.info("Data Found Sucessfully", response);
            res.status(200).json(response);
        }
        catch (error) {
            console.log('Error occurred', error);
            loggers_1.menuLogger.error("Error Occured", { error: error });
            res.status(500).json({ error: "Internal server error" });
        }
    });
}

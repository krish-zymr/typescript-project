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
exports.handleGetUser = void 0;
exports.handleCreateUser = handleCreateUser;
exports.handleupdateUser = handleupdateUser;
exports.handleDeleteUser = handleDeleteUser;
const User_1 = __importDefault(require("../Models/User"));
const loggers_1 = require("../Loggers/loggers");
const errorHandler_1 = require("../error/errorHandler");
const customError_1 = require("../error/customError");
const handleGetUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = "test";
        const data = yield User_1.default.find();
        if (!data) {
            throw new customError_1.UserNotFound("User Not found by Krish", 408);
        }
        // console.log("Data Found");
        loggers_1.userLogger.info("Data Found");
        res.status(200).json(data);
    }
    catch (error) {
        (0, errorHandler_1.errorHandler)(error, res);
        loggers_1.userLogger.error(error.message, { error: error });
        console.log("Error occurred", error);
        // res.status(500).json({ error: "Internal server error" });
    }
});
exports.handleGetUser = handleGetUser;
function handleCreateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        const newUser = new User_1.default(data);
        console.log(typeof newUser);
        try {
            //Handels Single User Input 
            const savedUser = yield newUser.save();
            console.log("Data saved successfully");
            loggers_1.userLogger.info("Data saved successfully", savedUser);
            res.status(200).json(savedUser);
        }
        catch (error) {
            loggers_1.userLogger.error("Error Occured", { error: error });
            console.log("Error occurred", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
}
function handleupdateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.params.id;
            const updatedUserData = req.body;
            console.log(updatedUserData, ':---updatedUserData--');
            const response = yield User_1.default.findByIdAndUpdate(userId, updatedUserData, {
                new: true,
                runValidators: true
            });
            loggers_1.userLogger.info("Data updated successfully", updatedUserData);
            if (!response) {
                return res.status(404).json({ error: "User not found" });
            }
            console.log("Data Updated");
            res.status(200).json(response);
        }
        catch (error) {
            loggers_1.userLogger.error("Error Occured", { error: error });
            console.log("Error occurred", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
}
function handleDeleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.params.id;
            const response = yield User_1.default.findByIdAndDelete(userId);
            if (!response) {
                return res.status(404).json({ error: "User not found" });
            }
            console.log("Data Deleted");
            loggers_1.userLogger.info("Data deleted successfully", response);
            res.status(200).json(response);
        }
        catch (error) {
            loggers_1.userLogger.error("Error Occured", { error: error });
            console.log("Error occurred", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
}

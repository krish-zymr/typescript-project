"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const customError_1 = require("./customError");
const errorHandler = (error, res) => {
    if (error instanceof customError_1.CustomError) {
        res.status(error.statusCode).json({ errorName: error.name, errorMessage: error.message });
    }
    else {
        res.status(500).json({ errorName: error.name, message: error.message });
    }
};
exports.errorHandler = errorHandler;

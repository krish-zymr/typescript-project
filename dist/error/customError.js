"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.SessionError = exports.UnauthorizedUser = exports.TokenNotFound = exports.UserNotFound = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        //Object.setPrototypeOf(this , CustomError.prototype)
    }
}
exports.CustomError = CustomError;
class UserNotFound extends CustomError {
    constructor(message, statusCode) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}
exports.UserNotFound = UserNotFound;
class TokenNotFound extends CustomError {
    constructor(message, statusCode) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}
exports.TokenNotFound = TokenNotFound;
class UnauthorizedUser extends CustomError {
    constructor(message, statusCode) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}
exports.UnauthorizedUser = UnauthorizedUser;
class SessionError extends CustomError {
    constructor(message, statusCode) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}
exports.SessionError = SessionError;
class ValidationError extends CustomError {
    constructor(message, statusCode) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}
exports.ValidationError = ValidationError;

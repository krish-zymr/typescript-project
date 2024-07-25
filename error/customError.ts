
export class CustomError extends Error {
    statusCode: number
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
       //Object.setPrototypeOf(this , CustomError.prototype)
    }
}

export class UserNotFound extends CustomError {
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}

export class TokenNotFound extends CustomError {
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}

export class UnauthorizedUser extends CustomError {
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}

export class SessionError extends CustomError {
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}

export class ValidationError extends CustomError {
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
        //Object.setPrototypeOf(this , UserNotFound.prototype)
    }
}
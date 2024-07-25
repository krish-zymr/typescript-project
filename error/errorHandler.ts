import { Request, Response, NextFunction } from "express";
import { CustomError } from "./customError";

export const errorHandler = (error: any, res: Response) => {

    if (error instanceof CustomError) {
        res.status(error.statusCode).json({ errorName : error.name, errorMessage: error.message })
    }
    else{
        res.status(500).json({ errorName : error.name, message: error.message })
    }
}

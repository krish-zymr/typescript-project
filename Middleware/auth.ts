import { NextFunction ,Request ,Response } from "express";
import dotenv from "dotenv";
dotenv.config()

import jwt from "jsonwebtoken";


type Role = "user" | "admin" | "editor";
export interface JwtPayload {
    id: string;
    role: Role ;
    iat?: number;
    exp?: number;
}

export const authenticateJwt = (req: Request, res: Response, next: NextFunction)=>{
    try {
        const token = req.headers.authorization?.split(" ")[0] ?? "";
        if (!token) {
          res.status(404).json({ error: "Token not Provided" });
        }
        jwt.verify(token , process.env.jwtSecret as string ,(err, payload) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.employe = payload as JwtPayload; // Attach the user object to the request object
            next();
        });
        next();
    } catch (error) {
        res.status(400).json({ message: "Token is not valid" });
    }
}

export const authenticateSession = (req: Request , res: Response, next: NextFunction) =>{
    try {
        if (req.session.isAuth) {
            next();
        } else {
            res.status(404).json({ error: "Unauthorised" });
          }
    } catch (error) {
        res.status(400).json({ message: "session error" });
    }
}
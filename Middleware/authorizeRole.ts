import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
//import { JwtPayload } from "./auth";

type Role = "user" | "admin" | "editor";

export const authorizeRole = (roles: Role[]) => {
    
    return (req: Request, res: Response, next: NextFunction) => {
        const employe = req.employe as JwtPayload;
        if (!req.employe || !roles.includes(employe.role)) {
            return res.sendStatus(403);
        }
        next();
    };
};

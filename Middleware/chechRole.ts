import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()
type Role = "user" | "admin" | 'editor';

function checkRole(requiredRole: Role) {
    return function (req: Request, res: Response, next: NextFunction) {
      try {
        if (req.session?.role === requiredRole) {
            next();
        } else {
            res.status(403).json({ message: 'Access denied' });
        }
      } catch (error) {
        res.status(403).json({ message: 'error at checkRole.ts' });
      }
    };
}

export default checkRole;

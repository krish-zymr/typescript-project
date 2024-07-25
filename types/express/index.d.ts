import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
        employe?: {
            id: string;
            role: Role ;
        };
    }
  }
}

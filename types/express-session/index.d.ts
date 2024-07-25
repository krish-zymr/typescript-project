import {SessionData} from "express-session";
import { ObjectId } from "mongoose";

declare module "express-session" {
    interface SessionData {
        isAuth?: boolean,
        userId : any,
        role : string
    }
}





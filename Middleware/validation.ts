import {Request ,Response ,NextFunction  } from "express";
import { AnySchema } from "yup";
import { errorHandler } from "../error/errorHandler";

const validate = (schema : AnySchema) => async (req : Request , res : Response, next: NextFunction)=>{
    try {
        await schema.validate({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        return next();
      } catch (err : any) {
        errorHandler(err,res);
      }
}

export default validate;
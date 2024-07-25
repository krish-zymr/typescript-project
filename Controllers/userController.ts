import express, { Request, Response } from "express";
import User from "../Models/User";
import { userLogger } from "../Loggers/loggers";
import { errorHandler } from "../error/errorHandler";
import { CustomError, UserNotFound } from "../error/customError";

export const handleGetUser = async(req: Request, res: Response):Promise<void> => {
    try {
        const url = "test";
        const data = await User.find();
        if (!data) {
            throw new UserNotFound("User Not found by Krish"  , 408) 
        }
        // console.log("Data Found");
        userLogger.info("Data Found")
        res.status(200).json(data);
    } catch (error : any) {
        errorHandler(error , res)
        userLogger.error(error.message , {error : error})
        console.log("Error occurred", error);
        // res.status(500).json({ error: "Internal server error" });
    }
}

export async function handleCreateUser(req: Request, res: Response) {
    const data = req.body;
    const newUser = new User(data);
    console.log(typeof newUser);
    try {
        //Handels Single User Input 
        const savedUser = await newUser.save();
        console.log("Data saved successfully");
        userLogger.info("Data saved successfully" , savedUser)
        res.status(200).json(savedUser);
    } catch (error) {
        userLogger.error("Error Occured" , {error : error})
        console.log("Error occurred", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function handleupdateUser(req: Request, res: Response) {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;
        console.log(updatedUserData, ':---updatedUserData--');
        const response = await User.findByIdAndUpdate(userId, updatedUserData,{
            new : true,
            runValidators :true
        });
        userLogger.info("Data updated successfully" , updatedUserData)
        if (!response) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log("Data Updated");
        res.status(200).json(response);
    } catch (error) {
        userLogger.error("Error Occured" , {error : error})
        console.log("Error occurred", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function handleDeleteUser(req: Request, res: Response) {
    try {
        const userId = req.params.id;
        const response = await User.findByIdAndDelete(userId);
        if (!response) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log("Data Deleted");
        userLogger.info("Data deleted successfully" , response)
        res.status(200).json(response);
    } catch (error) {
        userLogger.error("Error Occured" , {error : error})
        console.log("Error occurred", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
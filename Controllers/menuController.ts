import express, { Request, Response } from "express";
import Menu, { tasteEnum } from "../Models/Menu";
import winston from "winston";
import { menuLogger } from "../Loggers/loggers";


const MenuLogger = winston.loggers.get('menuLogger');



export async function handleGetMenu(req: Request, res: Response) {
    try {
        const data = await Menu.find()
        //menuLogger.info("Data Found")
        res.status(200).json(data)
    } catch (error : any) {
        console.log('Error occurred', error);
        res.status(500).json({ error, message: error.message });
    }
}
export async function handleCreateMenu(req: Request, res: Response) {

    ///////////// Creating Multiple Data by Using Create method 
    const data = req.body;
    //const newMenu = new Menu(data);
    try {
        const savedMenu = await Menu.create(data)
        menuLogger.info("Data Saved Sucessfully" , savedMenu)
        res.status(200).json(savedMenu);
    } catch (error) {
        console.log('Error occurred', error);
        menuLogger.error("Error Occured" , {error : error})
        res.status(500).json({ error: "Internal server error" });
    }
}
export async function handleGetMenuByTaste(req: Request, res: Response) {
    const tasteType = req.params.tasteType;
    // if (!tasteEnum.includes(tasteType)) {
    //     return res.status(404).json({ error: "Enter valid taste type" });
    // }
    try {
        const response = await Menu.find({ taste: tasteType });
        menuLogger.info("Data Found Sucessfully" , response)
        res.status(200).json(response);
    } catch (error) {
        console.log('Error occurred', error);
        menuLogger.error("Error Occured" , {error : error})

        res.status(500).json({ error: "Internal server error" });
    }
}

export async function handleGetMenuById(req: Request, res: Response) {
    const userId = req.params.id;
    if (!userId) {
        return res.status(404).json({ error: "Enter valid Id" });
    }
    try {
        const response = await Menu.findById(userId);
        menuLogger.info("Data Found Sucessfully" , response)
        res.status(200).json(response);
    } catch (error) {
        console.log('Error occurred', error);
        menuLogger.error("Error Occured" , {error : error})
        res.status(500).json({ error: "Internal server error" });
    }
}
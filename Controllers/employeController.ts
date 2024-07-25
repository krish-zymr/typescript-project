import express, { Request, Response } from "express";
import Employe from "../Models/Employe";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { runInNewContext } from "vm";
import dotenv from "dotenv";
dotenv.config()



export async function handleRegisterController(req: Request, res: Response) {
    try {
        const { name, username, password , role} = req.body;
        const existingUser = await Employe.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newEmploye = new Employe({
            name,
            username,
            password: hashedPassword,
            role : role
        });

        const savedEmploye = await newEmploye.save();
        res.status(200).json(savedEmploye);

    } catch (error) {

        console.log("Error occurred", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const handleLoginController = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const employe = await Employe.findOne({ username });

        if (!employe) {
            return res.status(404).json({ error: "User not found" });
        }

        const isEmploye = await bcrypt.compare(password, employe.password);

        if (!isEmploye) {
            return res.status(400).json({ error: "Invalid Password" });
        }

        const token = await jwt.sign({ id: employe._id  , role : employe.role}, process.env.jwtSecret as string, { expiresIn: "1h" });

        req.session.userId =  employe._id;
        req.session.role =  employe.role;
        req.session.isAuth= true;


        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error Yaha se" });
    }
}  
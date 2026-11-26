import { Request, Response } from "express";
import { register } from "../services/auth.service";

export const registerController = async (req: Request, res: Response) => {
    try {
        console.log("Request body:", req.body)
        const user = await register(req.body);
        res.status(201).json({ message: "Registration successful", user });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}
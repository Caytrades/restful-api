import { Request, Response } from "express";
import Task from "../models/taskModel";

// Getting All Tasks
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
};

// Get A Single Task
export const getTask = async (req: Request, res: Response) => {
    try {
        // const { id } = req.params;
        // const task = await Task.findById(id);
        // or 
        const task = await Task.findById(req.params.id);
        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
}

// Creating A Task
export const createTask = async (req: Request, res: Response) => {
    try {
        const task = new Task(req.body);
        await task.save();
        // or 
        // const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// Update A Task
export const updateTask = async (req: Request, res: Response) => {
    try {
        // const { id } = req.params;
        // const task = await Task.findByIdAndUpdate(id, req.body)
        // if (!task) {
        //     res.status(404).json({ message: "Task not found" })
        // }
        // const updatedTask = await Task.findById(id);

        const task = await Task.findByIdAndUpdate(req.params.id, req.body)

        if (!task) {
            res.status(404).json({ message: "Task not found" })
        } else {
            const updatedTask = await Task.findById(req.params.id)
            res.status(200).json(updatedTask)
        }

       
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
};

// Delete A Task
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndDelete(id, req.body);

        if (!task) {
            res.status(404).json({ message: "Task not found" })
        } else{
            res.status(200).json({ message: "Deleted Successfully" })
        }

    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
};
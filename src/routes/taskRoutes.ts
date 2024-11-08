import express from "express";
import {
    getTasks, 
    createTask,
    getTask,
    updateTask,
    deleteTask,
} from "../controllers/taskController";

const router = express.Router()

router.get('/', getTasks)
router.get('/:id', getTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router;
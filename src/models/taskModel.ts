import mongoose, {Document, Schema} from "mongoose";

interface ITask extends Document{
    title: string,
    description: string,
    completed: boolean,
}

const taskSchema = new Schema({
        title: {
            type: String, 
            required: [true, "Please enter title"]
        },
        description: {
            type: String
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model<ITask>('Task', taskSchema)

export default Task;
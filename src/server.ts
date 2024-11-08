import mongoose from "mongoose"
import dotenv from "dotenv"
import app from "./app"
import { error } from "console";

dotenv.config()

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGODB_URI || " ";

app.get('/', (req, res) => {
    res.send('Hello World')
});


mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connnected to Database")
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    }).catch((error) => console.error("MongoDB connection error:", error))


import Todo from "../backend/models/todo.js"; // Import the model
import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // ✅ Import Mongoose

import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });


const app = express();
app.use(cors());
app.use(express.json()); // Allows us to send JSON data

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.send("Server is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


//Import todo, add todos etc

// ✅ Get all todos
app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// ✅ Add a new todo
app.post("/todos", async (req, res) => {
    const { title } = req.body;
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.json(newTodo);
});

// ✅ Update a todo
app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    await Todo.findByIdAndUpdate(id, { completed });
    res.json({ message: "Updated!" });
});

// ✅ Delete a todo
app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Deleted!" });
});

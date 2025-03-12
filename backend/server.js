// import Todo from "../backend/models/todo.js"; // Import the model
// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose"; // ✅ Import Mongoose

// import path from "path";
// import { fileURLToPath } from "url";
// import dotenv from "dotenv";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config({ path: path.resolve(__dirname, ".env") });


// const app = express();
// app.use(cors());
// app.use(express.json()); // Allows us to send JSON data

// // ✅ Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("✅ Connected to MongoDB"))
//     .catch(err => console.error("❌ MongoDB Connection Error:", err));

//     app.use(express.static(path.join(__dirname, "public")));

//     app.get("/", (req, res) => {
//         res.sendFile(path.join(__dirname, "public", "main.html"));
//     });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// //Import todo, add todos etc
// // ✅ Get all todos
// app.get("/todos", async (req, res) => {
//     const todos = await Todo.find();
//     res.json(todos);
// });

// // ✅ Add a new todo
// app.post("/todos", async (req, res) => {
//     const { title } = req.body;
//     const newTodo = new Todo({ title });
//     await newTodo.save();
//     res.json(newTodo);
// });

// // ✅ Update a todo
// app.put("/todos/:id", async (req, res) => {
//     const { id } = req.params;
//     const { completed } = req.body;
//     await Todo.findByIdAndUpdate(id, { completed });
//     res.json({ message: "Updated!" });
// });

// // ✅ Delete a todo
// app.delete("/todos/:id", async (req, res) => {
//     const { id } = req.params;
//     await Todo.findByIdAndDelete(id);
//     res.json({ message: "Deleted!" });
// });



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

// ✅ Serve static files (Frontend)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "main.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

// ✅ Get all todos
app.get("/todos", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch todos" });
    }
});

// ✅ Add a new todo list (FIXED)
app.post("/todos", async (req, res) => {
    try {
        const { titleList, tasks } = req.body;

        if (!titleList) {
            return res.status(400).json({ error: "titleList is required" });
        }

        const newTodo = new Todo({
            titleList,
            tasks: tasks || [] // Default to an empty array if tasks are not provided
        });

        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: "Failed to create todo list" });
    }
});

// ✅ Update a todo list title
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { titleList } = req.body;

        if (!titleList) {
            return res.status(400).json({ error: "titleList is required" });
        }

        await Todo.findByIdAndUpdate(id, { titleList });
        res.json({ message: "Updated!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update todo list" });
    }
});

// ✅ Add a task to an existing list (NEW ROUTE)
app.put("/todos/:id/addTask", async (req, res) => {
    try {
        const { id } = req.params;
        const { taskID, taskTitle, taskDone } = req.body;

        if (!taskTitle) {
            return res.status(400).json({ error: "taskTitle is required" });
        }

        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ error: "Todo list not found" });
        }

        todo.tasks.push({
            taskID: taskID || (Math.random() * 1000000).toFixed(0), // Generate random ID if not provided
            taskTitle,
            taskDone: taskDone || false
        });

        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: "Failed to add task to todo list" });
    }
});

// ✅ Delete a todo list
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({ message: "Deleted!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete todo list" });
    }
});

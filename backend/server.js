import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; // ✅ Import Mongoose

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Allows us to send JSON data

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.send("Server is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


console.log("MongoDB URI:", process.env.MONGO_URI);
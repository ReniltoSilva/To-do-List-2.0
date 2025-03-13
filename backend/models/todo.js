import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema({
    taskID: { type: String, required: true },
    taskTitle: { type: String, required: true },
    taskDone: { type: Boolean, default: false }
});

const TodoSchema = new mongoose.Schema({
    listTitle: { type: String, required: true },
    tasks: { type: [TaskSchema], default: [] } // ✅ Allows an empty array or an array of tasks
});


export default mongoose.model("Todo", TodoSchema);

import mongoose from "mongoose";

// const TodoSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     completed: { type: Boolean, default: false }
// });


const TodoSchema = new mongoose.Schema({
    listTitle: { type: String, required: true },
    tasks: [{
        taskID: {type: Number, required: true},
        taskTitle: {type: String, required: true},
        taskDone: {type: Boolean, default: false}
    }],
});


export default mongoose.model("Todo", TodoSchema);

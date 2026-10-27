import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 1 },
    course: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
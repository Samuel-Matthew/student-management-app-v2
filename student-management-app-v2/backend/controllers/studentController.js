import Student from "../models/Student.js";

export async function getStudents(req, res) {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Could not load students." });
  }
}

export async function addStudent(req, res) {
  try {
    const { name, age, course } = req.body;
    if (!name?.trim() || age === "" || age === undefined || !course?.trim()) {
      return res.status(400).json({ message: "Name, age, and course are required." });
    }

    const student = await Student.create({
      name: name.trim(),
      age: Number(age),
      course: course.trim()
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message || "Could not add student." });
  }
}

export async function updateStudent(req, res) {
  try {
    const { name, age, course } = req.body;
    if (!name?.trim() || age === "" || age === undefined || !course?.trim()) {
      return res.status(400).json({ message: "Name, age, and course are required." });
    }

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name: name.trim(), age: Number(age), course: course.trim() },
      { new: true, runValidators: true }
    );

    if (!student) return res.status(404).json({ message: "Student not found." });
    res.json(student);
  } catch (error) {
    const status = error.name === "CastError" ? 400 : 400;
    res.status(status).json({ message: error.message || "Could not update student." });
  }
}
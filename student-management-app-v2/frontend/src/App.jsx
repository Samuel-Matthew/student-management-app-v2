
import { useEffect, useState } from "react";
import { createStudent, getStudents, updateStudent } from "./lib/api.js";
import StudentForm from "./components/StudentForm.jsx";
import StudentList from "./components/StudentList.jsx";

export default function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showStudents, setShowStudents] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadStudents() {
    try {
      setError("");
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleSave(studentData) {
    try {
      setError("");
      setMessage("");

      if (selectedStudent) {
        await updateStudent(selectedStudent._id, studentData);
        setMessage("Student updated successfully.");
      } else {
        await createStudent(studentData);
        setMessage("Student added successfully.");
      }

      setSelectedStudent(null);
      await loadStudents();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }

  return (
    <main className="container">
      <header>
        <h1>Student Manager</h1>
        <p>Add students and update their details.</p>
      </header>

      {message && <p className="notice success">{message}</p>}
      {error && <p className="notice error">{error}</p>}

      <StudentForm
        selectedStudent={selectedStudent}
        onSave={handleSave}
        onCancel={() => setSelectedStudent(null)}
      />

      <button onClick={() => setShowStudents(!showStudents)}>
        {showStudents ? "Hide Students" : "Display All Students"}
      </button>

      {showStudents && (
        loading ? (
          <p>Loading students...</p>
        ) : (
          <StudentList
            students={students}
            onEdit={(student) => {
              setMessage("");
              setError("");
              setSelectedStudent(student);
            }}
          />
        )
      )}
    </main>
  );
}

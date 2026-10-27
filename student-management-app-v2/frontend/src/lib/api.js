const API_URL = import.meta.env.VITE_API_URL;

// Get all students
export async function getStudents() {
  const response = await fetch(`${API_URL}/students`);
  const data = await response.json();
  return data;
}

// Add a student
export async function createStudent(student) {
  const response = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  const data = await response.json();
  return data;
}

// Update a student
export async function updateStudent(id, student) {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  const data = await response.json();
  return data;
}

import { useEffect, useState } from "react";

const emptyForm = { name: "", age: "", course: "" };

export default function StudentForm({ selectedStudent, onSave, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (selectedStudent) {
      setForm({
        name: selectedStudent.name,
        age: String(selectedStudent.age),
        course: selectedStudent.course
      });
    } else {
      setForm(emptyForm);
    }
  }, [selectedStudent]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await onSave({ ...form, age: Number(form.age) });
    setForm(emptyForm);
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{selectedStudent ? "Edit student" : "Add student"}</h2>
      <label>
        Full name
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        Age
        <input name="age" type="number" min="1" value={form.age} onChange={handleChange} required />
      </label>
      <label>
        Course
        <input name="course" value={form.course} onChange={handleChange} required />
      </label>
      <div className="form-actions">
        <button type="submit">{selectedStudent ? "Save changes" : "Add student"}</button>
        {selectedStudent && (
          <button type="button" className="secondary" onClick={onCancel}>Cancel</button>
        )}
      </div>
    </form>
  );
}
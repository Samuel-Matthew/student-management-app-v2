export default function StudentList({ students, onEdit }) {
  if (students.length === 0) {
    return <p className="empty">No students yet. Add the first student above.</p>;
  }

  return (
    <section className="student-list">
      <h2>Students ({students.length})</h2>
      {students.map((student) => (
        <article className="student-card" key={student._id}>
          <div>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
          </div>
          <button className="secondary" onClick={() => onEdit(student)}>Edit</button>
        </article>
      ))}
    </section>
  );
}
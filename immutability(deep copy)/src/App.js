import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [student, setStudent] = useState({
    name: "Alice",
    grades: [90, 85, 95]
  });

  const updateGrades = () => {
    // Incorrect way: directly modifying the nested array
    // student.grades[0] = 88;

    // Correct way: creating a new object with a new grades array
    const updatedStudent = {
      ...student,
      grades: [...student.grades],
      name: student.name
    };
    updatedStudent.grades[0] = 88;
    updatedStudent.name = "Larissa";
    setStudent(updatedStudent);
    console.log(updatedStudent);
  };
  return (
    <div>
      <p>Name: {student.name}</p>
      <p>Grades: {student.grades.join(", ")}</p>
      <button onClick={updateGrades}>Update Grades</button>
    </div>
  );
}

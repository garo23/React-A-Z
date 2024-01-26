import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JS" },
    { id: 2, text: "Learn html and css" },
    { id: 3, text: "Learn React" }
  ]);

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

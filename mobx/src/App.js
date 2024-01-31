import "./styles.css";

import React from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

// Create an observable store
const todoStore = observable({
  todos: [],
  addTodo: action(function (todo) {
    todoStore.todos.push(todo);
  })
});

// Functional component marked as @observer
const TodoList = observer(({ store }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {store.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

// Functional component for adding todos
const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = React.useState("");

  const handleAddTodo = () => {
    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

const App = () => {
  const handleAddTodo = (todo) => {
    todoStore.addTodo(todo);
  };

  return (
    <div>
      <TodoList store={todoStore} />
      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
};

export default App;

//red  52 i red 10

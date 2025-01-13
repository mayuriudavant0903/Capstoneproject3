import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store the to-do list
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Handle adding a new to-do
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Clear the input field
    }
  };

  // Handle removing a to-do item
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      <div>
        {/* Input for adding new to-dos */}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Display the to-do list */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

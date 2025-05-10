import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Grocery shopping", completed: false },
    { id: 2, text: "Clean house", completed: true },
    { id: 3, text: "Do laundry", completed: true },
    { id: 4, text: "Plan meals", completed: false },
    { id: 5, text: "Go hiking", completed: false },
    { id: 6, text: "Call family", completed: true },
    { id: 7, text: "Enjoy a hobby", completed: false },
  ]);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>WEEKEND TO DO LIST</h2>
      <div className="input-section">
        <input
          type="text"
          value={input}
          placeholder="Add new task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="todo-text">{todo.text}</span>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
 
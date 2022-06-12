import React, { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }
    // find the highest id in the todos array
    const highestId = todos.reduce((acc, curr) => {
      return curr.id > acc ? curr.id : acc;
    }, 0);
    setTodos([
      ...todos,
      { text: newTodo, completed: false, id: highestId + 1 },
    ]);
    setNewTodo("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autofocus=""
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
    </header>
  );
};

export default AddTodo;

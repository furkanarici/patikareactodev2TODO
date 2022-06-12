
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from "./components/TodoList"
import Footer from "./components/Footer";
import ListFooter from "./components/ListFooter";
import React, { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Redux', completed: false },
    { id: 3, text: 'Learn NodeJS', completed: false },
    { id: 4, text: 'Learn Tailwind CSS', completed: false },
  ]);


  const [currentFilter, setCurrentFilter] = useState('ALL');

  const handleFilter = (filter) => setCurrentFilter(filter);
  const handleToggle = (id) => {
    return setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }
  const handleToggleAll = () => {
    return setTodos(todos.map(todo => ({ ...todo, completed: !todos.every(todo => todo.completed) })))
  };

  const hadleDelete = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const handleClearComplatedAll = () => setTodos(todos.filter(todo => !todo.completed));


  return (
    <>
      <section className="todoapp">
        <AddTodo setTodos={setTodos} todos={todos} handleToggleAll={handleToggleAll} />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          currentFilter={currentFilter}
          handleToggle={handleToggle}
          hadleDelete={hadleDelete}
          handleToggleAll={handleToggleAll}
        />

        <ListFooter
          setTodos={setTodos}
          todos={todos}
          handleFilter={handleFilter}
          handleClearComplatedAll={handleClearComplatedAll}
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
        />
      </section>
      <Footer />
    </>
  );
}

export default App;

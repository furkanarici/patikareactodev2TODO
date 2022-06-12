const TodoList = ({
  currentFilter,
  todos,
  handleToggle,
  hadleDelete,
  handleToggleAll,
}) => {
  const filtered = todos.filter((todo) => {
    if (currentFilter === "Active") {
      return !todo.completed;
    }
    if (currentFilter === "Completed") {
      return todo.completed;
    } else {
      return true;
    }
  });

  return (
    <section className="main">
      <div onClick={handleToggleAll}>
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
      <ul className="todo-list">
        {filtered.map((todo, index) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                onClick={() => {
                  hadleDelete(todo.id);
                }}
                className="destroy"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;

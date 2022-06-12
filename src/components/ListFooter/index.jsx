const ListFooter = ({
  todos,
  handleClearComplatedAll,
  setCurrentFilter,
  currentFilter,
}) => {
  const notComplatedTodos = todos.filter((todo) => !todo.completed);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{notComplatedTodos.length} </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setCurrentFilter("ALL")}
            className={currentFilter === "ALL" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setCurrentFilter("Active")}
            className={currentFilter === "Active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setCurrentFilter("Completed")}
            className={currentFilter === "Completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>
      <button onClick={handleClearComplatedAll} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default ListFooter;

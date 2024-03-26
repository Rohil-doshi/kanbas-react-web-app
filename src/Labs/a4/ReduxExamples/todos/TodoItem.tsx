function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
      <li key={todo.id} className="list-group-item">
        <button className = "btn btn-primary m-2" onClick={() => setTodo(todo)}> Edit </button>
        <button className = "btn btn-danger m-2" onClick={() => deleteTodo(todo.id)}> Delete </button>
        {todo.title}
      </li>
    );
  }
  export default TodoItem;
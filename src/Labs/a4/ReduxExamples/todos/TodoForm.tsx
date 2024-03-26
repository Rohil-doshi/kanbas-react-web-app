import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
      <li className="list-group-item">
        <button className="btn btn-warning m-2" onClick={() => updateTodo(todo)}> Update </button>       
        <button className="btn btn-success m-2" onClick={() => addTodo(todo)}> Add </button>
        <input
          value={todo.title}
          onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }
        />
      </li>
    );
  }
  export default TodoForm;
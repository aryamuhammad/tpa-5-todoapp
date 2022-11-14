import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, updateTodo } from "../redux/todoAction";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo.id));
  };

  const handleCheckBox = (id) => {
    dispatch(completeTodo(id));
  };
  const [isediting, setIsEditing] = useState(false);
  const [name, setName] = useState(todo.task);

  const handleEdit = () => {
    if (isediting) {
      setName(todo.task);
    }
    setIsEditing(!isediting);
    dispatch(updateTodo({ ...todo, task: name }));
  };
  return (
    <div>
      <div
        className={
          todo.completed === true
            ? "todo-item-complete"
            : "todo-item"
        }
      >
        {isediting ? (
          <>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        ) : (
          <>
            <input type="checkbox" checked={todo.completed}onChange={() => handleCheckBox(todo.id)} />
            <div
              className={
                todo.completed === true
                  ? "text-decoration-line-through"
                  : "text-decoration-none"
              }
            >
              {todo.task}
            </div>
          </>
        )}

        <div className="d-flex gap-3">
          <button className="btn btn-success" onClick={() => handleEdit()}>
            {isediting ? "Update" : "Edit"}
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(todo)}>
            Delete
          </button>
        </div>
      </div>
</div>
  );
};

export default TodoItem;

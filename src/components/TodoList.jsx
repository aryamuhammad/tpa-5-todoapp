import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "../style.css";
const TodoList = () => {
  const todo = useSelector((state) => state);
  return (
    <div>
      <div>
        {todo.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;

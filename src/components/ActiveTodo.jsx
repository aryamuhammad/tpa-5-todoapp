import { useSelector } from "react-redux";
import TodoFormInput from "./TodoFormInput";
import TodoItem from "./TodoItem";
function ActiveTodo() {
  const todo = useSelector((state) => state);
  return (
    <>
      <TodoFormInput />
      {todo
        .filter((item) => item.completed == false)
        .map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.id} />
            </>
          );
        })}
    </>
  );
}
export default ActiveTodo;

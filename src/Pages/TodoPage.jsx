import TodoFormInput from "../components/TodoFormInput";
import TodoList from "../components/TodoList";
import "../style.css";
const TodoPage = () => {
  return (
    <div>
      <TodoFormInput />
      <TodoList />
    </div>
  );
};

export default TodoPage;

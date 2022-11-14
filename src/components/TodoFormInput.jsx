import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoAction";
import Filter from "./Filter";

const TodoFormInput = () => {
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputTodo("");
    if (inputTodo == "") {
      return alert("Please Input Your Plan");
    }
    const newTodo = {
      id: todo.length + 1,
      task: inputTodo,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <div className="mx-auto text-center p-5 todo-form">
      <h1>Todo App</h1>
      <form
        className="d-flex justify-content-between w-100"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-100 form-control"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button className="btn btn-primary mx-2">Add</button>
      </form>
      <Filter />
    </div>
  );
};

export default TodoFormInput;

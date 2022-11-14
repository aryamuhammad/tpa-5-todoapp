import { Route, Routes } from "react-router-dom";
import ActiveTodo from "./components/ActiveTodo";
import AllTodo from "./components/AllTodo";
import CompletedTodo from "./components/CompletedTodo";
import TodoPage from "./Pages/TodoPage";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="all" element={<AllTodo />} />
      <Route path="active" element={<ActiveTodo />} />
            <Route path="completed" element={<CompletedTodo />} />
    </Routes>
  );
}

export default App;

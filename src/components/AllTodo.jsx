import { useSelector } from "react-redux"
import TodoFormInput from "./TodoFormInput"
import TodoItem from "./TodoItem"

const AllTodo = ()=> {
    const todo = useSelector(state=>state)
    return (
        <>
        <TodoFormInput/>
        {todo.map((item, index)=> {
            return (
                <div key={index}>
                    <TodoItem todo={item}/>
                </div>
            )
        })}
        </>
    )
}

export default AllTodo
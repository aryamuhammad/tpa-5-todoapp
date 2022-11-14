import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./todoAction";

const initialState = [
  {
    id: 1,
    task: "TPA 4",
    completed: true,
  },
  {
    id: 2,
    task: "TPA 5",
    completed: true,
  },
  {
    id: 3,
    task: "Group Project",
    completed: false,
  },
];
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case DELETE_TODO:
      const filteredTodo = state.filter((todo) => todo.id !== action.payload);
      return filteredTodo;
    case COMPLETE_TODO:
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      return [...state];
    case UPDATE_TODO:
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.task = action.payload.task;
        }
        return [...state];
      });
    default:
      return state;
  }
}

export default todoReducer;

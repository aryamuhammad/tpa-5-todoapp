export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}

export function completeTodo(payload) {
  return {
    type: COMPLETE_TODO,
    payload,
  };
}
export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

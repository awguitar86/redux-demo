export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NEW_PLAYER = 'NEW_PLAYER';
export const ADD_TODO = 'ADD_TODO';
export const DELETE = 'DELETE';
export const REMOVE = 'REMOVE';

export function IncrementNumber(){
  return{
    type: INCREMENT,
  };
}
export function DecrementNumber(){
  return{
    type: DECREMENT,
  };
}
export function Change_Current_Player(name){
  return{
    payload: name,
    type: NEW_PLAYER,
  };
}
export function Add_Todo(todo){
  return{
    payload: todo,
    type: ADD_TODO,
  };
}
export function Remove_Todo(todo){
  return{
    data: todo,
    type: REMOVE,
  };
}
export function Delete_Todos(){
  return{
    type: DELETE,
  };
}
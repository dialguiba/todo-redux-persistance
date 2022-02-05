import { types } from "../redux-types/types";

export const todoSetActives = (event) => ({
  type: types.todoSetActives,
  payload: event,
});

export const addTodo = (todo) => ({
  type: types.todoAdd,
  payload: todo,
});

export const setCurrentDate = (date) => ({
  type: types.setCurrentDate,
  payload: date,
});

export const deleteTodo = (id) => ({
  type: types.deleteTodo,
  payload: id,
});

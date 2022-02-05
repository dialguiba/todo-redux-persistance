import moment from "moment";
import { types } from "../redux-types/types";

const initialState = {
  todos: [],
  currentTodos: [],
  currentDate: moment().format("YYYY-MM-DD"),
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.todoAdd:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case types.todoSetActives:
      return {
        ...state,
        currentTodos: state.todos.filter((e) => moment(e.date).format("YYYY-MM-DD") === action.payload),
      };

    case types.setCurrentDate:
      return {
        ...state,
        currentDate: action.payload,
      };

    case types.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};

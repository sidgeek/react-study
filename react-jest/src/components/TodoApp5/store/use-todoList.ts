import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { ITodo } from "./todoListReducer";
// import { createStoreAction } from "../action";
import { StoreType } from ".";

export const useTodoList = () => {
  const mapState = useCallback(
    (state: StoreType) => ({
      todoList: state.todoList
    }),
    []
  );
  return useMappedState(mapState);
};

export const useAddTodo = () => {
  const dispatch = useDispatch();
  return useCallback(
    (text: ITodo) => {
      dispatch({ type: "addTodo", payload: text });
    },
    [dispatch]
  );
};

export const useSetTodoList = () => {
  const dispatch = useDispatch();
  return useCallback(
    (todoList: ITodo[]) => {
      dispatch({ type: "setTodoList", payload: todoList });
    },
    [dispatch]
  );
};

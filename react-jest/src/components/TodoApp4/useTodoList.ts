import { useState, useCallback } from "react";

export default function useTodoList(initialValue: string[] = []) {
  const [todoList, setTodoList] = useState(initialValue);

  const addTodo = useCallback(
    (text: string) => {
      setTodoList([...todoList, text]);
    },
    [todoList]
  );

  return { todoList, addTodo };
}

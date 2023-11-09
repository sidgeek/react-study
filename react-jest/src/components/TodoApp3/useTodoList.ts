import { useState, useCallback } from "react";

export default function useTodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = useCallback(
    (text: string) => {
      setTodoList([...todoList, text]);
    },
    [todoList]
  );

  return { todoList, addTodo };
}

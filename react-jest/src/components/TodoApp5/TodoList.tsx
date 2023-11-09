import React from "react";
import Header from "./Header";
import { useTodoList, useAddTodo } from "./store/use-todoList";

export function TodoItem(props: { text: string }) {
  const { text } = props;
  return <div>{text}</div>;
}

export default function TodoList() {
  const { todoList } = useTodoList();
  const addTodo = useAddTodo();

  return (
    <div style={{ marginLeft: "100px" }}>
      <Header addTodo={addTodo} />
      {todoList.map((item, index) => (
        <TodoItem key={index} text={item}></TodoItem>
      ))}
    </div>
  );
}

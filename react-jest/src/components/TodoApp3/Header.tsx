import React, { useState } from "react";

interface IProps {
  addTodo: (text: string) => void;
}

export default function Header(props: IProps) {
  const { addTodo } = props;
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleInputKeyUp = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13 && value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <div>
      TodoList
      <input
        placeholder="Add Todo"
        value={value}
        onChange={handleInputChange}
        onKeyUp={handleInputKeyUp}
      />
    </div>
  );
}

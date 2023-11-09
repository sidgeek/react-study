import React from "react";
import Grandson from "./Grandson";

export default function Child(props: { value: number }) {
  const { value } = props;
  return (
    <div>
      child {value}
      <Grandson />
    </div>
  );
}

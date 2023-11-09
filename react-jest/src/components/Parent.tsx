import React from "react";
import Child from "./Child";

const loopNum = 3;
// const arr = Array(loopNum).map((_, i) => i + 1);
const arr = Array(loopNum)
  .fill(1)
  .map((_, i) => i + 1);

export default function Parent() {
  return (
    <div>
      {arr.map((e, index) => (
        <Child key={index} value={e} />
      ))}
      <button className="myButton"> test </button>
    </div>
  );
}

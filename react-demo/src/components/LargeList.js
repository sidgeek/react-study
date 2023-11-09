import React from "react";

export default function LargeList() {
  const len = 3000;
  const [list, setList] = React.useState(Array(len).fill(0));

  const handleClick = (index) => {
    const newList = list.map((e, i) => (i === index ? e + 1 : e));
    setList(newList);
  };
  return (
    <ul>
      {list.map((e, index) => (
        <li onClick={() => handleClick(index)}>{e}</li>
      ))}
    </ul>
  );
}

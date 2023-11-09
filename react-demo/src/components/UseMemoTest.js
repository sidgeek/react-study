import React, { useState, useMemo } from "react";

export default function UseMemoTest() {
  const [status, setStatus] = useState(false);
  const [number, setNumber] = useState(0);
  const [arr, setArr] = useState([]);

  const memoNumber = useMemo(() => {
    console.log("memoNumber 1");
    return number * 2;
  }, [number]);
  const memoArr = useMemo(
    () =>
      arr.map((e) => {
        console.log("memoArr 1");
        return e * 2;
      }),
    [arr]
  );

  const handleClick = () => {
    setNumber(number + 0);
    setArr([...arr, 1]);
    setStatus(!status);
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}> Click me</button>
      </div>
      <div>statue: {status}</div>
      <div>number: {number}</div>
      <div>memoNumber: {memoNumber}</div>
      <ul>
        {memoArr.map((e) => (
          <li key={e}>{e} </li>
        ))}
      </ul>
    </div>
  );
}

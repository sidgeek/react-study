import { memo } from "react";
import { useCount1 } from "../context/useCount1Context";

function Demo1() {
  console.log(">>> count render");
  const { count, setCount } = useCount1();

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click1
      </button>
    </div>
  );
}

export default memo(Demo1);

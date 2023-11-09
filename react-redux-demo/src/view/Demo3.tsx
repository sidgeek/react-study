import { memo } from "react";
import { useCount2 } from "../context/useCount2Context";

function Demo1() {
  console.log(">>> count2 render");
  const { count2, setCount2 } = useCount2();

  return (
    <div>
      <div>{count2}</div>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        click2
      </button>
    </div>
  );
}

export default memo(Demo1);

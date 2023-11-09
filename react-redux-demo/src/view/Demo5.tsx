import { memo } from "react";
import { useCount } from "../context2/useCountContext";

function Demo5() {
  console.log(">>> count4 render");
  const { count4, setCount4 } = useCount();

  return (
    <div>
      <div>{count4.value}</div>
      <button
        onClick={() => {
          setCount4(count4.value + 1);
        }}
      >
        click4
      </button>
    </div>
  );
}

export default memo(Demo5);

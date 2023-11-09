import { memo } from "react";
import { useCount } from "../context2/useCountContext";

function Demo4() {
  console.log(">>> count3 render");
  const { count3, setCount3 } = useCount();

  return (
    <div>
      <div>{count3.value}</div>
      <button
        onClick={() => {
          setCount3(count3.value + 1);
        }}
      >
        click3
      </button>
    </div>
  );
}

export default memo(Demo4);

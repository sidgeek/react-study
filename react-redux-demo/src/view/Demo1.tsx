import { memo } from "react";
import { useCount } from "../store/hooks/use-global-status";

function Demo1() {
  console.log(">>> count Demo1");
  const count = useCount();

  return <div>{count}</div>;
}

export default memo(Demo1);

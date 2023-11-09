import { useContext } from "react";

import { Count1Context } from ".";

export function useCount1() {
  const { setCount, count } = useContext(Count1Context);

  return {
    setCount,
    count,
  };
}

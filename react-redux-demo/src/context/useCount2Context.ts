import { useContext } from "react";

import { Count2Context } from ".";

export function useCount2() {
  const { setCount2, count2 } = useContext(Count2Context);

  return {
    setCount2,
    count2,
  };
}

import { useContext } from "react";

import { CountContext } from ".";

export function useCount() {
  const { setCount3, count3, count4, setCount4 } = useContext(CountContext);

  return {
    setCount3,
    count3,
    setCount4,
    count4,
  };
}

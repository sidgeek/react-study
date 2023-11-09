import { createContext, useState } from "react";

export interface ICount1Context {
  count: number;
  setCount: (val: number) => void;
}

export const Count1Context = createContext<ICount1Context>({
  count: 0,
  setCount: () => {},
});

export const Count1Provider = (props: any) => {
  const [count, setCount] = useState<number>(0);

  const context1 = {
    count,
    setCount,
  };

  return (
    <Count1Context.Provider value={context1}>
      {props.children}
    </Count1Context.Provider>
  );
};

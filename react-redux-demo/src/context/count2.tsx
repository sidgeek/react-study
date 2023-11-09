import { createContext, useState } from "react";

export interface ICount2Context {
  count2: number;
  setCount2: (val: number) => void;
}

export const Count2Context = createContext<ICount2Context>({
  count2: 0,
  setCount2: () => {},
});

export const Count2Provider = (props: any) => {
  const [count2, setCount2] = useState<number>(0);

  const context2 = {
    count2,
    setCount2,
  };

  return (
    <Count2Context.Provider value={context2}>
      {props.children}
    </Count2Context.Provider>
  );
};

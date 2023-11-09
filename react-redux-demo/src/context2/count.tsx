import { createContext, useReducer, useCallback } from "react";
import { produce } from "immer";

export interface NumberState {
  value: number;
}
export interface ICountState {
  count3: NumberState;
  count4: NumberState;
}

export interface ICountContext {
  count3: NumberState;
  count4: NumberState;
  setCount3: (val: number) => void;
  setCount4: (val: number) => void;
}

const InitNumberState = { value: 0 };

export const CountContext = createContext<ICountContext>({
  count3: InitNumberState,
  count4: InitNumberState,
  setCount3: () => {},
  setCount4: () => {},
});

const reducer = (state: ICountState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "count3":
        draft.count3.value = state.count3.value + 1;
        break;
      case "count4":
        draft.count4.value = state.count4.value + 1;
        break;
    }
  });

export const CountProvider = (props: any) => {
  const [count, dispatch] = useReducer(reducer, {
    count3: InitNumberState,
    count4: InitNumberState,
  });

  const setCount3 = useCallback(() => {
    dispatch({ type: "count3" });
  }, []);

  const setCount4 = useCallback(() => {
    dispatch({ type: "count4" });
  }, []);

  const context = {
    ...count,
    setCount3,
    setCount4,
  };

  return (
    <CountContext.Provider value={context}>
      {props.children}
    </CountContext.Provider>
  );
};

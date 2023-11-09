import React, { useState, useContext, useMemo, memo } from "react";

const MessageContext = React.createContext({});

export const useNumber2 = () => {
  const msg = useContext(MessageContext);
  const number2 = useMemo(() => msg.number2, [msg.number2]);
  return number2;
};

const Child = () => {
  const { number1 } = useContext(MessageContext);
  console.log("render child1");

  return useMemo(() => {
    console.log("render child1 really");
    return (
      <div>
        <p> this is child2 </p>
        <p> number1 {number1} </p>
      </div>
    );
  }, [number1]);
};

const Child2 = memo(({ data }) => {
  console.log("render child2");

  return (
    <div>
      <p> this is child2 </p>
      <p> number2 {data} </p>
    </div>
  );
});

const Parent = () => {
  const number2 = useNumber2();

  return (
    <>
      <Child />
      <Child2 data={number2} />
    </>
  );
};

export default function Index() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  return (
    <MessageContext.Provider value={{ number1: state1, number2: state2 }}>
      <div>
        <p>this is parent </p>
        <button
          onClick={() => {
            setState1(state1 + 1);
          }}
        >
          click me 1
        </button>
        <button
          onClick={() => {
            setState2(state2 + 1);
          }}
        >
          click me 2
        </button>

        <p>state1: {state1} </p>
        <p>state2: {state2} </p>

        <Parent />
      </div>
    </MessageContext.Provider>
  );
}

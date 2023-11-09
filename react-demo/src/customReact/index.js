import Didact from "./react";

// const element = React.createElement(
//   "div",
//   { id: "foo" },
//   React.createElement("a", null, "bar"),
//   React.createElement("b")
// );

// /** @jsx Didact.createElement */
// const element = (
//   <div style="background: salmon">
//     <h1>Hello World</h1>
//     <h2 style="text-align:right">from Didact</h2>
//   </div>
// );
// const container = document.getElementById("root");
// Didact.render(element, container);

/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);
  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>;
}

function Counter2() {
  return (
    <div>
      <h1>
        <p> I am p</p>
        <a>I am a </a>
      </h1>
      <h2>I am h2</h2>
    </div>
  );
}

const container = document.getElementById("root");
Didact.render(<Counter2 />, container);

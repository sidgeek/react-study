import React, { useState } from 'react'

export default function Test() {
  return (
    <div>
      <Input />
      <ExpensiveCpn />
    </div>
  )
}

function Input() {
  const [num, setNum] = useState(0)

  return (
    <>
      <input value={num} onChange={e => setNum(+e.target.value)}></input>
      <p>num is {num}</p>
    </>
  )
}

function ExpensiveCpn() {
  let now = performance.now()
  console.log(">>> 耗时的render");

  while (performance.now() - now < 1000) { }
  return <ExpensiveChild />
}

function ExpensiveChild() {
  let now = performance.now()
  console.log(">>> 耗时的render child");

  while (performance.now() - now < 1000) { }
  return <ExpensiveGrandChild />
}


function ExpensiveGrandChild() {
  let now = performance.now()
  console.log(">>> 耗时的render grand child");

  while (performance.now() - now < 1000) { }
  return <p>耗时计算 </p>
}

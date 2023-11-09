import React, { useState } from 'react'

// 把不变的和变的分开

export default function Test() {
  return (
    <div>
      <Input />
      <ExpensiveCpn></ExpensiveCpn>
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

  while (performance.now() - now < 1000) { }
  return <p>耗时计算 </p>
}

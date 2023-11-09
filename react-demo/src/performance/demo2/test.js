import React, { useState } from 'react'

export default function Test() {
  const [num, setNum] = useState(0)

  return (
    <div title={num + ""}>
      <input value={num} onChange={e => setNum(+e.target.value)}></input>
      <p>num is {num}</p>
      <ExpensiveCpn></ExpensiveCpn>
    </div>
  )
}

function ExpensiveCpn() {
  let now = performance.now()

  while (performance.now() - now < 1000) { }
  return <p>耗时计算 </p>
}

import React, { useState } from 'react'

// 把不变的和变的分开
// 当父组件满足性能优化条件 子孙组件才可能命中性能优化
// props state 与 context 都不发生变化，所以这里将ExpensiveCpn 在InputWrapper时, 
  // ExpensiveCpn 对应的props.children, 而props.children它的state, props都是 props.children
  // 平级中对应的属性，而不是当前InputWrapper中的props、state属性，所以没有发生变化

export default function Test() {
  return (
    <div>
      <InputWrapper>
        <ExpensiveCpn />
      </InputWrapper>
    </div>
  )
}

function InputWrapper(props) {
  const [num, setNum] = useState(0)

  return (
    <>
      <input value={num} onChange={e => setNum(+e.target.value)}></input>
      <p>num is {num}</p>
      {props.children}
    </>
  )
}

function ExpensiveCpn() {
  let now = performance.now()
  console.log(">>> 耗时的render");

  while (performance.now() - now < 1000) { }
  return <p>耗时计算 </p>
}

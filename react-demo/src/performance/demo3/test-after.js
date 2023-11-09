import React, { useState, useContext } from 'react'

const numCtx = React.createContext(0)
const updateNumCtx = React.createContext(() => {});

// 该如何比较props ? 
// 全等比较 -- 高效, 但不易命中 (默认)
// 浅比较 -- 不高效, 但易命中
// 当使用memo 包裹后，react 会改用浅比较

export default function Test() {
  const [num, setNum] = useState(0)

  return (
    <numCtx.Provider value={num}>
      <updateNumCtx.Provider value={setNum}>
        <Middle />
      </updateNumCtx.Provider>
    </numCtx.Provider>
  )
}

const Middle = React.memo(() => {
  return (
    <>
      <Button />
      <Show />
    </>)
})


function Button() {
  const updateNum = useContext(updateNumCtx)
  console.log('btn render');
  return <button onClick={() => updateNum(Math.random())}>产生随机数</button>
}


function Show() {
  const num = useContext(numCtx)
  // console.log('show render');
  return <p>num is: {num}</p>
}
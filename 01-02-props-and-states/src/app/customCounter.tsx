"use client"

import { useState } from "react"

type CustomCounterType = {
  heading: string,
  initCount: number
}

export default function CustomCounter({ heading, initCount }: CustomCounterType) {
  console.log(heading, initCount);
  const [count, setCount] = useState(initCount);
  const [inputVal, setInputVal] = useState(1);

  const handleCount = (e: any) => {
    setInputVal(e.target.value);
  }

  const add = () => {
    setCount(Number(count) + Number(inputVal));
  }

  const subtract = () => {
    setCount(count - inputVal);
  }

  const reset = () => {
    setInputVal(1);
    setCount(0);
  }
  
  return (
    <>
        <h1>{heading}</h1>
        <input type="text"
          value={inputVal}
          onChange={handleCount}
        />
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={reset}>Reset</button>
        <h2>{count}</h2>
    </>
  )
}
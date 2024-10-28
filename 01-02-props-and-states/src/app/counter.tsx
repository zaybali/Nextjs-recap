"use client"

import { useState } from "react"

type CustomCounterType = {
  heading: string,
  initCount: number
}

export default function Counter({ heading, initCount }: CustomCounterType) {
  const [count, setCount] = useState(initCount);
  const [inputVal, setInputVal] = useState(1);

  const handleCount = (e: any) => {
    console.log(e);
    setInputVal(e.target.value);
  }

  const add = () => {
    setCount(Number(count) + Number(inputVal));
  }

  const subtract = () => {
    count > 0 && setCount(count - inputVal);
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
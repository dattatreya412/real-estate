import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(true)
    function handleIncrement(){
        setNumber(!number)
        console.log(number)
    }
  return (
    <div>
        <h1>{number}</h1>
        <div onClick={handleIncrement}>increment</div>
    </div>
  )
}

export default Counter
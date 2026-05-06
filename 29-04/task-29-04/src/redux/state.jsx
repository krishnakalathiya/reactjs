import React from 'react'
import {useState} from 'react'

const State = () => {

  const [count, setCount] = useState(0)

  return (
    <>
    <button className='btn' onClick={() => setCount(count + 1)}>increment</button>
    </>
  )
}

export default State
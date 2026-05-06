import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { increment , decrement } from './action'

const Redux_state = () => {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <>
    <div>Redux_state</div>
    <div>Count: {count}</div>
    <button className='btn' onClick={() => dispatch(increment())}>increment</button>
    <button className='btn' onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
}

export default Redux_state
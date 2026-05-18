import React from 'react'

import {buyChocolate , buyCake , buyIceCream} from './action'
import { useSelector , useDispatch } from 'react-redux'

const Display = () => {


  const chocolate = useSelector((state) => state.choco.numOfChocolate)
  const cake = useSelector((state) => state.cake.numOfCake)
  const ice = useSelector((state) => state.ice.numOfIceCream)

  const dispatch = useDispatch()

  console.log(chocolate);
  console.log(cake);
  console.log(ice);
  


  return (
    <>
    <div>Display</div>
    <ul>
      <li>chocolate : {chocolate}</li>
      <li>ice : {ice}</li>
      <li>cake : {cake}</li>
    </ul>
    <div>
      <button onClick={() => dispatch(buyChocolate())}>buyChocolate</button>
      <button onClick={() => dispatch(buyIceCream())}>buyIceCream</button>
      <button onClick={() => dispatch(buyCake())}>buyCake</button>
    </div>
    
    </>
  )
}

export default Display
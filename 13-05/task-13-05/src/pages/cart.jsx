import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../componets/productcard';

const Cart = () => {

  const cartData = useSelector((State) => State.cart.cartItem)

  console.log("cartdata", cartData);
  return (
    <>
    <div>Cart</div>
    <ProductCard productData={cartData}/>
    </>
  )
}

export default Cart
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../componets/productcard'

const WishlistData = () => {

    const WishlistData = useSelector((state) => state.wishlist.wishlist)  
  
    console.log("WishlistData" , WishlistData)
  
    return (
      <>
      <div>WishlistData</div>
      <ProductCard productData={WishlistData}/>
      </>
    )
  }

export default WishlistData
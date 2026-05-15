import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../componets/productcard";


const Wishlist = () => {
 
    const wishlist = useSelector((State) => State.wishlist.wishlist)
    return (
        <>
        <div>wishlist</div>
        <ProductCard productData={wishlist}/>
       </>
    )
}
export default Wishlist
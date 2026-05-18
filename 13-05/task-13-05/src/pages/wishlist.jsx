// src/pages/Wishlist.jsx

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../componets/productcard";

const Wishlist = () => {

  const wishlist = useSelector(
    (state) => state.wishlist.wishlist
  );

  return (
    <div className="container mx-auto p-5">

      <h1 className="text-3xl font-bold mb-6">
        My Wishlist
      </h1>

      {wishlist.length > 0 ? (
        <ProductCard productData={wishlist} />
      ) : (
        <div className="text-center text-gray-500 text-lg">
          Wishlist is empty
        </div>
      )}

    </div>
  );
};

export default Wishlist;
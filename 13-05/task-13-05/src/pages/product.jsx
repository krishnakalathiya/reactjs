import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../componets/productcard";
import { fetchProduct } from "../features/product/productslice";
import { useEffect } from "react";
import Footer from "../componets/footer";

const Product = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <div className="mt-16">
        <div>Product</div>
        <div className="grid grid-cols-6">
          <div className="col-span-1">

          </div>
          <div className="col-span-5">
            <ProductCard productData={productData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
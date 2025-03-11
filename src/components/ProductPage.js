import React from "react";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  const { selectedProduct } = useSelector((store) => store.productsReducer);

  return <>{selectedProduct && <ProductDetails />}</>;
};

export default ProductPage;

import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((store) => store.productsReducer);
  return (
    <div className="list-group">
      {products.map((p) => (
        <li className="list-group-item" key={p.id}>
          <ProductCard product={p} />
        </li>
      ))}
    </div>
  );
};

export default ProductList;

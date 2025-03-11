import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { products } = useSelector((store) => store.productsReducer);
  return (
    <>
      <div className="alert alert-primary">
        <div className="container">
          <h1>Product Manager</h1>
          <small>react app powered with redux</small>
        </div>
      </div>
      <div className="container">
        <p className="lead">Total product count = {products.length}</p>
      </div>
    </>
  );
};

export default Header;

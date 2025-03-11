import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_PRODUCT, SELECT_PRODUCT } from "../redux/types/action-types";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    const action = { type: DELETE_PRODUCT, payload: product.id };
    dispatch(action);
  };

  const selectProduct = () => {
    const action = { type: SELECT_PRODUCT, payload: product };
    dispatch(action);
  };

  return (
    <>
      <h3>
        <span onClick={selectProduct}>{product.name}</span>
        <button
          onClick={deleteProduct}
          className="btn btn-link text-danger float-end"
        >
          <i className="bi bi-trash"></i>
        </button>
      </h3>
      <p>{product.description}</p>
      <p className="lead">INR {product.price}</p>
    </>
  );
};

export default ProductCard;

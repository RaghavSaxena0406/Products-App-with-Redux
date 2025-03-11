import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_SELECTION } from "../redux/types/action-types";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { selectedProduct: p } = useSelector((store) => store.productsReducer);

  return (
    <>
      <div className="card no-border">
        <img src={p.image} className="card-img-top" alt={p.description} />
        <div className="card-body">
          <h5 className="card-title">{p.name}</h5>
          <p className="card-text">{p.description}</p>
          <button
            onClick={() => dispatch({ type: CLEAR_SELECTION })}
            className="btn btn-link"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

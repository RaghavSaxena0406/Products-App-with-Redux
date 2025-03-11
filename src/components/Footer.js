import React from "react";
import { useSelector } from "react-redux";
const Footer = () => {
  const { products } = useSelector((store) => store.productsReducer);
  return <>Total product count = {products.length}</>;
};

export default Footer;

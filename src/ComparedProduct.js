import React from "react";
import { products } from "./ProductData";
import "./ComparedProduct.css";

function ComparedProduct({ comparedProduct }) {
  return (
    <div className="comparedProduct">
      {products.map((product) => {
        return (
          <>
            {product.id === comparedProduct && (
              <div className="comparedProduct__details">
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.rating}</p>
                <img src={product.image} alt="" />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default ComparedProduct;

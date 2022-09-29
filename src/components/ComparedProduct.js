import React from "react";
import { products } from "../components/ProductData";
import "../css/ComparedProduct.css";

function ComparedProduct({ comparedProduct }) {
  return (
    <div className="comparedProduct">
      {products.map((product) => {
        return (
          <>
            {product.id === comparedProduct && (
              <div className="comparedProduct__details">
                <img className="comparedProduct__image" src={product.image} alt="" />

                <p>{product.title}</p>

                <p className="product__price">
                  <small>$</small>
                  <strong>{product.price}</strong>
                </p>

                <div className="product__rating">
                  {Array(product.rating)
                    .fill()
                    .map((_, i) => (
                      <p>🌟</p>
                    ))}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default ComparedProduct;

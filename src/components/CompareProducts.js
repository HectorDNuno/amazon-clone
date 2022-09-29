import React, { useState } from "react";
import { products } from "../components/ProductData";
import "../css/CompareProducts.css";
import ComparedProduct from "../components/ComparedProduct";

function CompareProducts() {
  const [selectedProduct, setSelectedProduct] = useState();

  const handleSelect = (e) => {
    setSelectedProduct(e.target.value);
  };

  const [selectedProduct2, setSelectedProduct2] = useState();

  const handleSelect2 = (e) => {
    setSelectedProduct2(e.target.value);
  };

  return (
    <div className="compare">
      <h1>Compare Products</h1>

      <div className="selections">
        <div className="first__selection">
          <select name="selectList" id="selectList" onChange={handleSelect}>
            <option value="Select a product" disabled selected>
              Select a product
            </option>

            {products.map((product) => (
              <option value={product.id} key={product.id}>
                {product.title}
              </option>
            ))}
          </select>

          <ComparedProduct comparedProduct={selectedProduct} />
        </div>

        <div className="second__selection">
          <select name="selectList" id="selectList" onChange={handleSelect2}>
            <option value="Select a product" disabled selected>
              Select a product
            </option>

            {products.map((product) => (
              <option value={product.id} key={product.id}>
                {product.title}
              </option>
            ))}
          </select>

          <ComparedProduct comparedProduct={selectedProduct2} />
        </div>
      </div>
    </div>
  );
}

export default CompareProducts;

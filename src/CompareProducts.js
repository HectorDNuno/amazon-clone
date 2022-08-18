import React, { useState } from "react";
import { products } from "./ProductData";
import "./CompareProducts.css";
import ComparedProduct from "./ComparedProduct";

function CompareProducts() {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSelect = (e) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <div className="compare">
      <h1>Compare Products</h1>

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

      <ComparedProduct productId={selectedProduct} />
    </div>
  );
}

export default CompareProducts;

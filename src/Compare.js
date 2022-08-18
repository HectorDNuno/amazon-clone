import React, { useState } from "react";
import { products } from "./ProductData";
import "./Compare.css";

function Compare() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="compare">
      <h1>Compare Products</h1>

      <ul onClick={handleClick} className={click ? "dropdown-menu-clicked" : "dropdown-menu"}>
        {products.map((product) => (
          <li className="dropdown-link">{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Compare;

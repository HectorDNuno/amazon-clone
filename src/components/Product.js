import React from "react";
import "../css/Product.css";
import { useStateValue } from "../components/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //sends item to data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product" />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;

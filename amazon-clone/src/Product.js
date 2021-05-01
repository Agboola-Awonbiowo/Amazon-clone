import React, { useState, useReducer } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider"

function Product({ id, tittle, image, price, rating,}) {


  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    // dispatch some action item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          tittle: tittle,
          image: image,
          price: price,
          rating: rating, 
          
        },
      });
  };
 
  
  return (
    <div className="product">
      <div className="product__info">
        <p>{tittle}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
         <div className="btn_div">
         <button onClick={() => dispatch({ type: "increment"})}>-</button>
            <span>{}</span>
         <button onClick={() => dispatch({ type: "decrement"})}>+</button>
         </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;

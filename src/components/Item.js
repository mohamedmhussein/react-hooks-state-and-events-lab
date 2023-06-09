import React, { useState } from "react";




function Item({ name, category }) {

  const [isOnCart, setIsOnCart] = useState(false)
  function handleCart(event) {
    setIsOnCart(!isOnCart)

  }
  const cart = isOnCart ? "Remove from Cart" : "Add to Cart"
  const cartClass = isOnCart ? "in-cart" : null
  const addRemove = isOnCart ? "remove" : "add"
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addRemove} onClick={handleCart}>{cart}</button>
    </li>
  );
}

export default Item;

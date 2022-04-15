import React from "react";
import { Link } from "react-router-dom";

function EmptyCart({ onGoBack }) {
  return (
    <div className="emptyCart">
      <img className="cartImg" src="img/empty-cart.jpg" alt="empty cart" />
      <h2>Empty cart</h2>
      <p>Add at least one pair of shoes per order</p>
      <Link to="/">
        <button className="greenButton">
          <img className="arrow" src="/img/arrow.svg" alt="Arrow" />
          <span>Go Back</span>
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;

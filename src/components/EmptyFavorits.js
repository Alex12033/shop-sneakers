import React from "react";
import { Link } from "react-router-dom";

function EmptyFavorits() {
  return (
    <div className="emptyFavorites">
      <img src="img/favorites-star-icon-png-0.png" alt="star favorites" />
      <h2>Your favorite empty</h2>
      <span>Go back in shop and mark your favorite product</span>
      <Link to="/">
        <button className="greenButton">
          <img className="arrow" src="/img/arrow.svg" alt="Arrow" />
          <span>Go Back</span>
        </button>
      </Link>
    </div>
  );
}

export default EmptyFavorits;

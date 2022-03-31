import React, { useState } from "react";

function Card({ objKey, name, price, src, onPlus, getPrice, onMinus }) {
  const [isAdded, setIsAdded] = useState(0);
  
  const onClickPlus = () => {
    onPlus({ name, price, src, objKey}); //send info for display card in cart drawer
    getPrice({ price, objKey }); //send price into cart drawer and cart on main page
    setIsAdded(isAdded + 1); //counter card
  };

  const onClickMinus = () => {
    if (isAdded > 0) {
      setIsAdded(isAdded-1);
      onMinus({objKey});
    }
  };

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <div className="count">
        {isAdded === 0
        ? false
        : true && (
            <div className="countAdded">
              <p>{isAdded}</p>
            </div>
          )}
      </div>
      <img width="133" height="122" src={src} alt="" />
      <h5>{name}</h5>
      <div className="cardBottom">
        <div className="priceCard">
          <span>Price:</span>
          <b>{price}$</b>
          <div>
            <img
              className="button"
              onClick={onClickPlus}
              src="/img/plus.svg"
              alt="plus"
            />
            <img
              className="button"
              onClick={onClickMinus}
              src="/img/minus.svg"
              alt="plus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
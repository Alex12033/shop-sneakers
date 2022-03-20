import React, { useState } from "react";

function Card({ name, price, src }) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width="133" height="122" src={src} alt="" />
      <h5>{name}</h5>
      <div className="cardBottom">
        <div className="priceCard">
          <span>Price:</span>
          <b>{price}</b>
          <div>
            <img
              className="button"
              onClick={onClickPlus}
              src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
              alt="plus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

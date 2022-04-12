import React, { useState } from "react";

function Card({name, price, src, id, onPlus, onLike }) {
  
  const [checked, setChecked] = useState(true);
  const [onFavorite, setOnFavorite] = useState(true);

  function onClickPlus() {
    setChecked(!checked);
    if (checked) {
      onPlus({name, price, src}); //send info for display card in cart drawer
    }
  }

  const onLikeClick = () => {
    setOnFavorite(!onFavorite);
    if (onFavorite) {
      onLike({name, price, src});
    }
  };

  return (
    <div className="card">
      <div className="favorite">
        <img
          onClick={onLikeClick}
          src={onFavorite ? "/img/unliked.svg" : "/img/liked.svg" }
          alt="unliked"
        />
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
              src={checked ? "/img/plus.svg" : "/img/btn-checked.svg"}
              alt="plus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

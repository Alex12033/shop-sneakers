import React, { useState } from "react";

function Card({
  objKey,
  name,
  price,
  src,
  onPlus,
}) {

  const [checked, setChecked] = useState(true);

  function onClickPlus() {
    setChecked(!checked);
    onPlus({ name, price, src, objKey }); //send info for display card in cart drawer    
  }

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

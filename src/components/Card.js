import React from "react";

function Card({name, price}) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width="133" height="122" src="/img/sneakers/1.jpg" alt="" />
      <h5>{name}</h5>
      <div className="cardBottom">
        <div className="priceCard">
          <span>Price:</span>
          <b>{price}</b>
          <div>
            <button>
              <img width="11" height="11" src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

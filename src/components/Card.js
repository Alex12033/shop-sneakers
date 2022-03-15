import React from "react";

function Card() {
  return (
    <div className="sneakers">
      <div className="card">
        <div className="favorite">
          <img src="/img/unliked.svg" alt="unliked" />
        </div>
        <img width="133" height="122" src="/img/sneakers/1.jpg" alt="" />
        <h5>Man sneakers Nike Blazer Mid Seude</h5>
        <div className="cardBottom">
          <div className="priceCard">
            <span>Price:</span>
            <b>12 999 $</b>
            <div>
              <button>
                <img width="11" height="11" src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

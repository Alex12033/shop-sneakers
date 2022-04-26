import React from "react";

function TotalPriceBlock({ onOrder, totalSum }) {
  return (
    <div className="items">
      <ul className="cartTotalBlock">
        <li>
          <span>Total:</span>
          <div></div>
          {totalSum} $
        </li>
        <li>
          <span>Tax 5%:</span>
          <div></div>
          <b>{Math.ceil((totalSum / 100) * 5)} $</b>
        </li>
      </ul>

      <button onClick={onOrder} className="buttonOrder">
        Check order
        <img className="arrow" src="/img/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default TotalPriceBlock;

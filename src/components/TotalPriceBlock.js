import React from "react";

function TotalPriceBlock({ onOrder, totalSum }) {
  //console.log(totalSum);
  return (
    <div className="items">
      <ul className="cartTotalBlock">
        <li>
          <span>Total:</span>
          <div></div>
          45
        </li>
        <li>
          <span>Tax 5%:</span>
          <div></div>
          <b>{totalSum} $</b>
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

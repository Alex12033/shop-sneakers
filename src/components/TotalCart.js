import React from "react";

import style from "./TotalCart.module.scss";

function TotalCart({ onOrder, totalSum }) {
  return (
    <div className={style.items}>
      <ul className={style.cartTotalBlock}>
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

      <button onClick={onOrder} className={style.buttonOrder}>
        Check order
        <img className="arrow" src="/img/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default TotalCart;

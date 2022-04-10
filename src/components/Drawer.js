import React from "react";
import ItemsCart from "./ItemsCart";
import EmptyCart from "./EmptyCart";
import TotalCartPrice from "./TotalCartPrice";

function Drawer({ onClose, items, onDeleteFromCart }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Cart
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <ItemsCart items={items} onDeleteFromCart={onDeleteFromCart} />
        ) : (
          <EmptyCart />
        )}

        <div className="items">
          <ul className="cartTotalBlock">
            <li>
              <span>Total:</span>
              <div></div>
              <TotalCartPrice totalPrice={[]} />
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1040$</b>
            </li>
          </ul>
          <button className="greenButton">
            Check order{" "}
            <img className="arrow" src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

import React, { useEffect, useState } from "react";
import TotalCartPrice from "./TotalCartPrice";

function Drawer({ onClose, items, totalPrice, onDeleteFromCart }) {
  const [removeItem, setRemoveItem] = useState([]);

  useEffect(() => setRemoveItem(items), [items]);

  const deleteFromCart = (key) => {
    setRemoveItem(removeItem.filter((item) => item.objKey !== key));

    onDeleteFromCart(key);
  };

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
        <div className="scroll">
          {removeItem.map((obj) => (
            <div className="cartItem">
              <img width={70} height={70} src={obj.src} alt="Sneakers" />
              <div className="titlePrice">
                <p>{obj.name}</p>
                <b>{obj.price}$</b>
              </div>
              <div className="columnCartCloseCount">
                <img
                  onClick={() => deleteFromCart(obj)}
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />

                <div className="countInCart">
                  <p>9 <span>pcs</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="items">
          <ul className="cartTotalBlock">
            <li>
              <span>Total:</span>
              <div></div>
              <TotalCartPrice totalPrice={totalPrice} />
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

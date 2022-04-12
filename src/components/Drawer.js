import React from "react";
import ItemsCart from "./ItemsCart";
import EmptyCart from "./EmptyCart";
import TotalPriceBlock from "./TotalPriceBlock";

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
        {/* {console.log(items, 'drawer')} */}
        {items.length > 0 ? (
          <>
            <ItemsCart items={items} onDeleteFromCart={onDeleteFromCart} />
            <TotalPriceBlock />
          </>
        ) : (
          <EmptyCart onGoBack={onClose} />
        )}
      </div>
    </div>
  );
}

export default Drawer;

import React, { useEffect, useState } from "react";

import axios from "axios";

import ItemsCart from "./ItemsCart";
import EmptyCart from "./EmptyCart";
import TotalPriceBlock from "./TotalPriceBlock";

import { Link } from "react-router-dom";

function Drawer() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://6236f38ff5f6e28a1547bdc4.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);
  console.log(cartItems);

  const filterItems = (items, id) => {
    return items.filter((item) => item.id !== id);
  };
  const onRemoveItemFromCart = (id) => {
    axios.delete(`https://6236f38ff5f6e28a1547bdc4.mockapi.io/cart/${id}`);
    setCartItems((prev) => filterItems(prev, id));
  };
  return (
    <>
      <div className="overlay"></div>
      <div className="drawer">
        <h2>
          Cart
          <Link to="/">
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </Link>
        </h2>
        {/* {console.log(items, 'drawer')} */}
        {cartItems.length > 0 ? (
          <>
            <ItemsCart items={cartItems} onDeleteFromCart={onRemoveItemFromCart} />
            <TotalPriceBlock />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
}

export default Drawer;

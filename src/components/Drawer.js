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
      .get("http://localhost:8000/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const filterItems = (items, id) => {
    return items.filter((item) => item.id !== id);
  };

  const onRemoveItemFromCart = (id) => {
    axios.delete(`http://localhost:8000/cart/${id}`);
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

        {cartItems.length > 0 ? (
          <>
            <ItemsCart
              items={cartItems}
              onDeleteFromCart={onRemoveItemFromCart}
            />
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

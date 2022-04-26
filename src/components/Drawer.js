import React, { useContext, useState } from "react";

import axios from "axios";

import Notice from "./Notice";
import TotalPriceBlock from "./TotalPriceBlock";

import AppContext from "./context";

import { Link } from "react-router-dom";

function Drawer() {
  const [isOrdered, setIsOsdered] = useState(false);

  const { getTotalSum } = useContext(AppContext);
  const { cartItems } = useContext(AppContext);
  const { setCartItems } = useContext(AppContext);

  const onOrder = async () => {
    await axios
      .post("http://localhost:8000/orders", cartItems)
      .catch((error) => console.log(error.toJSON()));

    Promise.all(
      cartItems.map(
        async (obj) =>
          await axios
            .delete(`http://localhost:8000/cart/${obj.id}`)
            .catch((error) => console.log(error.toJSON()))
      )
    );

    setCartItems([]);
    setIsOsdered(true);
  };

  const filterItems = (items, id) => {
    return items.filter((item) => item.id !== id);
  };

  const onRemoveItemFromCart = (id) => {
    try {
      axios.delete(`http://localhost:8000/cart/${id}`);
      setCartItems((prev) => filterItems(prev, id));
    } catch (error) {
      alert("Error delete item from cart");
    }
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
            <div className="scroll">
              {cartItems.map((obj) => (
                <div className="cartItem">
                  <img width={70} height={70} src={obj.src} alt="Sneakers" />
                  <div className="titlePrice">
                    <p>{obj.name}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <div className="columnCartCloseCount">
                    <img
                      onClick={function () {
                        onRemoveItemFromCart(obj.id);
                      }}
                      className="removeBtn"
                      src="/img/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                </div>
              ))}
            </div>
            <TotalPriceBlock onOrder={onOrder} totalSum={getTotalSum()} />
          </>
        ) : (
          <Notice
            img={isOrdered ? "img/complete-order.jpg" : "img/empty-cart.jpg"}
            title={
              isOrdered
                ? "Your order # will be transferred to the courier delivery service "
                : "Empty cart"
            }
            description={
              isOrdered
                ? "Have nice day"
                : "Add at least one pair of shoes per order"
            }
            isOrder={isOrdered}
          />
        )}
      </div>
    </>
  );
}

export default Drawer;

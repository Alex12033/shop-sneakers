import React, { useContext, useState } from "react";

import axios from "axios";

import Notice from "./Notice";
import TotalCart from "./TotalCart";

import AppContext from "./context";

import { Link } from "react-router-dom";

import style from "./Drawer.module.scss";



function Drawer() {
  const [isOrdered, setIsOsdered] = useState(false);

  const { getTotalSum } = useContext(AppContext);
  const { cartItems } = useContext(AppContext);
  const { setCartItems } = useContext(AppContext);

  const onOrder = async () => {
    await axios
      .post("https://sneakers-course.herokuapp.com/api/orders", cartItems)
      .catch((error) => console.log(error.toJSON()));

    Promise.all(
      cartItems.map(
        async (obj) =>
          await axios
            .delete(`https://sneakers-course.herokuapp.com/api/cart/${obj.id}`)
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
      axios.delete(`https://sneakers-course.herokuapp.com/api/cart/${id}`);
      setCartItems((prev) => filterItems(prev, id));
    } catch (error) {
      alert("Error delete item from cart");
    }
  };

  return (
    <>
      <div className={style.overlay}></div>
      <div className={style.drawer}>
        <h2>
          Cart
          <Link to="/">
            <img className={style.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
          </Link>
        </h2>

        {cartItems.length > 0 ? (
          <>
            <div className={style.scroll}>
              {cartItems.map((obj) => (
                <div className={style.cartItem}>
                  <img width={70} height={70} src={obj.src} alt="Sneakers" />
                  <div className={style.titlePrice}>
                    <p>{obj.name}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <div className={style.columnCartCloseCount}>
                    <img
                      onClick={function () {
                        onRemoveItemFromCart(obj.id);
                      }}
                      className={style.removeBtn}
                      src="/img/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                </div>
              ))}
            </div>
            <TotalCart onOrder={onOrder} totalSum={getTotalSum()} />
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

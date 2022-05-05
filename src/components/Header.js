import React, { useContext } from "react";

import { Link } from "react-router-dom";

import AppContext from "./context";

import style from "./Header.module.scss";

function Header({ children, checkUserLogin }) {
  const { getTotalSum } = useContext(AppContext);
  console.log(checkUserLogin);
  return (
    <header className={style.header}>
      <Link to="/">
        <div className={style.headerLeft}>
          <img width="40" height="40" src="/img/logo.png" alt="logo" />
          <div className={style.headerInfo}>
            <h3>React Sneakers</h3>
            <p>best </p>
          </div>
        </div>
      </Link>

      {checkUserLogin ? (
        <ul className={style.headerRight}>
          <Link to="/drawer">
            <li className={style.menu}>
              <img
                className={style.img}
                width="18"
                height="18"
                src="/img/cart.svg"
                alt="logo"
              />
              <span className={style.price}>{getTotalSum()} $</span>
            </li>
          </Link>

          <Link to="/favorites">
            <li className={style.menu}>
              <img width="18" height="18" src="/img/heart.svg" alt="heart" />
            </li>
          </Link>

          <Link to="/orders">
            <li className={style.menu}>
              <img width="18" height="18" src="/img/user.svg" alt="user" />
            </li>
          </Link>

          {children}
        </ul>
      ) : (
        children
      )}
    </header>
  );
}

export default Header;

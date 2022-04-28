import React, { useContext } from "react";

import { Link } from "react-router-dom";

import AppContext from "./context";

import style from "./Header.module.scss";

function Header() {
  const { getTotalSum } = useContext(AppContext);
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

      <ul className={style.headerRight}>
        <Link to="/drawer">
          <li>
            <img className={style.img} width="18" height="18" src="/img/cart.svg" alt="logo" />
            <span>{getTotalSum()} $</span>
          </li>
        </Link>

        <Link to="/favorites">
          <li>
            <img width="18" height="18" src="/img/heart.svg" alt="heart" />
          </li>
        </Link>

        <Link to="/orders">
          <li>
            <img width="18" height="18" src="/img/user.svg" alt="user" />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;

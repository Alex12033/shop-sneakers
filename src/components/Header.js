import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "./context";

function Header() {
  const { sum } = useContext(AppContext);
  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width="40" height="40" src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Shop of best </p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <Link to="/drawer">
          <li>
            <img width="18" height="18" src="/img/cart.svg" alt="logo" />
            <span>{sum} $</span>
          </li>
        </Link>

        <Link to="/favorites">
          <li>
            <img width="18" height="18" src="/img/heart.svg" alt="heart" />
          </li>
        </Link>
        <li>
          <img width="18" height="18" src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

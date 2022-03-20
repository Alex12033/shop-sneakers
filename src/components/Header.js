import React from "react";

function Header({displayCart}) {
  
  return (
    <header>
      <div className="headerLeft">
        <img width="40" height="40" src="/img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Shop of best </p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={displayCart}>
          <img
            width="18"
            height="18"
            src="/img/cart.svg"
            alt="logo"
          />
          <span> 1205 $ </span>
        </li>
        <li>
          <img width="18" height="18" src="/img/user.svg" alt="logo" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

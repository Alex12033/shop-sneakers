import React from "react";

import { Link } from "react-router-dom";

import styles from "./LoginBtn.module.scss";

export const LoginBtn = ({ checkUserLogin, setLog }) => {

  const logOut = () => {
    setLog(window.localStorage.removeItem('isLogged'))
  };
  
  return (
    <Link to={"/LoginForm"}>
      <li>
        <button onClick={logOut} className={styles.loginBtn}>
          <span className={styles.textBtn}>
            {checkUserLogin !== undefined ? "Log Out" : "Log In"}
          </span>
        </button>
      </li>
    </Link>
  );
};

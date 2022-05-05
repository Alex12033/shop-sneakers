import React from "react";

import { Link } from "react-router-dom";

import styles from "./LoginBtn.module.scss";

export const LoginBtn = ({ checkUserLogin, setLog }) => {

  const logOut = () => {
    setLog(window.localStorage.setItem('isLogged', false))
  };

  console.log(checkUserLogin);

  return (
    <Link to={"/LoginForm"}>
      <li>
        <button onClick={logOut} className={styles.loginBtn}>
          <span className={styles.textBtn}>
            {checkUserLogin ? "Log Out" : "Log In"}
          </span>
        </button>
      </li>
    </Link>
  );
};

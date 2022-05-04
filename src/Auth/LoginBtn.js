import React, { useContext } from "react";

import { Link } from "react-router-dom";

import styles from "./LoginBtn.module.scss";

import AppContext from "../components/context";

export const LoginBtn = ({ checkUserLogin }) => {
  const { setLog } = useContext(AppContext);
  console.log(checkUserLogin);

  const logOut = () => {
    setLog(false);
  };

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

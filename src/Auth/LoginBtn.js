import React from "react";

import { Link } from "react-router-dom";

import styles from "./LoginBtn.module.scss";

export const LoginBtn = () => {
  return (
    <Link to="/LoginForm">
      <button className={styles.loginBtn}><span className={styles.textBtn}>LoginBtn</span></button>
    </Link>
  );
};

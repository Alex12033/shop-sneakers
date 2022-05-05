import React, { useState } from "react";

import styles from "./LoginForm.module.scss";

import axios from "axios";

import { Link } from "react-router-dom";

export const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const auth = {
    login: login,
    password: password,
    email: email,
  };

  const signIn = async () => {
    if (login === "" || password === "" || email === "") {
      alert("Fill in all the fields");
    } else {
      await axios.post("https://sneakers-course.herokuapp.com/api/users", auth);
      window.location.href = "https://sneakers-course.herokuapp.com/LoginForm";
    }
    setLogin("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="sneakers">
      <div className={styles.loginForm}>
        <h3 className={styles.titleForm}>Sign Form</h3>
        <div className={styles.dividerForm}></div>
        <form className={styles.formInputs}>
          <input
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Username"
            className={styles.input}
            value={login}
          ></input>

          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles.input}
            value={password}
          ></input>

          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={styles.input}
            value={email}
          ></input>
        </form>

        <Link to="/LoginForm">
          <button className={styles.loginBtn} onClick={signIn}>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

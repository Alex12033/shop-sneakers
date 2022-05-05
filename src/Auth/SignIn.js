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
      window.location.href = "https://www.google.com/search?q=window.location.href+heroku+app&sxsrf=ALiCzsacYEqkv5QHnfaRyT5jIRg30GYCrQ%3A1651738619295&ei=-4dzYuPZEcGOrwTz3LbAAQ&oq=window.location.href+heroku&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAEyBQghEKABOgcIIxDqAhAnOgQIIxAnOgQIABBDOhEILhCABBCxAxCDARDHARCjAjoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOgsIABCABBCxAxCDAToHCAAQsQMQQzoKCAAQgAQQhwIQFDoFCAAQgAQ6BQgAEMsBOgYIABAWEB5KBAhBGABKBAhGGABQ4x1YoXZgp4cBaAFwAXgAgAGaAYgBqw6SAQQxMi42mAEAoAEBsAEKwAEB&sclient=gws-wiz"; // need for renew component and get data in login form
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

          <button className={styles.loginBtn} onClick={signIn}>
            Sign In
          </button>
        
      </div>
    </div>
  );
};

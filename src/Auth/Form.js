import React from "react";

import { Link } from "react-router-dom";

import styles from "./Form.module.scss";

const Form = ({
  setEmail, //for sign in form
  email, //for sign in form
  setSignInLog, //for sign in form
  signInLog, //for sign in form
  setSignInPwd, // for sign in form
  signInPwd, // for sign in form
  signIn, // for sign in form
  choice,
  login,
  setLogin,
  password,
  setPassword,
  alerts,
  isLoggedUser,
}) => {
  return choice ? (
    <>
      <div className={styles.loginForm}>
        <h3 className={styles.titleForm}>Login</h3>
        <div className={styles.dividerForm}></div>
        <form className={styles.formInputs}>
          <input
            placeholder="Username"
            className={styles.input}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></input>

          <input
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>

        {alerts && <div className={styles.alerts}>Please sign in</div>}

        <button className={styles.loginBtn} onClick={isLoggedUser}>
          Login
        </button>

        <Link className={styles.sign} to="/SignIn">
          <span className={alerts && styles.lighting}>Sign In</span>
        </Link>
      </div>
    </>
  ) : (
    <div className={styles.loginForm}>
      <h3 className={styles.titleForm}>Sign Form</h3>
      <div className={styles.dividerForm}></div>
      <form className={styles.formInputs}>
        <input
          onChange={(e) => setSignInLog(e.target.value)}
          placeholder="Username"
          className={styles.input}
          value={signInLog}
        ></input>

        <input
          onChange={(e) => setSignInPwd(e.target.value)}
          placeholder="Password"
          className={styles.input}
          value={signInPwd}
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
  );
};

export default Form;

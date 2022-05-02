import React, { useEffect, useState } from "react";

import styles from "./LoginForm.module.scss";

import axios from "axios";

export const LoginForm = () => {
  const [isLogged, setIsLogged] = useState(false);

  const [users, setUsers] = useState([]);

  const [login, setLogin] = useState("");

  const [password, setPassword] = useState("");

  const auth = {
    login: login,
    password: password,
  };

  const isLoggedUser = async () => {
    auth.login === "" || auth.password === ""
      ? alert("Please enter login and password")
      : await axios.post(
          "https://sneakers-course.herokuapp.com/api/users",
          auth
        );

    const { data } = await axios.get(
      "https://sneakers-course.herokuapp.com/api/users"
    );
    setUsers(data);
    
    setLogin("");
    setPassword("");
  };

  console.log(users.map(obj => (obj.login === login)));

  return (
    <div className="sneakers">
      <div className={styles.loginForm}>
        <h3 className={styles.titleForm}>Login</h3>
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
        </form>
        <button className={styles.loginBtn} onClick={isLoggedUser}>
          Login
        </button>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import styles from "./LoginForm.module.scss";

import { Successfully } from "./Successfully";

export const LoginForm = () => {
  const [isLogged, setIsLogged] = useState(false);

  const [alerts, setAlerts] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);

  const [nameUser, setNameUser] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://sneakers-course.herokuapp.com/api/users"
      );
      setUsers(data);
    })();
  }, []);
  

  const isLoggedUser = async () => {
    const findUser = users.find(
      (obj) => obj.login === login && obj.password === password
    );

    if (findUser !== undefined) {
      setNameUser(findUser.login);
      setIsLogged(true);
      window.localStorage.setItem("isLogged", true);
    } else {
      setAlerts(true);

      setTimeout(() => {
        setAlerts(false);
      }, 3000);
    }
    

    setLogin("");
    setPassword("");
  };

  console.log(isLogged, users);

  return isLogged ? (
    <Successfully nameUser={nameUser} />
  ) : (
    <div className="sneakers">
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
    </div>
  );
};

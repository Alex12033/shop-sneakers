import React, { useEffect, useState } from "react";

import axios from "axios";

import { Successfully } from "./Successfully";

import Form from "./Form";

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

  return isLogged ? (
    <Successfully nameUser={nameUser} />
  ) : (
    <div className="sneakers">
      <Form
        choice={true}
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
        alerts={alerts}
        isLoggedUser={isLoggedUser}
      />
    </div>
  );
};

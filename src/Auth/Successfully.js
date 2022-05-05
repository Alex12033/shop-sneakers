import React, { useContext } from "react";

import styles from "./Successfully.module.scss";

import AppContext from "../components/context";
import { Link } from "react-router-dom";

export const Successfully = ({ nameUser }) => {
  const { setLog } = useContext(AppContext);

  const redirect = () => {
    setLog(window.localStorage.getItem("isLogged", true)); //this redirect need for renew app cpmponent and renew local storage variable isLogged
  };

  return (
    <div className="sneakers">
      <div className={styles.containerCongr}>
        <div className={styles.congratulations}>
          <div className={styles.checked}>
            <img className={styles.mark} src="img/mark.svg" alt="check" />
          </div>
          <span className={styles.userName}>Hello {nameUser}</span>{" "}
          <h4>Congratulations!</h4>
          <h5> You succsessfull log in!</h5>
          <Link to="/">
            <button onClick={redirect} className={styles.successfullyBtn}>
              go on shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

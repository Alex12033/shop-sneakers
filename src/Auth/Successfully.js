import React from "react";

import { Link } from "react-router-dom";

import styles from "./Successfully.module.scss";

export const Successfully = ({ nameUser }) => {
  return (
    <Link to="/"> 
      <div className="sneakers">
        <div className={styles.containerCongr}>
          <div className={styles.congratulations}>
            <div className={styles.checked}><img className={styles.mark} src="img/mark.svg" alt="check"/></div>
            <span className={styles.userName}>Hello {nameUser}</span>{" "}
            <h4>Congratulations!</h4>
            <h5> You succsessfull log in!</h5>
            <button className={styles.successfullyBtn}>go on shop</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

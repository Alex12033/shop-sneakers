import React from "react";

import { Link } from "react-router-dom";

import style from "./Notice.module.scss";

const Notice = ({ title, description, img, isOrder }) => {
  return (
    <div className={style.notice}>
      <img className={style.notice_img} src={img} alt="info img" />
      <h2 className={style.title_notice}>{title}</h2>
      <p className={style.description_notice}>{description}</p>

      {isOrder ? (
        <Link to="/orders">
          <button className={style.greenButton}>
            <img className={style.arrow} src="/img/arrow.svg" alt="Arrow" />
            <span>Go To My Orders</span>
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button className={style.greenButton}>
            <img className={style.arrow} src="/img/arrow.svg" alt="Arrow" />
            <span>Go Back</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Notice;

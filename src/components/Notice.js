import React from "react";
import { Link } from "react-router-dom";

const Notice = ({ title, description, img, isOrder }) => {
  return (
    <div className="notice">
      <img className="notice_img" src={img} alt="info img" />
      <h2 className="title_notice">{title}</h2>
      <p className="description_notice">{description}</p>

      {isOrder ? (
        <Link to="/orders">
          <button className="greenButton">
            <img className="arrow" src="/img/arrow.svg" alt="Arrow" />
            <span>Go To My Orders</span>
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button className="greenButton">
            <img className="arrow" src="/img/arrow.svg" alt="Arrow" />
            <span>Go Back</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Notice;

import axios from "axios";

import React, { useEffect, useState, useContext } from "react";

import Card from "../components/Card";
import Notice from "../components/Notice";

import style from "./Home.module.scss";

import AppContext from "../components/context";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchValue } = useContext(AppContext);
  const { setSearchValue } = useContext(AppContext);
  const { onChangeSearchInput } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://sneakers-course.herokuapp.com/api/orders"
      );
      setOrders(data.reduce((prev, obj) => [...prev, ...obj], []));
      setTimeout(() => {
        //it wrong! LATER i fix it!
        setIsLoading(false);
      }, 300);
    })();
  }, []);

  return (
    <div className="content">
      <div className="title-search">
        <div className={style.title_search}>
          <h1>
            {searchValue ? `Search request: ${searchValue}` : "Orders"}
          </h1>
          <div className={style.search_block}>
            <img
              className={style.searchImage}
              src="/img/search.svg"
              alt="search"
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className={style.remove}
                src="/img/btn-remove.svg"
                alt="remove"
              />
            )}
            <input
              className={style.searchHome}
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="sneakers">
        {orders.length === 0 ? (
          <Notice
            img={"img/orders.jpg"}
            title={"Empty orders"}
            description={"Add at least one pair of shoes per order"}
          />
        ) : (
          orders.map((obj) => (
            <Card
              isLoading={isLoading}
              heartFavorites={true}
              id={obj.id}
              name={obj.name}
              price={obj.price}
              key={obj.id}
              src={obj.src}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;

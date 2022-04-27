import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Notice from "../components/Notice";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://sneakers-course.herokuapp.com/api/orders");
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
        <h1>"Orders"</h1>
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

import React from "react";

function TotalCartPrice({totalPrice}) {
  const sumCart = () => {
    //sum cart item
    let sum = 0;
    totalPrice.forEach((value) => {
      sum += Number(value.price);
    });
    return sum;
  };
  return (
    <b>
      {sumCart()}$ {/* display total price */}
    </b>
  );
}

export default TotalCartPrice;

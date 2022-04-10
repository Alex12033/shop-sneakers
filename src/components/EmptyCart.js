import React from 'react'

function EmptyCart() {
    return (
        <div className="emptyCart">
          <img className="cartImg" src="img/empty-cart.jpg" alt="empty cart" />
          <h2>Empty cart</h2>
          <p>Add at least one pair of shoes per order</p>
          <button className="greenButton">
            <img className="arrow" src="/img/arrow.svg" alt="Arrow" />
            <span>Go Back</span>
          </button>
        </div>
    )
}

export default EmptyCart

import React from 'react'

function TotalPriceBlock() {
    return (
        <div className="items">
          <ul className="cartTotalBlock">
            <li>
              <span>Total:</span>
              <div></div>
              45
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1040$</b>
            </li>
          </ul>
          <button className="greenButton">
            Check order
            <img className="arrow" src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
    )
}

export default TotalPriceBlock

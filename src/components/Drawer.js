import React from "react";

function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2>
          Cart{" "}
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="scroll">
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="titlePrice">
              <p>Man sneakers Nike Blazer Mid Seude</p>
              <b>12 999$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="titlePrice">
              <p>Man sneakers Nike Blazer Mid Seude</p>
              <b>12 999$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="titlePrice">
              <p>Man sneakers Nike Blazer Mid Seude</p>
              <b>12 999$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="titlePrice">
              <p>Man sneakers Nike Blazer Mid Seude</p>
              <b>12 999$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="titlePrice">
              <p>Man sneakers Nike Blazer Mid Seude</p>
              <b>12 999$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="titlePrice">
              <p>Man sneakers Nike Blazer Mid Seude</p>
              <b>12 999$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="titlePrice">
              <p>Man sneakers Nike Blazer Mid Seude</p>
              <b>12 999$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="titlePrice">
              <p>Man sneakers Nike Blazer Mid Seude</p>
              <b>12 999$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="items">
          <ul className="cartTotalBlock">
            <li>
              <span>Total:</span>
              <div></div>
              <b>21 400$</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1040$</b>
            </li>
          </ul>
          <button className="greenButton">
            Check order{" "}
            <img className="arrow" src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

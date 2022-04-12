import React from 'react'

function ItemsCart({items, onDeleteFromCart}) {
  console.log(items);
    return (
        <div className="scroll">
          {items.map((obj) => (
            <div className="cartItem">
              <img width={70} height={70} src={obj.src} alt="Sneakers" />
              <div className="titlePrice">
                <p>{obj.name}</p>
                <b>{obj.price}$</b>
              </div>
              <div className="columnCartCloseCount">
                <img
                  onClick={() => onDeleteFromCart(obj.id)}
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            </div>
          ))}
        </div>
    )
}

export default ItemsCart

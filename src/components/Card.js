import React, { useState } from "react";
import ContentLoader from "react-content-loader";

import style from "./Card.module.scss";

function Card({
  id,
  name,
  price,
  src,
  onPlus,
  onLike,
  isLogged,
  heartFavorites, //into heartFavorites true or false
  onRemoveFavorites,
  isLoading,
}) {
  const [checked, setChecked] = useState(true);
  const [onFavorite, setOnFavorite] = useState(heartFavorites);

  function onClickPlus() {
    setChecked(!checked);
    if (checked) {
      /* this if() need for not send same object when user click second time on plus
      send info for display card in cart drawer */
      onPlus({ name, price, src, checked, id });
    } else {
      //if unchecked in Home send this obj for delete query
      onPlus({ name, price, src, checked, id });
    }
  }

  const onLikeClick = () => {
    setOnFavorite(!onFavorite);

    if (onFavorite) {
      onLike({ id, name, price, src });
    } else {
      onRemoveFavorites({ id, name, price, src }); // this else need for what send info for delete item from favorites WHEN USER click into FAVORITES page
    }
  };

  return isLoading ? (
    <ContentLoader
      speed={0}
      width={250}
      height={270}
      viewBox="0 0 170 265"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="30" rx="10" ry="10" width="150" height="97" />
      <rect x="0" y="145" rx="8" ry="8" width="150" height="15" />
      <rect x="0" y="175" rx="8" ry="8" width="100" height="17" />
      <rect x="0" y="221" rx="8" ry="8" width="80" height="25" />
      <rect x="115" y="213" rx="8" ry="7" width="32" height="32" />
    </ContentLoader>
  ) : (
    <>
      <div className={style.card}>
        {onLike && (
          <div className={style.favorite}>
            <img
              className={style.plus}
              onClick={onLikeClick}
              src={onFavorite ? "/img/unliked.svg" : "/img/liked.svg"}
              alt="unliked"
            />
          </div>
        )}

        <img width="133" height="122" src={src} alt="" />
        <h5>{name}</h5>
        <div className={style.cardBottom}>
          <div className={style.priceCard}>
            <span>Price:</span>
            <b>{price}$</b>
            <div>
              {(isLogged || onPlus) && isLogged && (
                <img
                  className={checked ? `${style.button}` : `${style.checked}`}
                  onClick={onClickPlus}
                  src={checked ? "/img/plus.svg" : "/img/btn-checked.svg"}
                  alt="plus"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

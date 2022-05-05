import React, { useContext } from "react";

import Card from "../components/Card.js";

import AppContext from "../components/context.js";

import style from "./Home.module.scss";

function Home({ onAddToCart, onAddLike, isLoading, isLogged }) {
  const { card } = useContext(AppContext);
  const { searchValue } = useContext(AppContext);
  const { setSearchValue } = useContext(AppContext);
  const { onChangeSearchInput } = useContext(AppContext);

  return (
    <div className="content">
      <div className={style.title_search}>
        <h1 className={style.title}>
          {searchValue ? `Search request: ${searchValue}` : "All Sneakers"}
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
      <div className="sneakers">
        {card
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj) => (
            <Card
              isLogged={isLogged}
              heartFavorites={true}
              id={obj.id}
              name={obj.name}
              price={obj.price}
              key={obj.id}
              src={obj.src}
              onPlus={(obj) => onAddToCart(obj)}
              onLike={(obj) => onAddLike(obj)}
              isLoading={isLoading}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;

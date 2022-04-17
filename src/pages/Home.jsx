import React from "react";
import Card from "../components/Card.js";

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  card,
  onAddToCart,
  onAddLike,
  isLoading,
}) {
  return (
    <div className="content">
      <div className="title-search">
        <h1>
          {searchValue ? `Search request: ${searchValue}` : "All Sneakers"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="remove"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          )}
          <input
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

import React, { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import EmptyFavorits from "../components/EmptyFavorits";

function Favorites({ searchValue, setSearchValue, onChangeSearchInput }) {
  const [favorites, setFavorites] = useState([]);

  useState(() => {
    axios.get("http://localhost:8000/favorites").then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onRemoveFavorites = (obj) => {
    axios.delete(`http://localhost:8000/favorites/${obj.id}`);
    setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
  };

  return (
    <div className="content">
      <div className="title-search">
        <h1>"Favorites"</h1>
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
        {favorites.length === 0 ? (
          <EmptyFavorits />
        ) : (
          favorites.map((obj) => (
            <Card
              onRemoveFavorites={onRemoveFavorites}
              heartFavorites={false}
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
}

export default Favorites;

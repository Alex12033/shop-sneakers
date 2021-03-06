import React, { useState, useContext } from "react";

import axios from "axios";

import Card from "../components/Card";
import Notice from "../components/Notice";

import AppContext from "../components/context";

import style from "./Home.module.scss";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const { searchValue } = useContext(AppContext);
  const { setSearchValue } = useContext(AppContext);
  const { onChangeSearchInput } = useContext(AppContext);

  useState(() => {
    axios.get("https://sneakers-course.herokuapp.com/api/favorites").then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onRemoveFavorites = (obj) => {
    axios.delete(`https://sneakers-course.herokuapp.com/api/favorites/${obj.id}`);
    setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
  };

  return (
    <div className="content">
      <div className={style.title_search}>
        <h1 className={style.title}>"Favorites"</h1>
        <div className={style.search_block}>
          <img className={style.searchImage} src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className={style.remove}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          )}
          <input className={style.searchHome}
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="sneakers">
        {favorites.length === 0 ? (
          <Notice
            img={"img/favorites-star-icon-png-0.png"}
            title={"Your favorite empty"}
            description={"Go back in shop and mark your favorite product"}
          />
        ) : (
          favorites
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj) => (
              <Card
                onRemoveFavorites={onRemoveFavorites}
                heartFavorites={false}
                onLike={true}
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

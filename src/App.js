import axios from "axios";
import { useEffect, useState } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  const [card, setCard] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  console.log(window.location.href);

  useEffect(() => {
    axios
      .get("https://6236f38ff5f6e28a1547bdc4.mockapi.io/items")
      .then((res) => {
        setCard(res.data);
      });
  }, []);

  // const removeDuplicate = (data, key) => {
  //   return [...new Map(data.map((item) => [key(item), item])).values()];
  // };

  const onAddToCart = (obj) => {
    axios.post("https://6236f38ff5f6e28a1547bdc4.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddLike = (obj) => {
    axios.post("https://6236f38ff5f6e28a1547bdc4.mockapi.io/favorites", obj);
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      <Header />
      <Routes>
        <Route
          path="/drawer"
          element={
            <Drawer />
          }
          exact
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
            />
          }
          exact
        />

        <Route
          path="/"
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              card={card}
              onAddToCart={onAddToCart}
              onAddLike={onAddLike}
            />
          }
          exact
        />
      </Routes>
    </div>
  );
}

export default App;

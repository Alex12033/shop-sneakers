import axios from "axios";
import { useEffect, useState } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  const [card, setCard] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  //console.log(window.location.href);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        "http://localhost:8000/items"
      );

      setCard(data.data);
    }
    fetchData();
    
    setTimeout(() => {
      //it wrong! LATER i fix it!
      setIsLoading(false);
    }, 1000);
  }, []);

  // const removeDuplicate = (data, key) => {
  //   return [...new Map(data.map((item) => [key(item), item])).values()];
  // };

  const onAddToCart = (obj) => {
    if (obj.checked) {
      axios.post("http://localhost:8000/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    } else {
      //if obj.unchecked = false delete from cart on obj.id
      axios.delete(
        `http://localhost:8000/cart/${obj.id}`
      );
    }
  };

  const onAddLike = (obj) => {
    axios.post("http://localhost:8000/favorites", obj);
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      <Header />
      <Routes>
        <Route path="/drawer" element={<Drawer />} exact />

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
              isLoading={isLoading}
            />
          }
          exact
        />
      </Routes>
    </div>
  );
}

export default App;

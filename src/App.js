import axios from "axios";

import { useEffect, useState } from "react";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import AppContext from "./components/context";

import { Route, Routes } from "react-router-dom";

function App() {
  const [card, setCard] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState("d");

  const getTotalSum = (sum) => {
    setSum(sum);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://localhost:8000/items");
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

  const onAddToCart = async (obj) => {
    if (obj.checked) {
      await axios.post("http://localhost:8000/cart", obj);
    } else {
      //if obj.checked = false delete from cart with clicked obj.id
      await axios.delete(`http://localhost:8000/cart/${obj.id}`);
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
      <AppContext.Provider
        value={{
          setCartItems,
          cartItems,
          sum,
          getTotalSum,
          card,
          searchValue,
          setSearchValue,
          onChangeSearchInput,
        }}
      >
        <Header />
        <Routes>
          <Route path="/drawer" element={<Drawer />} exact />

          <Route path="/favorites" element={<Favorites />} exact />

          <Route
            path="/"
            element={
              <Home
                onAddToCart={onAddToCart}
                onAddLike={onAddLike}
                isLoading={isLoading}
              />
            }
            exact
          />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

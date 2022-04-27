import axios from "axios";

import { useEffect, useState } from "react";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

import AppContext from "./components/context";

import { Route, Routes } from "react-router-dom";

function App() {
  const [card, setCard] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("http://localhost:8000/items");
        setCard(data.data);
      } catch (error) {
        alert("Error in query data");
      }
    }
    fetchData();

    setTimeout(() => {
      //it wrong! LATER i fix it!
      setIsLoading(false);
    }, 1000);
  }, []);

  const getTotalSum = () => {
    return cartItems.reduce((sum, obj) => +obj.price + sum, 0);
  };

  // const removeDuplicate = (data, key) => {
  //   return [...new Map(data.map((item) => [key(item), item])).values()];
  // };

  const onAddToCart = async (obj) => {
    try {
      if (obj.checked) {
        setCartItems((prev) => [...prev, obj]);
        await axios.post("https://sneakers-course.herokuapp.com/api/cart", obj);
      } else {
        //if obj.checked = false delete from cart with clicked obj.id
        await axios.delete(`https://sneakers-course.herokuapp.com/api/cart/${obj.id}`);
      }
    } catch (error) {
      alert("Error in process post in cart");
    }
  };

  const onAddLike = (obj) => {
    try {
      axios.post("https://sneakers-course.herokuapp.com/api/favorites", obj);
    } catch (error) {
      alert("Error in process adding into favorites");
    }
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

          <Route path="/orders" element={<Orders />} exact />

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

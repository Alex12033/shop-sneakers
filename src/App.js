import axios from "axios";

import { useEffect, useState } from "react";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

import AppContext from "./components/context";

import { Route, Routes } from "react-router-dom";

import { LoginBtn } from "./Auth/LoginBtn";
import { LoginForm } from "./Auth/LoginForm";
import { SignIn } from "./Auth/SignIn";
//import { Successfully } from "./Auth/Successfully";

function App() {
  const [card, setCard] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);

  const [log, setLog] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(
          "https://sneakers-course.herokuapp.com/items"
        );
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

    // setLog(false);
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
        console.log("delete from cart");
        await axios.delete(
          `https://sneakers-course.herokuapp.com/api/cart/${obj.id}`
        );
        setCartItems((prev) => prev.filter((item) => obj.id !== item.id));
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
        <Header checkUserLogin={log}>
          <LoginBtn checkUserLogin={log} setLog={setLog}/>
        </Header>

        <Routes>
          <Route
            path="/LoginForm"
            element={<LoginForm checkUserLogin={(e) => setLog(e)} />}
            exact
          />

          {/* <Route path="/Successfull" element={<Successfully />} exact /> */}

          <Route path="/SignIn" element={<SignIn />} exact />

          <Route path="/drawer" element={<Drawer />} exact />

          <Route path="/favorites" element={<Favorites />} exact />

          <Route path="/orders" element={<Orders />} exact />

          <Route
            path="/"
            element={
              <Home
                isLogged={log}
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

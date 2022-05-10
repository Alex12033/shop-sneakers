import axios from "axios";

import { useEffect, useState } from "react";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

import AppContext from "./components/context";

import { Route, Routes } from "react-router-dom";

import { LoginForm } from "./Auth/LoginForm";
import { SignIn } from "./Auth/SignIn";
//import { Successfully } from "./Auth/Successfully";

function App() {
  const [card, setCard] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);

  const [log, setLog] = useState();

  useEffect(() => {
    async function fetchData() {
      const items = await axios
        .get("https://sneakers-course.herokuapp.com/items")
        .catch((error) => console.log("Error in query data", error.toJSON()));
      setCard(items.data);

      const { data } = axios.get("https://sneakers-course-default-rtdb.firebaseio.com/items", {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      });

      console.log(data);
    }
    fetchData();

    setTimeout(() => {
      //to use set timeout for fake loading it wrong! LATER i fix it!
      setIsLoading(false);
    }, 1000);

    setLog(window.localStorage.getItem("isLogged"));
  }, []);

  const getTotalSum = () => {
    return cartItems.reduce((sum, obj) => +obj.price + sum, 0);
  };

  // const removeDuplicate = (data, key) => {
  //   return [...new Map(data.map((item) => [key(item), item])).values()];
  // };

  const onAddToCart = async (obj) => {
    //if obj.checked = false delete from cart with clicked obj.id and vice versa
    if (obj.checked) {
      setCartItems((prev) => [...prev, obj]);

      await axios
        .post("https://sneakers-course.herokuapp.com/api/cart", obj)
        .catch((error) =>
          console.log("Error in process post in cart", error.toJSON())
        );
    } else {
      await axios
        .delete(`https://sneakers-course.herokuapp.com/api/cart/${obj.id}`)
        .catch((error) =>
          console.log("Error delete from cart", error.toJSON())
        );

      setCartItems((prev) => prev.filter((item) => obj.id !== item.id));
    }
  };

  const onAddLike = (obj) => {
    axios
      .post("https://sneakers-course.herokuapp.com/api/favorites", obj)
      .catch((error) =>
        console.log("Error in process adding into favorites", error.toJSON())
      );
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
          setLog,
        }}
      >
        <Header checkUserLogin={log} setLog={setLog} />

        <Routes>
          <Route path="/LoginForm" element={<LoginForm />} exact />

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

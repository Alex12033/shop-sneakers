import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [card, setCard] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [displayCart, setDisplayCart] = useState(false);

  const [totalPrice, setTotalPrice] = useState([]);

  const [countSneakers, setCountSneakers] = useState([]);

  useEffect(() => {
    axios
      .get("https://6236f38ff5f6e28a1547bdc4.mockapi.io/items/items")
      .then((res) => {
        setCard(res.data);
      });

    axios
      .get("https://6236f38ff5f6e28a1547bdc4.mockapi.io/items/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const filterItems = (items, id) => {
    return items.filter((item) => item.id !== id);
  };

  // const removeDuplicate = (data, key) => {
  //   return [...new Map(data.map((item) => [key(item), item])).values()];
  // };

  const onDisplayCart = () => {
    let html = document.querySelector("html");
    html.style.overflow = "hidden";
    setDisplayCart(true);
  };

  const onCloseCart = () => {
    let html = document.querySelector("html");
    html.style.overflow = "scroll";
    setDisplayCart(false);
  };

  const onAddToCart = (obj) => {
    axios.post("https://6236f38ff5f6e28a1547bdc4.mockapi.io/items/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };
  console.log(cartItems);

  const onRemoveItemFromCart = (id) => {
    //axios.delete(`https://6236f38ff5f6e28a1547bdc4.mockapi.io/items/cart/${id}`);
    setCartItems((prev) => filterItems(prev, id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {displayCart && (
        <Drawer
          items={cartItems}
          onClose={onCloseCart}
          countSneakers={countSneakers}
          onDeleteFromCart={onRemoveItemFromCart}
        />
      )}
      <Header displayCart={onDisplayCart} totalPrice={totalPrice} />
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
                objKey={obj.key}
                name={obj.name}
                price={obj.price}
                key={obj.key}
                src={obj.src}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

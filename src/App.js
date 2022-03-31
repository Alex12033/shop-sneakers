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

  
  const filterItems = (items, obj) => {
    return items.filter((item) => item.objKey !== obj.objKey);
  };

  const removeDuplicate = (data, key) => {
    return [...new Map(data.map((x) => [key(x), x])).values()];
  };

  
  useEffect(() => {
    fetch("https://6236f38ff5f6e28a1547bdc4.mockapi.io/items/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCard(json);
      });
  }, []);

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
    setCartItems((prev) => [...prev, obj]);
  };

  const onMinusCartItem = (id) => {
    //when we click on minus button this method in cart takes away item with his price from cart
    //in id we transfer in method type object
    setCartItems(() => filterItems(cartItems, id));

    setTotalPrice(() => filterItems(totalPrice, id));
  };

  const renewedItemsForDrawer = (key) => {
    //this method take key from drawer and filter item in cart by key
    setCartItems(() => filterItems(cartItems, key));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const getTotalPrice = (obj) => {
    setTotalPrice((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {displayCart && (
        <Drawer
          items={removeDuplicate(cartItems, key => key.objKey)}
          onClose={onCloseCart}
          totalPrice={totalPrice}
          onDeleteFromCart={(idElemRemove) =>
            renewedItemsForDrawer(idElemRemove)
          }
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
          {card.map((obj) => (
            <Card
              objKey={obj.key}
              name={obj.name}
              price={obj.price}
              key={obj.key}
              src={obj.src}
              onPlus={(obj) => onAddToCart(obj)}
              onMinus={(obj) => onMinusCartItem(obj)}
              getPrice={(obj) => getTotalPrice(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

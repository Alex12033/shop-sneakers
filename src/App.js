import { useEffect, useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [card, setCard] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  useEffect(() => {
    fetch("https://6236f38ff5f6e28a1547bdc4.mockapi.io/items/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {setCard(json)});
  }, [])

  const onDisplayCart = () => {
    setDisplayCart(true);
  };

  const onCloseCart = () => {
    setDisplayCart(false);
  };

  return (
    <div className="wrapper clear">
      {displayCart && <Drawer onClose={onCloseCart} />}
      <Header displayCart={onDisplayCart} />
      <div className="content">
        <div className="title-search">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="sneakers">
          {card.map((obj) => (
            <Card
              name={obj.name}
              price={obj.price}
              key={obj.key}
              src={obj.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

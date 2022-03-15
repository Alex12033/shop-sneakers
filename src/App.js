import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const card = [
    { name: "Man sneakers Nike Mid Seude", price: "12 999$", key: "1" },
    { name: "Man sneakers Mid Seude", price: "12 40$", key: "2" },
    { name: "Man sneakers Nike Blazer", price: "12 444$", key: "3" },
  ];

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="title-search">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="sneakers">
          {card.map((val, key) => (
            <Card name={val.name} price={val.price} key={val.key} />
          ))}
        </div>
      </div>
    </div> 
  );
}

export default App;

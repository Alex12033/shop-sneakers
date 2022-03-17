import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const card = [
    {
      name: "Man sneakers Nike Mid Seude",
      price: "12 999$",
      key: "1",
      src: "/img/sneakers/1.jpg",
    },
    {
      name: "Man sneakers Mid Seude",
      price: "12 40$",
      key: "2",
      src: "/img/sneakers/2.jpg",
    },
    {
      name: "Man sneakers Nike Blazer",
      price: "12 444$",
      key: "3",
      src: "/img/sneakers/3.jpg",
    },
    {
      name: "Man sneakers Nike Blazer",
      price: "12 444$",
      key: "3",
      src: "/img/sneakers/4.jpg",
    },
    {
      name: "Man sneakers Nike Blazer",
      price: "12 444$",
      key: "3",
      src: "/img/sneakers/5.jpg",
    },
    {
      name: "Man sneakers Nike Blazer",
      price: "12 444$",
      key: "3",
      src: "/img/sneakers/6.jpg",
    },
    {
      name: "Man sneakers Nike Blazer",
      price: "12 444$",
      key: "3",
      src: "/img/sneakers/7.jpg",
    },
    {
      name: "Man sneakers Nike Blazer",
      price: "12 444$",
      key: "3",
      src: "/img/sneakers/8.jpg",
    },
    {
      name: "Man sneakers Nike Blazer",
      price: "12 444$",
      key: "3",
      src: "/img/sneakers/9.jpg",
    },
    {
      name: "Man sneakers Nike Blazer",
      price: "12 444$",
      key: "3",
      src: "/img/sneakers/10.jpg",
    },
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

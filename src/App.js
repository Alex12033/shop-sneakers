import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
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
        <Card />
      </div>
    </div>
  );
}

export default App;

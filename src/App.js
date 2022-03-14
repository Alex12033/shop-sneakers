function App() {
  return (
    <div className="wrapper clear">
      <header>
        <div className="headerLeft">
          <img width="40" height="40" src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Shop of best </p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width="18" height="18" src="/img/cart.svg" alt="logo" />
            <span> 1205 $ </span>
          </li>
          <li>
            <img width="18" height="18" src="/img/user.svg" alt="logo" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="title-search">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img width="133" height="122" src="/img/sneakers/1.jpg" alt="" />
            <h5>Man sneakers Nike Blazer Mid Seude</h5>
            <div className="cardBottom">
              <div className="priceCard">
                <span>Price:</span>
                <b>12 999 $</b>
                <div>
                  <button>
                    <img
                      width="11"
                      height="11"
                      src="/img/plus.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="133" height="122" src="/img/sneakers/2.jpg" alt="" />
            <h5>Man sneakers Nike Blazer Mid Seude</h5>
            <div className="cardBottom">
              <div className="priceCard">
                <span>Price:</span>
                <b>12 999 $</b>
                <div>
                  <button>
                    <img
                      width="11"
                      height="11"
                      src="/img/plus.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="133" height="122" src="/img/sneakers/3.jpg" alt="" />
            <h5>Man sneakers Nike Blazer Mid Seude</h5>
            <div className="cardBottom">
              <div className="priceCard">
                <span>Price:</span>
                <b>12 999 $</b>
                <div>
                  <button>
                    <img
                      width="11"
                      height="11"
                      src="/img/plus.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="133" height="122" src="/img/sneakers/4.jpg" alt="" />
            <h5>Man sneakers Nike Blazer Mid Seude</h5>
            <div className="cardBottom">
              <div className="priceCard">
                <span>Price:</span>
                <b>12 999 $</b>
                <div>
                  <button>
                    <img
                      width="11"
                      height="11"
                      src="/img/plus.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="133" height="122" src="/img/sneakers/5.jpg" alt="" />
            <h5>Man sneakers Nike Blazer Mid Seude</h5>
            <div className="cardBottom">
              <div className="priceCard">
                <span>Price:</span>
                <b>12 999 $</b>
                <div>
                  <button>
                    <img
                      width="11"
                      height="11"
                      src="/img/plus.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img width="133" height="122" src="/img/sneakers/6.jpg" alt="" />
            <h5>Man sneakers Nike Blazer Mid Seude</h5>
            <div className="cardBottom">
              <div className="priceCard">
                <span>Price:</span>
                <b>12 999 $</b>
                <div>
                  <button>
                    <img
                      width="11"
                      height="11"
                      src="/img/plus.svg"
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

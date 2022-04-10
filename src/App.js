import React from "react";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";
import Card from "./componets/Card/Card";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://6252bb3169af39728b529340.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems(prev =>[...prev, obj]);
    };

  return (
    <div className="wrapper">

        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className='content'>
        <div className='search-block'>
          <h1>Все кроссовки</h1>
          <div className='search'>
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder='Поиск...'/>
          </div>
        </div>

        <div className='sneakers'>

            {items.map((item) => (
                <Card
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onFavorite={() => console.log('Добавили в закладки')}
                    onPlus={(obj) => onAddToCart(obj)}
                />
            ))}
        </div>

      </div>
    </div>
  );
}

export default App;



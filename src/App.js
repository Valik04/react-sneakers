import React from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer/Drawer";
import AppContext from "./componets/context";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://6252bb3169af39728b529340.mockapi.io/cart');
            const favoritesResponse = await axios.get('https://6252bb3169af39728b529340.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://6252bb3169af39728b529340.mockapi.io/items');
            await new Promise(r => setTimeout(r, 500));
            setIsLoading(false);

            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);

        }

        fetchData();
    }, []);

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))){
            axios.delete(`https://6252bb3169af39728b529340.mockapi.io/cart/${obj.id}`);
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        }else {
            axios.post('https://6252bb3169af39728b529340.mockapi.io/cart', obj);
            setCartItems((prev) =>[...prev, obj]);
        }
    };

    const onRemoveItem = (id) =>{
        axios.delete(`https://6252bb3169af39728b529340.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavorite = async (obj) => {
        try{
        if (favorites.find((favObj) => favObj.id === obj.id)){
            axios.delete(`https://6252bb3169af39728b529340.mockapi.io/favorites/${obj.id}`);
            setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        }else {
            const {data} = await axios.post('https://6252bb3169af39728b529340.mockapi.io/favorites', obj)
            setFavorites((prev) =>[...prev, data]);
        }
        }catch (error){
            // xxxx
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id));
    };

  return (
      <AppContext.Provider value={{items,cartItems,favorites, isItemAdded,onAddToFavorite,setCartOpened,setCartItems,onAddToCart}}>
    <div className="wrapper">

        {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>
        )}
      <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
            <Route exact path='/'
                 element={
                     <Home
                         items={items}
                         cartItems={cartItems}
                         searchValue={searchValue}
                         setSearchValue={setSearchValue}
                         onChangeSearchInput={onChangeSearchInput}
                         onAddToFavorite={onAddToFavorite}
                         onAddToCart={onAddToCart}
                         isLoading={isLoading}/>
                 }
            />
        </Routes>

        <Routes>
            <Route exact path='/favorites'
                 element={
                     <Favorites/>
                 }
            />
        </Routes>

        <Routes>
            <Route exact path='/orders'
                   element={
                       <Orders/>
                   }
            />
        </Routes>
    </div>
</AppContext.Provider>
  );
}

export default App;



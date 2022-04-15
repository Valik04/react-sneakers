import Card from "../componets/Card/Card";
import React from "react";


function Home({
                  items,
                  setSearchValue,
                  searchValue,
                  onChangeSearchInput,
                  onAddToCart,
                  onAddToFavorite,
                  isLoading,
}) {


   const renderItems = () =>{
const filtredItems =  items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()),);

       return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
               <Card
                   key={index}
                   onFavorite={(obj) => onAddToFavorite(obj)}
                   onPlus={(obj) => onAddToCart(obj)}
                   loading={isLoading}
                   {...item}
               />
           ));
   };

    return(
        <div className='content'>
            <div className='search-block'>
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className='search'>
                    <img src='/img/search.svg' alt='Search'/>
                    {searchValue && <img onClick={() => setSearchValue('')} className='removeBtn' width={15} height={15} src='/img/cross.svg' alt='Remove'/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
                </div>
            </div>

            <div className='sneakers'>

                {renderItems()}
            </div>

        </div>
    );
}

export default Home;
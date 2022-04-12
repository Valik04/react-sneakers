
import React from "react";
import Card from "../componets/Card/Card";

function Favorites({items , onAddToFavorite}) {
    return(
        <div className='content'>
            <div className='search-block'>
               <h1>Мои закладки</h1>
             </div>


            <div className='sneakers'>
                {items
                    .map((item, index) => (
                        <Card
                            key={index}
                            favorite={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    ))}
            </div>

        </div>
    );
}

export default Favorites;
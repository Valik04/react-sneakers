import React from "react";
import Card from "../componets/Card/Card";
import AppContext from "../componets/context";

function Favorites({ onAddToFavorite}) {

    const {favorites} = React.useContext(AppContext);

    return(
        <div className='content'>
            <div className='search-block'>
               <h1>Мои закладки</h1>
             </div>


            <div className='sneakers'>
                {favorites
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
import React from "react";

function Card(){
    return(
    <div className="card">
        <div className='favorite'>
            <img src='/img/heart-unliked.svg' alt='Unliked'/>
        </div>
        <img className='images'  src='/img/sneakers/image 1.jpg' alt='Sneaker'/>
        <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='cardBottom'>
            <div className='cardInfo'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
            </div>
            <button>
                <img src='/img/plus.svg' alt='Plus'/>
            </button>
        </div>
    </div>
    )
}

export default Card;

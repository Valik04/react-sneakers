import React from "react";

function Drawer(){
    return(
        <div style={{display:'none'}} className="overlay">

        <div className='drawer'>
            <h2>Корзина <img className='removeBtn' width={32} height={32} src='/img/btn-remove.svg' alt='Remove'/></h2>

            <div className="cartItem">
                <img width={70} height={70} src='/img/sneakers/image 1.jpg' alt='Sneakers'/>
                <div className='cardInfo'>
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <img className='removeBtn' width={32} height={32} src='/img/btn-remove.svg' alt='Remove'/>
            </div>

            <div className="cartItem">
                <img width={70} height={70} src='/img/sneakers/image 2.jpg' alt='Sneakers'/>
                <div className='cardInfo'>
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <img className='removeBtn' width={32} height={32} src='/img/btn-remove.svg' alt='Remove'/>
            </div>

            <div className="items">
                <div className= 'cartTotalBlock'>
                    <li>
                        <span>Итого: </span>
                        <div> </div>
                        <b>21 498 руб. </b>
                    </li>
                    <li>
                        <span>Налог 5%: </span>
                        <div> </div>
                        <b>1074 руб. </b>
                    </li>
                </div>
                <button className='greenButton'>Оформить заказ<img src='/img/arrow.svg' alt='Arrow'/></button>
            </div>
        </div>
    </div>
    )
}

export default Drawer;
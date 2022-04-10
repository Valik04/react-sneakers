import React from "react";

function Drawer({onClose, items =[] }){
    return(
        <div className="overlay">

        <div className='drawer'>
            <h2>Корзина <img onClick={onClose} className='removeBtn' width={32} height={32} src='/img/btn-remove.svg' alt='Remove'/></h2>

            <div className="items">
                {items.map((obj) =>(
                    <div className="cartItem">
                        <img width={70} height={70} src={obj.imageUrl} alt='Sneakers'/>
                        <div className='cardInfo'>
                            <p>{obj.title}</p>
                            <b>{obj.price} руб.</b>
                        </div>
                        <img className='removeBtn' width={32} height={32} src='/img/btn-remove.svg' alt='Remove'/>
                    </div>
                ))}
            </div>



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
    )
}

export default Drawer;
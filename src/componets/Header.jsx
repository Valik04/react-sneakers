import {Link} from "react-router-dom";
import React from "react";
import {useCart} from "./hooks/useCart";
import logo from "../img/logo.png"
import cart from "../img/cart.svg"
import heart from "../img/heart.svg"
import user from "../img/user.svg"

function Header(props){
    const {totalPrice} = useCart();

    return(
        <header>
            <Link to='/'>
            <div className='headerLeft'>

                <img width={40} height={40} src={logo}/>
                <div className='headerInfo'>
                    <h2>React Sneakers</h2>
                    <p>Магазин лучших кроссовок</p>
                </div>
                 </div>
            </Link>

            <ul className='headerRight'>
                <li onClick={props.onClickCart}>
                    <img width={18} height={18} src={cart} alt='Корзина'/>
                    <span>{totalPrice} руб.</span>
                </li>
                <li>
                    <Link to='/favorites'>
                    <img width={18} height={18} src={heart} alt='Закладки'/>
                    </Link>
                </li>
                <li>
                    <Link to='/orders'>
                    <img width={18} height={18} src={user} alt='Пользователт'/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;
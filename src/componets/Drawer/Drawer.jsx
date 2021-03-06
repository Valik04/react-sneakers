import React from "react";
import Info from "../Info";
import axios from "axios";
import {useCart} from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items = []}) {
    const {cartItems, setCartItems, totalPrice} = useCart();
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://6252bb3169af39728b529340.mockapi.io/orders', {items: cartItems});
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://6252bb3169af39728b529340.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {

        }
        setIsLoading(false);
    };

    return (
        <div className='overlay'>

            <div className='drawer'>
                <h2>Корзина <img onClick={onClose} className='removeBtn' width={32} height={32} src='/img/btn-remove.svg' alt='Remove'/></h2>
                {items.length > 0 ? (
                    <div>
                        <div className="items">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem">
                                    <img width={70} height={70} src={obj.imageUrl} alt='Sneakers'/>
                                    <div className='cardInfo'>
                                        <p>{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className='removeBtn' width={32} height={32} src='/img/btn-remove.svg' alt='Remove'/>
                                </div>
                            ))}
                        </div>
                        <div className='cartTotalBlock'>
                            <li>
                                <span>Итого: </span>
                                <div></div>
                                <b>{totalPrice} руб. </b>
                            </li>
                            <li>
                                <span>Налог 5%: </span>
                                <div></div>
                                <b>{(totalPrice / 100) * 5} руб. </b>
                            </li>
                            <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Оформить заказ<img src='/img/arrow.svg' alt='Arrow'/></button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
                        description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавить хотя бы одну пару красовок что бы добавить заказ.'}
                        image={isOrderComplete ? '/img/order.png' : '/img/empty-cart.png'}
                    />
                )}
            </div>
        </div>
    )
}
export default Drawer;
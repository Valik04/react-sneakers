import React from "react";

function Drawer({onClose, onRemove, items =[] }){
    return(
        <div className="overlay">

        <div className='drawer'>
            <h2>Корзина <img onClick={onClose} className='removeBtn' width={32} height={32} src='/img/btn-remove.svg' alt='Remove'/></h2>


            {
              items.length > 0 ? <div> <div className="items">
                  {items.map((obj) =>(
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
                      <button className='greenButton'>Оформить заказ<img src='/img/arrow.svg' alt='Arrow'/></button>
                  </div>
                  </div>
                  :
                  <div className='cartEmpty'>
                  <img className='Empty' src='/img/empty-cart.png' alt='Empty'/>
                  <h2>Корзина пустая</h2>
                  <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                  <button onClick={onClose} className='greenButton'>
                      <img  src='/img/arrow.svg' alt='Arrow'/>Вернуться назад
                  </button>
              </div>
            }



        </div>
    </div>
    )
}

export default Drawer;
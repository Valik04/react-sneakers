import React,{useState} from "react";
import styles from './Card.module.scss';

function Card({id,onFavorite,title,price,imageUrl,onPlus,favorite}){
    const [isAdded, setIsAdded] =useState(false);
    const [isFavorite, setIsFavorite] =useState(favorite);


    const onClickPlus = () => {
        onPlus({title ,price, imageUrl});
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({id,title ,price, imageUrl})
        setIsFavorite(!isFavorite)
    }

    return(
    <div className={styles.card}>
        <div className={styles.favorite} onClick={onFavorite}>
            <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt='Unliked'/>
        </div>
        <img className='images'  src={imageUrl} alt='Sneaker'/>
        <h5>{title}</h5>
        <div className={styles.cardBottom}>
            <div className={styles.cardInfo}>
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>
                <img onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt='Plus'/>
            </div>
    </div>
    )
}

export default Card;

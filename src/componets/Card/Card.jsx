import styles from './Card.module.scss';

function Card(props){

    return(
    <div className={styles.card}>
        <div className={styles.favorite} onClick={props.onFavorite}>
            <img src='/img/heart-unliked.svg' alt='Unliked'/>
        </div>
        <img className='images'  src={props.imageUrl} alt='Sneaker'/>
        <h5>{props.title}</h5>
        <div className={styles.cardBottom}>
            <div className={styles.cardInfo}>
                <span>Цена:</span>
                <b>{props.price} руб.</b>
            </div>
            <button onClick={props.onPlus}>
                <img src='/img/plus.svg' alt='Plus'/>
            </button>
        </div>
    </div>
    )
}

export default Card;

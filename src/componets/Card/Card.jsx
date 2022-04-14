import React,{useState} from "react";
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";

function Card({
  id,
  onFavorite,
  title,
  price,
  imageUrl,
  onPlus,
  favorite = false,
  added = false,
  loading = false,
 }) {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorite);


    const onClickPlus = () => {
        onPlus({id,title ,price, imageUrl});
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({id,title ,price, imageUrl})
        setIsFavorite(!isFavorite)
    }

    return(
    <div className={styles.card}>
        {
            loading ? (<ContentLoader
                speed={2}
                width={155}
                height={250}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>
            ):(
               <>
                   <div className={styles.favorite} onClick={onFavorite}>
                       <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                            alt='Unliked'/>
                   </div>
                   <img className='images' src={imageUrl} alt='Sneaker'/>
                   <h5>{title}</h5>
                   <div className={styles.cardBottom}>
                       <div className={styles.cardInfo}>
                           <span>Цена:</span>
                           <b>{price} руб.</b>
                       </div>
                       <img onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                            alt='Plus'/>
                   </div>
               </>
            )}
    </div>
    );
}

export default Card;

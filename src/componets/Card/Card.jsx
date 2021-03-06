import React, {useState} from "react";
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Card({
      id,
      onFavorite,
      title,
      price,
      imageUrl,
      onPlus,
      favorite = false,
      loading = false
}) {

    const {isItemAdded} = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorite);
    const onClickPlus = () => {
        onPlus({id, title, price, imageUrl});
    }
    const onClickFavorite = () => {
        onFavorite({id, title, price, imageUrl})
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={styles.card}>
            {
                loading ? (<ContentLoader
                        speed={2}
                        width={155}
                        height={250}
                        viewBox="0 0 155 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="1" y="0" rx="10" ry="10" width="155" height="155"/>
                        <rect x="0" y="167" rx="5" ry="5" width="155" height="15"/>
                        <rect x="0" y="187" rx="5" ry="5" width="100" height="15"/>
                        <rect x="1" y="234" rx="5" ry="5" width="80" height="25"/>
                        <rect x="124" y="230" rx="10" ry="10" width="32" height="32"/>
                    </ContentLoader>
                ) : (
                    <>
                        {onFavorite && (<div className={styles.favorite} onClick={onFavorite}>
                            <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                                 alt='Unliked'/>
                        </div>)}
                        <img className='images' src={imageUrl} alt='Sneaker'/>
                        <h5>{title}</h5>
                        <div className={styles.cardBottom}>
                            <div className={styles.cardInfo}>
                                <span>????????:</span>
                                <b>{price} ??????.</b>
                            </div>
                            {onPlus && (<img onClick={onClickPlus} src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt='Plus'/>)}
                        </div>
                    </>
                )}
        </div>
    );
}
export default Card;

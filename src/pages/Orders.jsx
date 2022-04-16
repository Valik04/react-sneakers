import React from "react";
import Card from "../componets/Card/Card";
import axios from "axios";
import AppContext from "../componets/context";


function Orders() {
    const {onAddToFavorite,onAddToCart} = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://6252bb3169af39728b529340.mockapi.io/orders')
                setOrders(data.reduce((prev,obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            }catch (error){
                alert('Error');
            }
        })();
    }, []);

    return(
        <div className='content'>
            <div className='search-block'>
               <h1>Мои заказы</h1>
             </div>


            <div className='sneakers'>

                {(isLoading ? [...Array(12)] : orders).map((item, index) => (
                        <Card key={index}
                              loading={isLoading}
                              {...item}
                        />
                    ))}
            </div>

        </div>
    );
}

export default Orders;
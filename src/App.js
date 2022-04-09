import Index from "./componets/Card/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";
import Card from "./componets/Card/Card";

const arr =[
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede' , price:'12 999',imageUrl:'/img/sneakers/image 1.jpg'},
    {title: 'Мужские Кроссовки Nike Air Max 270' , price:'15 600',imageUrl:'/img/sneakers/image 2.jpg'},
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede' , price:'8 499 руб.',imageUrl:'/img/sneakers/image 3.jpg'},
    {title: 'Кроссовки Puma X Aka Boku Future Rider' , price:'8 999 руб.',imageUrl:'/img/sneakers/image 4.jpg'},
];


function App() {
  return (
    <div className="wrapper">

      <Drawer/>
      <Header/>
      <div className='content'>
        <div className='search-block'>
          <h1>Все кроссовки</h1>
          <div className='search'>
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder='Поиск...'/>
          </div>
        </div>

        <div className='sneakers'>

            {arr.map((obj) => (
                <Card
                    title={obj.title}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                    onFavorite={() => console.log('Добавили в закладки')}
                    onPlus={() => console.log('Нажали плюс')
                    }
                />
            ))}
        </div>

      </div>
    </div>
  );
}

export default App;



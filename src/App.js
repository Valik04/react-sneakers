import Card from "./componets/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";

const arr =[
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede' , price:'12 999'},
    {name: 'Мужские Кроссовки Nike Air Max 270' , price:'15 600'},
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
            <Card/>
            <Card/>
            {/*{arr.map((obj) => (*/}
            {/*    <Card/>*/}
            {/*))}*/}
        </div>

      </div>
    </div>
  );
}

export default App;



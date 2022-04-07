import Card from "./componets/Card";
import Header from "./componets/Header";
import Drawer from "./componets/Drawer";

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
      </div>

      </div>
    </div>
  );
}

export default App;



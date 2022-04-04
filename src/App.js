
function App() {
  return (
    <div className="wrapper">

      <header>
        <div className='headerLeft'>
          <img width={40} height={40} src='/img/logo.png'/>
          <div className='headerInfo'>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className='headerRight'>
          <li>
            <img width={18} height={18} src='/img/cart.svg'/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src='/img/user.svg'/>
          </li>
        </ul>
      </header>

      <div className='content'>

        <div className='search-block'>
          <h1>Все кроссовки</h1>
          <div className='search'>
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder='Поиск...'/>
          </div>
        </div>

        <div className='sneakers'>
        <div className="card">

          <div className='favorite'>
          <img src='/img/heart-unliked.svg' alt='Unliked'/>
        </div>

          <img className='images'  src='/img/sneakers/image 1.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>

        <div className="card">
          <img className='images'  src='/img/sneakers/image 2.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>

        <div className="card">
          <img className='images'  src='/img/sneakers/image 3.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>

        <div className="card">
          <img className='images'  src='/img/sneakers/image 4.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>


        <div className="card">
          <img className='images'  src='/img/sneakers/image 5.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>

        <div className="card">
          <img className='images'  src='/img/sneakers/image 6.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>

        <div className="card">
          <img className='images'  src='/img/sneakers/image 7.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>

        <div className="card">
          <img className='images'  src='/img/sneakers/image 8.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>

        <div className="card">
          <img className='images'  src='/img/sneakers/image 9.jpg' alt='Sneaker'/>
          <h5> Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src='/img/plus.svg' alt='Plus'/>
            </button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;

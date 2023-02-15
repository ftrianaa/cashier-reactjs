import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [buy, setBuy] = useState(false)
  const [priceUnicorn, setPriceUnicorn] = useState(0)
  const [titleUnicorn, setTitleUnicorn] = useState('')
  const [priceRoll, setPriceRoll] = useState(0)
  const [titleRoll, setTitleRoll] = useState('')
  const [priceSea, setPriceSea] = useState(0)
  const [titleSea, setTitleSea] = useState('')
  const [priceWaffle, setPriceWaffle] = useState(0)
  const [titleWaffle, setTitleWaffle] = useState('')
  const [buttonUnicorn, setButtonUnicorn] = useState(false)
  const [buttonRoll, setButtonRoll] = useState(false)
  const [buttonSea, setButtonSea] = useState(false)
  const [buttonWaffle, setButtonWaffle] = useState(false)
  const [quantityUnicorn, setQuantityUnicorn] = useState(1)
  const [quantityWaffle, setQuantityWaffle] = useState(1)
  const [quantitySea, setQuantitySea] = useState(1)
  const [quantityRoll, setQuantityRoll] = useState(1)


  const handleQuantityUnicornPlus = () => {
    setQuantityUnicorn((qty) => qty + 1)
  }
  const handleQuantityUnicornMin = () => {
    setQuantityUnicorn((qty) => qty - 1)
    if(quantityUnicorn < 2) {
      setQuantityUnicorn(1)
    }
  }

  const handleQuantityWafflePlus = () => {
    setQuantityWaffle((qty) => qty + 1)
  }
  const handleQuantityWaffleMin = () => {
    setQuantityWaffle((qty) => qty - 1)
    if(quantityWaffle < 2) {
      setQuantityWaffle(1)
    }
  }

  const handleQuantitySeaPlus = () => {
    setQuantitySea((qty) => qty + 1)
  }
  const handleQuantitySeaMin = () => {
    setQuantitySea((qty) => qty - 1)
    if(quantitySea < 2) {
      setQuantitySea(1)
    }
  }

  const handleQuantityRollPlus = () => {
    setQuantityRoll((qty) => qty + 1)
  }
  const handleQuantityRollMin = () => {
    setQuantityRoll((qty) => qty - 1)
    if(quantityRoll < 2) {
      setQuantityRoll(1)
    }
  }
  const handleUnicorn = () => {
    setBuy(true)
    setPriceUnicorn(40000)
    setTitleUnicorn('Unicorn Ice Cream')
    setButtonUnicorn(true)
  }
  const handleRoll = () => {
    setBuy(true)
    setPriceRoll(50000)
    setTitleRoll('Ice Cream Roll')
    setButtonRoll(true)
  }
  const handleSea = () => {
    setBuy(true)
    setPriceSea(150000)
    setTitleSea('Sea Ice Cream')
    setButtonSea(true)
  }
  const handleWaffle = () => {
    setBuy(true)
    setPriceWaffle(60000)
    setTitleWaffle('Waffle Ice Cream')
    setButtonWaffle(true)
  }
  const handleClose = () =>{
    setBuy(false)
    setPriceWaffle(0); setTitleWaffle(''); setButtonWaffle(false); setQuantityWaffle(1);
    setPriceUnicorn(0); setTitleUnicorn(''); setButtonUnicorn(false);  setQuantityUnicorn(1);
    setPriceRoll(0); setTitleRoll(''); setButtonRoll(false); setQuantityRoll(1);
    setTitleSea(''); setPriceSea(0); setButtonSea(false); setQuantitySea(1)

  }
  return (

    <div className="App">
      <div className='header'>
        <div className='header-position'>
          <div className='logo'>
            <h1>Cashier</h1>
          </div>
          <div className='navbar'>
            <a>Menu</a>
            <a>Product</a>
            <a>Logout</a>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='menu'>
          <div className='product'>
            <div className='product-list'>
              <div className='product-img'>
                <img src='https://taysbakers.com/wp-content/uploads/2017/12/nitchi.jpg' alt='unicorn-ice-cream' />
              </div>
              <div className='product-desc'>
                <h2>Unicorn Ice Cream</h2>
                <a>5 flavours; strawberry, coffee, taro, matcha, and vanilla </a>
                <h3>Rp40.000,-</h3>
              </div>
              <button onClick={handleUnicorn}>Add Item</button>
            </div>
            <div className='product-list'>
              <div className='product-img'>
                <img src='https://awsimages.detik.net.id/community/media/visual/2016/11/10/4b87a77c-3eef-4411-a4be-810a5f8e5231.jpg?w=700&q=90' alt='roll-ice-cream' />
              </div>
              <div className='product-desc'>
                <h2>Ice Cream Roll</h2>
                <a>3 Rolls with toppings; fruits, crackers, and marshmallow</a>
                <h3>Rp50.000,-</h3>
              </div>
              <button onClick={handleRoll}>Add Item</button>
            </div>
            <div className='product-list'>
              <div className='product-img'>
                <img src='https://www.nibble.id/uploads/tempat_makan_es_krim_di_jakarta_yang_hits_04_b31ca78762.jpg' alt='sea-ice-cream' />
              </div>
              <div className='product-desc'>
                <h2>Sea Ice Cream</h2>
                <a>2 flavours; strawberry and taro with marshmallows</a>
                <h3>Rp150.000,-</h3>
              </div>
              <button onClick={handleSea}>Add Item</button>
            </div>
            <div className='product-list'>
              <div className='product-img'>
                <img src='https://img.kurio.network/HqVSQxdVASeLkJqfK-Nhj0B8X4I=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/20/12/03/0d842b76-cba9-47e9-9db7-dcfe4da17a48.jpg' alt='waffle-ice-cream' />
              </div>
              <div className='product-desc'>
                <h2>Waffle Ice Cream</h2>
                <a>Chocolate waffle, brownies, and cake</a>
                <h3>Rp60.000,-</h3>
              </div>
              <button onClick={handleWaffle}>Add Item</button>
            </div>
          </div>
        </div>
        {buy ?
          <div className='buy'>
            <div className='btn-r'>
            <button className='close'  onClick={()=>{handleClose()}}>x</button>
            </div>
            <h1>List Order</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {priceUnicorn ?
                  <>
                    <tr>
                      <td>{titleUnicorn}</td>
                      <td>Rp{priceUnicorn},00.-</td>
                      <td>
                        <div className='qty'>
                          <button className='min' onClick={handleQuantityUnicornMin}>-</button>{quantityUnicorn}<button className='plus' onClick={handleQuantityUnicornPlus}>+</button>
                        </div>
                      </td>
                      <td className='mid'>{buttonUnicorn ? <button className='min' onClick={() => { setPriceUnicorn(0); setTitleUnicorn(''); setButtonUnicorn(false);  setQuantityUnicorn(1)}}>x</button> : <></>}</td>
                    </tr> </> : <></>}
                {priceRoll ? <>
                  <tr>
                    <td>{titleRoll}</td>
                    <td>Rp{priceRoll},00.-</td>
                    <td>
                      <div className='qty'>
                        <button className='min' onClick={handleQuantityRollMin}>-</button>{quantityRoll}<button className='plus' onClick={handleQuantityRollPlus}>+</button>
                      </div>
                    </td>
                    <td className='mid'>{buttonRoll ? <button className='min' onClick={() => { setPriceRoll(0); setTitleRoll(''); setButtonRoll(false); setQuantityRoll(1) }}>x</button> : <></>}</td>
                  </tr>
                </> : <> </>}

                {priceSea ? <>
                  <tr>
                    <td>{titleSea}</td>
                    <td>Rp{priceSea},00.-</td>
                    <td>
                      <div className='qty'>
                        <button className='min' onClick={handleQuantitySeaMin}>-</button>{quantitySea}<button  className='plus' onClick={handleQuantitySeaPlus}>+</button>
                      </div>
                    </td>
                    <td className='mid'>{buttonSea ? <button  className='min'  onClick={() => { setTitleSea(''); setPriceSea(0); setButtonSea(false); setQuantitySea(1) }}>x</button> : <></>}</td>
                  </tr>
                </> : <> </>}

                {priceWaffle ? <>
                  <tr>
                    <td>{titleWaffle}</td>
                    <td>Rp{priceWaffle},00.-</td>
                    <td>
                      <div className='qty'>
                        <button className='min' onClick={handleQuantityWaffleMin}>-</button>{quantityWaffle}<button className='plus' onClick={handleQuantityWafflePlus}>+</button>
                      </div>
                    </td>
                    <td className='mid'>{buttonWaffle ? <button  className='min'  onClick={() => { setPriceWaffle(0); setTitleWaffle(''); setButtonWaffle(false); setQuantityWaffle(1) }}>x</button> : <></>}</td>
                  </tr>
                </>
                  : <></>}

              </tbody>
              <tfoot>
                <tr>
                  <th>total</th>
                  <th>Rp{(priceRoll*quantityRoll) + (priceSea*quantitySea)+ (priceWaffle*quantityWaffle) + (priceUnicorn*quantityUnicorn)},00.- </th>
                </tr>
              </tfoot>
            </table>
          </div>
          : <></>
        }
      </div>
      <footer>
        <div className='copyright'>
          <p><b>&copy;COPYRIGHTS </b>Fitriana - 2023</p>
        </div>
        <div className='social'>
          <a href='https://github.com/ftrianaa' target="_blank"><i className="fa-brands fa-github"></i></a>
          <hr />
          <a href='https://www.linkedin.com/in/fitriana1601' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <hr />
          <a href='https://instagram.com/ftrianaa_' target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <hr />
          <a href='https://codesandbox.io/u/ftrianaa' target="_blank"><i className="fa-brands fa-codepen"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;

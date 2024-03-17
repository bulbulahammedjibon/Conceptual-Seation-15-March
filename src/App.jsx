

import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from './SingleProduct'
import CartAdd from './CartAdd';

function App() {
  const [product, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../public/fakeData.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleCart = (p) => {
    const isExisist = cart.find((pd) => pd.id === p.id);
    if (!isExisist) {
      setCart([...cart, p])
    }
    else {
      alert("already in cart")
    }

  }

  const handleDelete = (id) =>{
    const newCart = cart.filter(item => item.id !=id );
    setCart(newCart);
  }

  return (
    <>

      <div className="main-container">

        <div className="card-container">
          {
            product.map(pd => <SingleProduct product={pd}
              handleCart={handleCart}
              key={pd.id} ></SingleProduct>)
          }


        </div>

        <div className="cart-container">
          <h3>This is cart</h3>
          <div className="cart-title">
            <h5>name</h5>
            <h5>Price</h5>
          </div>
          <div >
            {
              cart.map((item,index) => (
                <CartAdd key={item.id}
                 item={item}
                 index={index}
                 handleDelete={handleDelete}></CartAdd>

              ))
            }
          </div>
        </div>

      </div>

    </>
  )
}

export default App

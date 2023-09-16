import { useState } from 'react' 
import './App.css'
import Header from './components/Header/Header'
import Data from './components/Data/Data'
import Cart from './components/Cart/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalRemaining, setTotalRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0)

  const handleAddToCart = blog =>{
    const isExist = cart.find(item => item.id === blog.id)

    if(!isExist) {
      const newCart = [...cart,blog];
      const sumCredit = newCart.reduce((a, b) => a + b.hour, 0)
      const remainingCredit = 20 - sumCredit;
      const sumPrice = newCart.reduce((a, b )=> a + b.price, 0);
      setCart(newCart)
      setTotalCredit(sumCredit)
      setTotalRemaining(remainingCredit)
      setTotalPrice(sumPrice)

    }
  }

  return (
    <main className='bg-[#F3F3F3]'>
    <Header></Header>
    <div className='md:flex justify-center gap-10 mt-8'>
      <Data handleAddToCart={handleAddToCart}></Data>
      <Cart className cart={cart}
      totalRemaining={totalRemaining}
      totalCredit={totalCredit}
      totalPrice={totalPrice}
      ></Cart>
    </div>
    </main>
  )
}

export default App

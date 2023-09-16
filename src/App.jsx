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
      const sumCredit = newCart.reduce((x, y) => x + y.hour, 0)
      if (sumCredit > 20){
        alert("You can't add more")
      }else{
        setTotalCredit(sumCredit)
      }
      const remainingCredit = 20 - sumCredit;
      if (remainingCredit < 0){
        alert("You have reached the limit");
      } else{
        setTotalRemaining(remainingCredit)
      }
      const sumPrice = newCart.reduce((x, y )=> x + y.price, 0);
      setCart(newCart)
      setTotalPrice(sumPrice)

    }
  }

  return (
    <main className='bg-[#F3F3F3]'>
    <Header></Header>
    <div className='md:flex justify-center gap-10 mt-8'>
      <Data handleAddToCart={handleAddToCart}></Data>
      <Cart cart={cart}
      totalRemaining={totalRemaining}
      totalCredit={totalCredit}
      totalPrice={totalPrice}
      ></Cart>
    </div>
    </main>
  )
}

export default App

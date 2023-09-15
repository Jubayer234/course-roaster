import { useState } from 'react' 
import './App.css'
import Header from './components/Header/Header'
import Data from './components/Data/Data'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-[#F3F3F3] min-w-full'>
    <Header></Header>
    <div className='md:flex justify-around mt-8'>
      <Data></Data>
      <Cart></Cart>
    </div>
    </main>
  )
}

export default App

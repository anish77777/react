import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increase() {
     setCount(prevCount => prevCount +1)
   }
  function decrease() {
     setCount(prevCount => prevCount -1)
  }
  const resetCount=() => {
    setCount(prevCount => prevCount =0)
  }
  return (
    <>
      <button
      onClick={increase}>Increase</button>
      <button
        onClick={decrease}>Decrease</button>
      <div>{count}</div>
      <button
      onClick={resetCount}>Reset Count</button>
      
    </>
  )
}

export default App

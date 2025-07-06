import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Increment({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Increment: {count}
    </button>
  )
}
function Decrement({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Decrement: {count}
    </button>

  )
}



function App() {
  const [count, setCount] = useState(1)

  function Decrease() {
      setCount(count - 1)
  }

  function Increase() {
      setCount(count + 1);
  }
  
  return (
    <>
      <h1>Hello,World {count}</h1>
      <Increment count={count} onClick={Increase} />
      <Decrement count={count} onClick={Decrease}/>
    </>
  )
}

export default App

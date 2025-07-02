import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // 
  let [counter, setCounter] = useState(15) 
  //set counter method 
  //default value any value to useState(p)
  // let counter = 5

  // let addValue = () => {
  //   // counter = counter+1
  //   console.log("clicked", counter)
  //   setCounter(counter+1)
    
  // }
  function addValue() {
    setCounter(counter+1)
    console.log("clicked", counter)
  }
  
 
  const removeValue=()=>{
     return (setCounter(counter-1))
  }
  //problem ui updation
  
  return (
    <>
      <h1>Chai react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}
      > Add value {counter}</button >
      <br />
      <button
      onClick={removeValue}>Remove value{counter}</button>
      <p>Footer:{counter }</p>
    </>
  )
}

export default App




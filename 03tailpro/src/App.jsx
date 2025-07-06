import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
//props = properties
//can acces in card by using props.username or {username} and username
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Anish",
    age:21
  }
  let newArr = [1,2,3]
  
  return (
    <>
      <Card userName="Anish" gmail="Anish@gmail.com" someObj={myObj} newArr={newArr } />
    <Card userName="Ram" gmail="Ram@gmail.com"/>
    </>
  )
}

export default App
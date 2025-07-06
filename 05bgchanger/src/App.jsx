import { useState } from "react"



function App() {
  const[color,setColor] =useState("olive")

  return (
    <>
      <div className="w-full h-screen"
      style={{backgroundColor:"#000"}}></div>
    </>
  )
}

export default App
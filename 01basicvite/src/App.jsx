import Youtube from "./Youtube" 
//variable inject same as `${}` but {}
//we can only write evaluated expression inside {}
//final outcome not if(. condition)
function App() {
  const username = "Chai aur code"

  return (
    <>
      <h1>Vite react app {username}</h1>
       
      <h1>Vite react app</h1>
      <Youtube />
    </>
  )
}

export default App

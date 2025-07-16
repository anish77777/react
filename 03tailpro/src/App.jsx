// Importing useState hook from React (not used here but included for learning)
import { useState } from 'react'

// Importing global CSS styles
import './App.css'

// Importing the Card component to use inside App
import Card from './component/Card'

// The main functional component
function App() {
  // Creating a state variable 'count' with initial value 0 (not used here)
  const [count, setCount] = useState(0)

  // Creating a JavaScript object to pass as props
  let myObj = {
    username: "Anish",
    age: 21
  }

  // Creating an array to pass as props
  let newArr = [1, 2, 3]

  // Returning JSX that renders two Card components
  return (
    <>
      {/* First Card component with multiple props passed:
          - userName: string
          - gmail: string
          - someObj: object
          - newArr: array
      */}
      <Card
        userName="Anish"
        gmail="Anish@gmail.com"
        someObj={myObj}
        newArr={newArr}
      />

      {/* Second Card component with only two props passed:
          - userName: string
          - gmail: string
      */}
      <Card
        userName="Ram"
        gmail="Ram@gmail.com"
      />
    </>
  )
}

// Exporting App component as default so it can be used in main.jsx
export default App

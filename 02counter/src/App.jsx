// Importing useState hook from React to manage state in this component
import { useState } from 'react'

// Importing logos and CSS (not used in UI directly here, but included)

import './App.css'

// App component - main functional component
function App() {

  // Declaring a state variable 'counter' with initial value 15
  // 'setCounter' is a function that will update the value of 'counter'
  let [counter, setCounter] = useState(15)

  // Function to handle adding value (incrementing counter)
  function addValue() {
    // Update state by increasing counter by 1
    setCounter(counter + 1)

    // Logs current counter value (note: this shows previous value due to async nature of setState)
    console.log("clicked", counter)
  }

  // Function to handle removing value (decrementing counter)
  const removeValue = () => {
    // Prevent counter from going below 0
    if (counter <= 0) {
      // Sets counter to 0 just to be sure (even though it already is)
      setCounter(counter = 0)
    } else {
      // Decrease counter by 1
      setCounter(counter - 1)
    }
  }

  // Returning JSX (HTML-like code) to define UI
  return (
    <>
      {/* Heading */}
      <h1>Chai react</h1>

      {/* Display current counter value */}
      <h2>Counter value: {counter}</h2>

      {/* Button to add value */}
      <button onClick={addValue}>
        Add value {counter}
      </button>

      <br />

      {/* Button to remove value */}
      <button onClick={removeValue}>
        Remove value {counter}
      </button>

      {/* Footer text showing counter value */}
      <p>Footer: {counter}</p>
    </>
  )
}

// Export the App component to be used in main.jsx
export default App




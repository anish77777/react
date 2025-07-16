// Import necessary hooks from React
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // State to hold the password length (default 8)
  const [length, setLength] = useState(8)

  // State to determine whether numbers are allowed in the password
  const [numberAllowed, setNumberAllowed] = useState(false)

  // State to determine whether special characters are allowed
  const [characterAllowed, setCharacterAllowed] = useState(false)

  // State to store the generated password
  const [password, setPassword] = useState("")

  // useRef to directly reference the password input element in the DOM
  const passwordRef = useRef(null)

  // passwordGenerator function is memoized using useCallback to avoid re-creation unless dependencies change
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // Append numbers to the character set if numberAllowed is true
    if (numberAllowed) str += "0123456789"

    // Append special characters if characterAllowed is true
    if (characterAllowed) str += "!@#$%^&*()"

    // Randomly generate a password based on length and allowed characters
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    // Update the password state
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])

  // Function to copy password to clipboard using useRef and Clipboard API
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // Selects the text inside the input
    passwordRef.current?.setSelectionRange(0, 20) // Optional: sets range of selection
    window.navigator.clipboard.writeText(password) // Copy to clipboard
  }, [password])

  // Automatically regenerate the password whenever options change
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      {/* Container box */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-5'>Password Generator</h1>

        {/* Password display box and copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef} // attach useRef to this input
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            copy
          </button>
        </div>

        {/* Password options */}
        <div className='flex text-sm gap-x-1 mb-4'>

          {/* Slider to change password length */}
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>

          {/* Checkbox for including numbers */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Checkbox for including special characters */}
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="charInput"
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App


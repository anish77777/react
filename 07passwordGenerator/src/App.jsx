import { useState, useCallback ,useEffect,useRef} from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  
  //useRef hook
  const passwordRef = useRef(null)

  //useCallback(fn,[dependencies])
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])
  //passwordGenerator() too many render will not be run cause of render limit
  // //so we use useeffect useEffect() almost same as callback but doesnot need to store in variable
  
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
   },
  [password])
  
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center  my-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-lg overflow-hidden mb-4 bg-white'>
          <input type='text' value={password} 
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly

            //
            ref ={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
          </button>
          
        </div>
        <div className='flex text-sm gap-x-1'>
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Lenght: {length}</label>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} 
            />
            <label htmlFor="numberInput">Numbers</label>
        </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={characterAllowed}
              id="numberInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }} 
            />
            <label htmlFor="numberInput">Characters</label>
        </div>
        
        </div>
      </div>
    </>
  )
}

export default App

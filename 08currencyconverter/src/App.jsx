// Import required hooks and components
import { useState } from 'react'
import { InputBox } from './components' // Custom input component for currency selection
import useCurrencyInfo from './hook/useCurrencyInfo' // Custom hook to fetch currency data
import './App.css'

function App() {

  // ---------------- STATE ----------------
  const [amount, setAmount] = useState(0)            // Amount entered in the "From" box
  const [from, setFrom] = useState("usd")            // Selected source currency
  const [to, setTo] = useState("inr")                // Selected target currency
  const [convertedAmount, setConvertedAmount] = useState(0) // Result after conversion

  // ---------------- HOOK ----------------
  const currencyInfo = useCurrencyInfo(from) // Fetch exchange rates for the 'from' currency

  // Get the list of available currencies (like ["usd", "inr", "eur"]) from the fetched data
  const options = Object.keys(currencyInfo)

  // ---------------- HANDLERS ----------------

  // Swap the "From" and "To" currency values
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // Convert amount from 'from' to 'to' currency
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) // currencyInfo[to] = exchange rate
  }

  // ---------------- UI ----------------

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        {/* Container box */}
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          {/* Form for conversion */}
          <form
            onSubmit={(e) => {
              e.preventDefault() // Prevent page reload on submit
              convert()          // Trigger conversion
            }}
          >

            {/* Input box for 'From' currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From"                     // Label at top
                amount={amount}                 // Value of amount
                currencyOptions={options}       // Dropdown options
                onCurrencyChange={(currency) => setFrom(currency)} // Handle currency selection
                selectCurrency={from}           // Current selected currency
                onAmountChange={(amount) => setAmount(amount)}     // Handle amount input
              />
            </div>

            {/* Swap button between From and To */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* Input box for 'To' currency (amount is auto-calculated) */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}          // Converted value shown
                currencyOptions={options}         // Dropdown options
                onCurrencyChange={(currency) => setTo(currency)}   // Handle currency change
                selectCurrency={to}               // Current selected currency
                amountDisable                     // Disable amount input (read-only)
              />
            </div>

            {/* Submit button to trigger conversion */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App

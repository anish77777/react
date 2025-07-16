
// Import React and the useId hook
import React, { useId } from 'react'

// InputBox is a reusable component that handles currency input and selection
function InputBox({
    label,               // Label for the input field (e.g. "From" or "To")
    amount,              // Value of the amount input field
    onAmountChange,      // Function to call when amount changes
    onCurrencyChange,    // Function to call when currency selection changes
    currencyOptions = [], // List of available currencies (e.g. ["usd", "eur"])
    selectCurrency = "usd", // Currently selected currency
    amountDisable = false,  // Whether to disable the amount input
    currencyDisable = false,// Whether to disable the currency dropdown
    className = "",         // Extra className to apply to the outer div (for styling)
}) {
    // Generates a unique ID for the input element — useful for accessibility (label + input pair)
    const amountInputId = useId()

    return (
        // Outer container with styles and any additional className passed from parent
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            {/* Left half: Amount input field */}
            <div className="w-1/2">
                {/* Label linked to input via htmlFor and useId */}
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                {/* Numeric input field */}
                <input
                    id={amountInputId} // Links to the label for accessibility
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} // disables input if true
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                // Optional chaining: only call onAmountChange if it's defined
                // Convert string input to number before passing it
                />
            </div>

            {/* Right half: Currency dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // currently selected currency
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    // Calls onCurrencyChange only if it exists
                    disabled={currencyDisable} // disables dropdown if true
                >

                    {/* Loop through currencyOptions array and create <option> for each */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                    {/* ✅ Always include a unique `key` when using map in JSX */}
                </select>
            </div>
        </div>
    )
}

export default InputBox

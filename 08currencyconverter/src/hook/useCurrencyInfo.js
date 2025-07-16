// useCurrencyInfo.js
// Custom hook to fetch currency exchange rates from an API

import { useEffect, useState } from "react";

// Custom hook definition
function useCurrencyInfo(currency) {
    // State to store the fetched data
    const [data, setData] = useState({}) // initialized as an empty object to avoid runtime errors

    // useEffect to fetch currency data whenever the 'currency' dependency changes
    useEffect(() => {
        // Fetch exchange rate data from the API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())         // Parse JSON from the response
            .then((res) => setData(res[currency])) // Extract the currency data and update state

        // This console.log will run every render, not after fetch completes
        console.log("Inside useEffect:", data);
    }, [currency]) // Runs again only when 'currency' value changes

    // This console.log runs on every render too
    console.log("Outside useEffect:", data);

    // Return the fetched data to the component using this hook
    return data
}

export default useCurrencyInfo

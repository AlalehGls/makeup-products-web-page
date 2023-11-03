import React from "react";


const CurrencyArray = ['USD', 'EUR', 'IRR', 'AED'];
export default function CurrencySelect({ currency, handleCurrencyChange }) {

  
  return (
    <div className="form-row">
      <label htmlFor="currency-select">Currency:</label>
      <select
        id="currency-select"
        value={currency}
        onChange={handleCurrencyChange}
      >
      
      {CurrencyArray.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
      </select>
    </div>
  );
}

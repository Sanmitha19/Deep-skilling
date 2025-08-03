import React, { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  // Conversion rate (example: ₹90 = €1)
  const conversionRate = 90;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rupees) {
      setEuro((rupees / conversionRate).toFixed(2));
    } else {
      setEuro("");
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in Rupees"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>

      {euro && (
        <h3>
          ₹{rupees} = €{euro}
        </h3>
      )}
    </div>
  );
}

export default CurrencyConverter;

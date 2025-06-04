import React, { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchPrice = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        const data = await response.json();
        if (!isCancelled) {
          setPrice(data.bitcoin[currency.toLowerCase()]);
        }
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        if (!isCancelled) {
          setPrice(null);
        }
      }
    };

    fetchPrice();

    return () => {
      isCancelled = true;
    };
  }, [currency]);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>
        {price !== null 
          ? `1 BTC = ${price} ${currency}`
          : 'Loading price...'}
      </p>
    </div>
  );
}

export default BitcoinRates;

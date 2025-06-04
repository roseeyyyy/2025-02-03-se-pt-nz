import React, { useState } from 'react';
import BitcoinPrice from './BitcoinPrice';
import { useEmoji } from '../Exer3/EmojiContext';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates2() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = BitcoinPrice(currency);
  const { isHappy } = useEmoji();

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates2 componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>
        {loading && 'Loading price...'}
        {error && `Error: ${error}`}
        {!loading && !error && `1 BTC = ${price} ${currency}`}
      </p>
    </div>
  );
}

export default BitcoinRates2;

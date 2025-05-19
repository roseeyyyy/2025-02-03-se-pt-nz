import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid number');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operator';
    }

    setResult(res);
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-2xl font-bold text-center">Calculator</h2>
      <form onSubmit={handleCalculate} className="space-y-3">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="First number"
          className="w-full border px-3 py-2 rounded"/>
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="w-full border px-3 py-2 rounded">
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Second number"
          className="w-full border px-3 py-2 rounded"/>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Calculate
        </button>
      </form>

      {result !== null && (
        <div className="text-center text-xl font-semibold">
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;

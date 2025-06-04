import { useEffect, useReducer } from 'react';

const initialState = {
  price: null,
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { price: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function BitcoinPrice(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isCancelled = false;

    const fetchPrice = async () => {
      dispatch({ type: 'FETCH_START' });

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();

        if (!isCancelled) {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: data.bitcoin[currency.toLowerCase()],
          });
        }
      } catch (error) {
        if (!isCancelled) {
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      }
    };

    fetchPrice();

    return () => {
      isCancelled = true;
    };
  }, [currency]);

  return state;
}

export default BitcoinPrice;
'use client';

import { getAllCurrencies, MARKET_CURRENCIES } from '@/utils';
import { useCallback, useState } from 'react';
import QuotesModal from './quotesModal';
import styles from 'quoteForm.module.css';
import { fetchQuote, fetchQuotesForCurrency } from '@/api';
import { Currency, Quote } from '@/types';
 
const QuoteForm: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('btc');
  const [side, setSide] = useState('buy');
  const [amount, setAmount] = useState('10');
  const [currentQuotes, setCurrentQuotes] = useState<Quote[]>();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Promise.all(fetchQuotesForCurrency(side as "buy" | "sell", currency, amount)).then((quotes) => {
      setCurrentQuotes(quotes);
    })
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-4 border-2 border-gray-800 rounded shadow-lg">
      <div className="mb-4 flex justify-content">
        <select
          id="side"
          value={side}
          onChange={(e) => setSide(e.target.value)}
          className="bg-gray-800 text-gray-300 w-full border-gray-300 rounded-md mr-2 px-3 appearance-none py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="buy">BUY</option>
          <option value="sell">SELL</option>
        </select>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)} 
          className="bg-gray-800 text-gray-300 w-full rounded-md ml-2 px-3 appearance-none py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          {getAllCurrencies().map((currency) => {
            return <option value={currency} key={currency}>{currency.toLocaleUpperCase()}</option>
          })}
        </select>
      </div>
      <div>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value)  
          }}
          className="appearance-none mb-4 bg-gray-800 text-gray-300 w-full border-gray-300 rounded-md block w-45 px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button type="submit" className="w-full bg-blue-800 text-gray-300 hover:bg-blue-600 text-white font-medium py-2 rounded">
        Get Quotes
      </button>
      
      <QuotesModal quotes={currentQuotes} isOpen={Boolean(currentQuotes)} onClose={() => {
        setCurrentQuotes(undefined)
      }} />
    </form>
    
  );
};

export default QuoteForm;

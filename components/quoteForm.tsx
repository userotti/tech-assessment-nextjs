'use client';

import { marketCurrencies } from '@/utils';
import { useCallback, useState } from 'react';
import QuoteModal from './quoteModal';

export type FormData = {
    market: string;
    side: string;
    to_amount: string;
    from_amount: string;
}
   
export interface QuoteFormProps {
  onSubmit: (data: FormData) => Promise<any>;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSubmit }) => {
  const [market, setMarket] = useState('btczar');
  const [side, setSide] = useState('buy');
  const [toAmount, setToAmount] = useState('0');
  const [fromAmount, setFromAmount] = useState('0');
  const [currentQuote, setCurrentQuote] = useState();

  const getToAmountFormLabel = useCallback(() => {
    return side === "buy" ? marketCurrencies[market][0] : marketCurrencies[market][1]  
  }, [side, market])

  const getFromAmountFormLabel = useCallback(() => {
    return side === "buy" ? marketCurrencies[market][1] : marketCurrencies[market][0]  
  }, [side, market])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ market, side, to_amount: toAmount, from_amount: fromAmount }).then((payload) => {
      setCurrentQuote(payload)
    })
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-4 border rounded shadow-lg">
      <div className="mb-4">
        <label htmlFor="market" className="block font-medium mb-1">Market:</label>
        <select
          id="market"
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Select Market</option>
          <option value="btczar">BTCZAR</option>
          <option value="usdtzar">USDTZAR</option>
          <option value="ethusdt">ETHUSDT</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="side" className="block font-medium mb-1">Side:</label>
        <select
          id="side"
          value={side}
          onChange={(e) => setSide(e.target.value)}
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Select Side</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      <div>
        <label htmlFor="toAmount">{getToAmountFormLabel()}</label>
        <input
          type="number"
          id="toAmount"
          value={toAmount}
          onChange={(e) => {
            setFromAmount('0')
            setToAmount(e.target.value)  
          }}
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div>
        <label htmlFor="fromAmount">{getFromAmountFormLabel()}</label>
        <input
          type="number"
          id="fromAmount"
          value={fromAmount}
          onChange={(e) => {
            setToAmount('0')
            setFromAmount(e.target.value)  
          }}
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded">
        Get Quote
      </button>
      
      <QuoteModal data={currentQuote} isOpen={Boolean(currentQuote)} onClose={() => {
        setCurrentQuote(undefined)
      }} />
    </form>
    
  );
};

export default QuoteForm;

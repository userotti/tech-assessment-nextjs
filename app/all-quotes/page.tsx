'use client';

import { QuoteItem } from '@/components/quoteItem';
import { useQuoteStore } from '@/store';

const Home: React.FC = () => {
  
  const { quotes } = useQuoteStore();

  
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl mb-2 font-mediumtext-gray-300">All Quotes</h2>
        
      <div className="flex flex-col p-4 justify-start items-start border-2 border-gray-800 rounded">
        {quotes.map((quote) => {
          return <QuoteItem key={quote.quote_token} quote={quote}/>
        })}
      </div>
    </div>
  );
};

export default Home;

'use client';

import QuoteForm from "@/components/quoteForm";
import { useQuoteStore } from "../../store";


const Home: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <QuoteForm/>
      </div>
    </div>
  );
};

export default Home;

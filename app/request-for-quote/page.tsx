'use client';

import QuoteForm, { FormData } from "@/components/quoteForm";
import { useQuoteStore } from "../../store";

function createQueryParamsFromObject(obj: { [key: string]: string }): string {
  const params = new URLSearchParams();
  for (const key in obj) {
    params.append(key, obj[key]);
  }
  return params.toString();
}

const endpoint = "https://www.ovex.io/api/v2/rfq/get_quote"

const Home: React.FC = () => {
  const { addQuote } = useQuoteStore();
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <QuoteForm onSubmit={(quoteData: FormData) => {
          return fetch(`${endpoint}?${createQueryParamsFromObject(quoteData)}`).then((result) => {
            return result.json().then((payload) => {
              addQuote(payload)
              return payload
            })  
          })
        }}/>
      </div>
    </div>
  );
};

export default Home;

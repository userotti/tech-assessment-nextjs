import { Quote } from '@/types';
import React from 'react';
import { QuoteItem } from './quoteItem';
import { useQuoteStore } from "../store";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  quotes?: Quote[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, quotes }) => {

  const { addQuote } = useQuoteStore();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 ">
      <div className="bg-black p-4 shadow-md rounded-md p-4 border-2 border-gray-800 rounded shadow-lg">
        <h2 className="text-xl font-medium mb-2 text-gray-300">Select a Quote:</h2>
        {quotes?.map((quote) => {
          return (<QuoteItem key={quote.quote_token} quote={quote} onClick={() => {
            addQuote(quote)
            onClose()
          }} />)
        })}

        <div className="flex flex-row justify-end pt-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;

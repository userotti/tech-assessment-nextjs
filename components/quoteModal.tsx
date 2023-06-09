import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: {
    market: string;
    side: string;
    rate: number;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-medium mb-2">Modal Title</h2>
        <p>Market: {data.market}</p>
        <p>Side: {data.side}</p>
        <p>Rate: {data.rate}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

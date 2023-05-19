import { Quote } from "@/types";
import { getMarketDisplayName } from "@/utils";
import { MouseEventHandler } from "react";


type QuoteItemProps = {
  quote: Quote,
  onClick?: MouseEventHandler
}

export const QuoteItem: React.FC<QuoteItemProps> = ({ quote, onClick }) => {
  
  return <div onClick={onClick} className={`p-4 mb-2 rounded border-1 cursor-pointer ${quote.side==="sell" ? "border-red-600 hover:bg-red-600" : "border-green-600 hover:bg-green-600"}`}> { quote.side === "sell" ?
    <span className="text-gray-400">SELL <span className="text-white">{`${quote.from_amount} ${quote.from_currency.toLocaleUpperCase()}`}</span> for <span className="text-white">{`${quote.to_amount} ${quote.to_currency.toLocaleUpperCase()}`}</span> via market <span className="text-white">{getMarketDisplayName(quote.market)}</span></span> :
    <span className="text-gray-400">BUY <span className="text-white">{`${quote.to_amount} ${quote.to_currency.toLocaleUpperCase()}`}</span> with <span className="text-white">{`${quote.from_amount} ${quote.from_currency.toLocaleUpperCase()}`}</span> via market <span className="text-white">{getMarketDisplayName(quote.market)}</span></span>
  }
  </div>
}
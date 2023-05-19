import { Currency, QuoteRequestData } from "./types"
import { createQueryParamsFromObject, currencyIsMarketBase, findAllMarketsByCurrency, MARKET_CURRENCIES } from "./utils"

const endpoint = "https://www.ovex.io/api/v2/rfq/get_quote"

export const fetchQuotesForCurrency = (action: "buy" | "sell", currency: Currency, amount: string) => {
  return findAllMarketsByCurrency(currency).map((market) => {
    const requestData: QuoteRequestData = {
      market,
      side: action
    };

    //When they are buying, its always "to", when they selling is always "from".
    if (action === "buy") {
      requestData.to_amount = String(amount)

      //If the currency is not the base currency for the market, reverse the direction
      if (!currencyIsMarketBase(market, currency)) {
        requestData.side = "sell"
      }

    } else {
      requestData.from_amount = String(amount)

      //If the currency is not the base currency for the market, reverse the direction
      if (!currencyIsMarketBase(market, currency)) {
        requestData.side = "buy"
      }
      
    }

      
    return fetchQuote(requestData)
      
  }) 
}

export const fetchQuote = (quoteRequestData: QuoteRequestData) => {
  return fetch(`${endpoint}?${createQueryParamsFromObject(quoteRequestData)}`).then((result) => {
    return result.json().then((payload) => {
      return payload
    })
  })
}

export type Market = "btczar" | "usdtzar" | "ethusdt"

export type Currency = "btc" | "zar" | "eth" | "usdt"

export type Quote = {
  market: Market,
  side: "buy" | "sell",
  from_currency: Currency,
  from_amount: string,
  to_currency: Currency,
  to_amount: string,
  rate: string,
  rate_is_from_currency: boolean,
  requested_at: number,
  expires_at: number,
  quote_token: string,
}  

export type Quotes = Quote[]

export type AppState = {
  quotes: Quote[],
  addQuote: Function
}

export type QuoteRequestData = {
    market: string;
    side: string;
    to_amount?: string;
    from_amount?: string;
}
  
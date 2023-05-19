import { Currency } from "./types";
import { Market } from "./types"

export const MARKET_CURRENCIES: { [key: string]: string[]; } = {
  "btczar": ["btc", "zar"],
  "usdtzar": ["usdt", "zar"],
  "ethusdt": ["eth", "usdt"],
}

export const getAllCurrencies = () => {
  return [...new Set(Object.values(MARKET_CURRENCIES).flat())];
}

export const findAllMarketsByCurrency = (currency: Currency) => {
  return Object.keys(MARKET_CURRENCIES).filter((market) => {
    return MARKET_CURRENCIES[market].indexOf(currency) >= 0
  }) as Market[]
}

export const currencyIsMarketBase = (market: Market, currency: Currency) => {
  const result = MARKET_CURRENCIES[market].indexOf(currency)
  
  if (result == 0) return true
  if (result == 1) return false
  
  throw new Error("currency not in market")
}

export const getMarketDisplayName = (market: Market) => {
  return `${MARKET_CURRENCIES[market][0].toLocaleUpperCase()}/${MARKET_CURRENCIES[market][1].toLocaleUpperCase()}`  
}

export function createQueryParamsFromObject(obj: { [key: string]: string }): string {
  const params = new URLSearchParams();
  for (const key in obj) {
    params.append(key, obj[key]);
  }
  return params.toString();
}

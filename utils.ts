import { Market } from "./types"

export const marketCurrencies: { [key: string]: string[]; } = {
  "btczar": ["btc", "zar"],
  "usdtzar": ["usdt", "zar"],
  "ethusdt": ["eth", "usdt"],
}

export const getMarketDisplayName = (market: Market) => {
  return `${marketCurrencies[market][0]}/${marketCurrencies[market][1]}`  
}

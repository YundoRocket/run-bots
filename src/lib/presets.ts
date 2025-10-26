export interface MarketPreset {
  asset: string;
  timeframes: ("5m" | "15m" | "1h")[];
}

export const MARKET_PRESETS: MarketPreset[] = [
  { asset: "BTC/USDT", timeframes: ["5m", "15m", "1h"] },
  { asset: "ETH/USDT", timeframes: ["5m", "15m", "1h"] },
  { asset: "SUI/USDC", timeframes: ["5m", "15m", "1h"] },
  { asset: "ADA/USDT", timeframes: ["5m", "15m", "1h"] },
  { asset: "SOL/USDT", timeframes: ["5m", "15m", "1h"] },
  { asset: "DOT/USDT", timeframes: ["5m", "15m", "1h"] },
];

export function getTimeframesForAsset(asset: string): ("5m" | "15m" | "1h")[] {
  const preset = MARKET_PRESETS.find((p) => p.asset === asset);
  return preset?.timeframes || ["5m", "15m", "1h"];
}

export interface AdvancedPredictoorConfig {
  // Basic config (already exists)
  botName: string;
  network: "testnet" | "mainnet";
  asset: string;
  timeframe: "5m" | "15m" | "1h";
  stakeUsd: number;
  maxGasUsd: number;
  cronSchedule: string;
  outDir: string;

  // Advanced config (new)
  predSubmitterMgr: string; // Contract address
  aimodel: {
    max_n_train: number;
    autoregressive_n: number;
  };
  approach: 1 | 2 | 3; // 1=feeds only, 2=model on-the-fly, 3=pre-trained
  s_until_epoch_end: number;
}

export interface AdvancedTraderConfig {
  // Basic config
  botName: string;
  network: "testnet" | "mainnet";
  pair: string;
  strategy: "momentum" | "mean-reversion" | "custom";
  stakeUsd: number;
  maxGasUsd: number;
  cronSchedule: string;
  outDir: string;

  // Advanced config
  buy_amt: number;
  sell_amt: number;
  fee_percent: number;
  use_own_model: boolean;
}

export function generateAdvancedPredictoorYaml(config: AdvancedPredictoorConfig): string {
  return `pp:
  kind: predictoor
  market:
    asset: ${config.asset}
    timeframe: ${config.timeframe}

ss:
  name: ${config.botName}
  strategy:
    stake_usd: ${config.stakeUsd}
    max_gas_usd: ${config.maxGasUsd}
  schedule: "${config.cronSchedule}"
  out_dir: ${config.outDir}

predictoor_ss:
  approach: ${config.approach}
  s_until_epoch_end: ${config.s_until_epoch_end}
  bot_only:
    pred_submitter_mgr: "${config.predSubmitterMgr}"
  aimodel_ss:
    max_n_train: ${config.aimodel.max_n_train}
    autoregressive_n: ${config.aimodel.autoregressive_n}

lake_ss:
  lake_dir: lake_data
`;
}

export function generateAdvancedTraderYaml(config: AdvancedTraderConfig): string {
  return `pp:
  kind: trader
  market:
    pair: ${config.pair}

ss:
  name: ${config.botName}
  strategy:
    type: ${config.strategy}
    stake_usd: ${config.stakeUsd}
    max_gas_usd: ${config.maxGasUsd}
  schedule: "${config.cronSchedule}"
  out_dir: ${config.outDir}

trader_ss:
  buy_amt: ${config.buy_amt} USD
  sell_amt: ${config.sell_amt} USD
  fee_percent: ${config.fee_percent}
  use_own_model: ${config.use_own_model}

lake_ss:
  lake_dir: lake_data
`;
}

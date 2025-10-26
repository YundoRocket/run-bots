import YAML from "yaml";

export interface PredictoorConfig {
  botName: string;
  network: "testnet" | "mainnet";
  asset: string;
  timeframe: "5m" | "15m" | "1h";
  stakeUsd: number;
  maxGasUsd: number;
  cronSchedule: string;
  outDir: string;
  predSubmitterMgr?: string; // Prediction Submitter Manager contract address
}

export interface TraderConfig {
  botName: string;
  network: "testnet" | "mainnet";
  pair: string;
  strategy: "momentum" | "mean-reversion" | "custom";
  stakeUsd: number;
  maxGasUsd: number;
  cronSchedule: string;
  outDir: string;
}

export function generatePredictoorYaml(config: PredictoorConfig): string {
  const data: any = {
    pp: {
      kind: "predictoor",
      market: {
        asset: config.asset,
        timeframe: config.timeframe,
      },
    },
    ss: {
      name: config.botName,
      strategy: {
        stake_usd: config.stakeUsd,
        max_gas_usd: config.maxGasUsd,
      },
      schedule: config.cronSchedule,
      out_dir: config.outDir,
    },
  };

  // Add pred_submitter_mgr if provided (required for Predictoor bots)
  if (config.predSubmitterMgr) {
    data.pp.pred_submitter_mgr = config.predSubmitterMgr;
  }

  return YAML.stringify(data);
}

export function generateTraderYaml(config: TraderConfig): string {
  const data = {
    pp: {
      kind: "trader",
      market: {
        pair: config.pair,
      },
    },
    ss: {
      name: config.botName,
      strategy: {
        type: config.strategy,
        stake_usd: config.stakeUsd,
        max_gas_usd: config.maxGasUsd,
      },
      schedule: config.cronSchedule,
      out_dir: config.outDir,
    },
  };

  return YAML.stringify(data);
}

export function parsePredictoorYaml(yaml: string): any {
  return YAML.parse(yaml);
}

export function parseTraderYaml(yaml: string): any {
  return YAML.parse(yaml);
}

export function generateCliCommand(
  type: "predictoor" | "trader",
  yamlFilename: string,
  network: string
): string {
  return `pdr ${type} ${yamlFilename} ${network}`;
}

export function generateDockerCommand(
  type: "predictoor" | "trader",
  yamlFilename: string,
  network: string
): string {
  return `docker run --rm -it \\
  -e PRIVATE_KEY=\${PRIVATE_KEY} \\
  -v $(pwd):/work \\
  ghcr.io/oceanprotocol/pdr-backend:latest \\
  pdr ${type} /work/${yamlFilename} ${network}`;
}

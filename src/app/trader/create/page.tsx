"use client";

import { useState, useEffect } from "react";
import { FormCard } from "@/components/FormCard";
import { YamlPreview } from "@/components/YamlPreview";
import { ValidationAlert } from "@/components/ValidationAlert";
import { NetworkInfo } from "@/components/NetworkInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CopyButton } from "@/components/CopyButton";
import { Download, Terminal, FileCode } from "lucide-react";
import {
  generateTraderYaml,
  generateCliCommand,
  generateDockerCommand,
  parseTraderYaml,
  type TraderConfig,
} from "@/lib/yaml";
import { generateDockerCompose } from "@/lib/dockerCompose";
import { validateTraderPPSS } from "@/lib/validators";
import { MARKET_PRESETS } from "@/lib/presets";
import { addToast } from "@/components/Toaster";

export default function TraderCreatePage() {
  const [config, setConfig] = useState<TraderConfig>({
    botName: "my-trader",
    network: "testnet",
    pair: "BTC/USDT",
    strategy: "momentum",
    stakeUsd: 10,
    maxGasUsd: 1.2,
    cronSchedule: "*/15 * * * *",
    outDir: "./trader_out",
  });

  const [validationResult, setValidationResult] = useState<{
    valid: boolean;
    errors: string[];
  }>({ valid: true, errors: [] });

  useEffect(() => {
    const yaml = generateTraderYaml(config);
    try {
      const parsed = parseTraderYaml(yaml);
      const validation = validateTraderPPSS(parsed);
      setValidationResult(validation);
    } catch (error) {
      setValidationResult({
        valid: false,
        errors: ["Failed to parse YAML"],
      });
    }
  }, [config]);

  const yaml = generateTraderYaml(config);
  const cliCommand = generateCliCommand("trader", "trader-ppss.yaml", config.network);
  const dockerCommand = generateDockerCommand("trader", "trader-ppss.yaml", config.network);
  const dockerCompose = generateDockerCompose("trader", config.network, "trader-ppss.yaml");

  const handleDownloadYaml = () => {
    if (!validationResult.valid) {
      addToast("Please fix validation errors before downloading", "error");
      return;
    }
    const blob = new Blob([yaml], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "trader-ppss.yaml";
    a.click();
    URL.revokeObjectURL(url);
    addToast("trader-ppss.yaml downloaded", "success");
  };

  const handleDownloadCompose = () => {
    if (!validationResult.valid) {
      addToast("Please fix validation errors before downloading", "error");
      return;
    }
    const blob = new Blob([dockerCompose], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "docker-compose.yml";
    a.click();
    URL.revokeObjectURL(url);
    addToast("docker-compose.yml downloaded", "success");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Create a Trader Bot</h1>
        <p className="text-muted-foreground">
          Configure your trading bot and generate validated configuration files
        </p>
      </div>

      <Alert className="mb-8 border-yellow-900 bg-yellow-900/20">
        <AlertTitle>⚠️ Security</AlertTitle>
        <AlertDescription>
          Never paste your private key into a file. Export it in your terminal
          (export PRIVATE_KEY=0x...) before launching the bot.
        </AlertDescription>
      </Alert>

      <Alert className="mb-8 border-blue-900 bg-blue-900/20">
        <AlertTitle>ℹ️ Note on Trader Schema</AlertTitle>
        <AlertDescription>
          This form generates a minimal schema for trader bot. Adapt it according to the official
          pdr-backend documentation if necessary.
        </AlertDescription>
      </Alert>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <FormCard title="Bot Configuration" description="Essential parameters">
            <div className="space-y-4">
              <div>
                <Label htmlFor="botName">Bot Name *</Label>
                <Input
                  id="botName"
                  value={config.botName}
                  onChange={(e) => setConfig({ ...config, botName: e.target.value })}
                  placeholder="my-trader"
                />
              </div>

              <div>
                <Label htmlFor="network">Network *</Label>
                <Select
                  id="network"
                  value={config.network}
                  onChange={(e) =>
                    setConfig({ ...config, network: e.target.value as "testnet" | "mainnet" })
                  }
                >
                  <option value="testnet">Testnet (Sapphire Testnet)</option>
                  <option value="mainnet">Mainnet (Sapphire Mainnet)</option>
                </Select>
              </div>

              <div>
                <Label htmlFor="pair">Trading Pair *</Label>
                <Select
                  id="pair"
                  value={config.pair}
                  onChange={(e) => setConfig({ ...config, pair: e.target.value })}
                >
                  {MARKET_PRESETS.map((preset) => (
                    <option key={preset.asset} value={preset.asset}>
                      {preset.asset}
                    </option>
                  ))}
                </Select>
                <p className="text-xs text-muted-foreground mt-1">Select from popular markets</p>
              </div>

              <div>
                <Label htmlFor="strategy">Strategy *</Label>
                <Select
                  id="strategy"
                  value={config.strategy}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      strategy: e.target.value as "momentum" | "mean-reversion" | "custom",
                    })
                  }
                >
                  <option value="momentum">Momentum</option>
                  <option value="mean-reversion">Mean Reversion</option>
                  <option value="custom">Custom</option>
                </Select>
              </div>

              <div>
                <Label htmlFor="stakeUsd">Stake (USD) *</Label>
                <Input
                  id="stakeUsd"
                  type="number"
                  min="1"
                  step="0.1"
                  value={config.stakeUsd}
                  onChange={(e) => setConfig({ ...config, stakeUsd: parseFloat(e.target.value) })}
                />
              </div>

              <div>
                <Label htmlFor="maxGasUsd">Max gas per transaction (USD) *</Label>
                <Input
                  id="maxGasUsd"
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={config.maxGasUsd}
                  onChange={(e) => setConfig({ ...config, maxGasUsd: parseFloat(e.target.value) })}
                />
                <p className="text-xs text-muted-foreground mt-1">Paid in ROSE tokens</p>
              </div>

              <div>
                <Label htmlFor="cronSchedule">Cron schedule *</Label>
                <Input
                  id="cronSchedule"
                  value={config.cronSchedule}
                  onChange={(e) => setConfig({ ...config, cronSchedule: e.target.value })}
                  placeholder="*/15 * * * *"
                />
                <p className="text-xs text-muted-foreground mt-1">Format: minute hour day month day-of-week</p>
              </div>

              <div>
                <Label htmlFor="outDir">Output directory *</Label>
                <Input
                  id="outDir"
                  value={config.outDir}
                  onChange={(e) => setConfig({ ...config, outDir: e.target.value })}
                  placeholder="./trader_out"
                />
              </div>
            </div>
          </FormCard>

          <NetworkInfo network={config.network} />
        </div>

        <div className="space-y-6">
          <ValidationAlert valid={validationResult.valid} errors={validationResult.errors} />

          <YamlPreview yaml={yaml} title="trader-ppss.yaml Preview" />

          <FormCard title="Downloads">
            <div className="space-y-3">
              <Button
                onClick={handleDownloadYaml}
                className="w-full"
                disabled={!validationResult.valid}
              >
                <Download className="mr-2 h-4 w-4" />
                Download trader-ppss.yaml
              </Button>
              <Button
                onClick={handleDownloadCompose}
                variant="outline"
                className="w-full"
                disabled={!validationResult.valid}
              >
                <FileCode className="mr-2 h-4 w-4" />
                Download docker-compose.yml
              </Button>
            </div>
          </FormCard>

          <FormCard title="CLI Command">
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <code className="text-sm">{cliCommand}</code>
                <CopyButton text={cliCommand} />
              </div>
            </div>
          </FormCard>

          <FormCard title="Docker Command">
            <div className="space-y-2">
              <pre className="p-3 bg-muted rounded-md text-xs overflow-x-auto">
                <code>{dockerCommand}</code>
              </pre>
              <CopyButton text={dockerCommand} className="w-full" />
            </div>
          </FormCard>

          <div className="text-center">
            <a href="/trader/run">
              <Button variant="secondary">
                <Terminal className="mr-2 h-4 w-4" />
                View launch guide
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  generatePredictoorYaml,
  generateCliCommand,
  generateDockerCommand,
  parsePredictoorYaml,
  type PredictoorConfig,
} from "@/lib/yaml";
import { generateDockerCompose } from "@/lib/dockerCompose";
import { validatePredictoorPPSS } from "@/lib/validators";
import { MARKET_PRESETS, getTimeframesForAsset } from "@/lib/presets";
import { addToast } from "@/components/Toaster";

export default function PredictoorCreatePage() {
  const [config, setConfig] = useState<PredictoorConfig>({
    botName: "my-predictoor",
    network: "testnet",
    asset: "BTC/USDT",
    timeframe: "5m",
    stakeUsd: 5,
    maxGasUsd: 1,
    cronSchedule: "*/5 * * * *",
    outDir: "./pdr_out",
  });

  const [availableTimeframes, setAvailableTimeframes] = useState<("5m" | "15m" | "1h")[]>(
    getTimeframesForAsset(config.asset)
  );

  const [validationResult, setValidationResult] = useState<{
    valid: boolean;
    errors: string[];
  }>({ valid: true, errors: [] });

  useEffect(() => {
    const timeframes = getTimeframesForAsset(config.asset);
    setAvailableTimeframes(timeframes);
    if (!timeframes.includes(config.timeframe)) {
      setConfig(c => ({ ...c, timeframe: timeframes[0] }));
    }
  }, [config.asset, config.timeframe]);

  useEffect(() => {
    const yaml = generatePredictoorYaml(config);
    try {
      const parsed = parsePredictoorYaml(yaml);
      const validation = validatePredictoorPPSS(parsed);
      setValidationResult(validation);
    } catch (error) {
      setValidationResult({
        valid: false,
        errors: ["Failed to parse YAML"],
      });
    }
  }, [config]);

  const yaml = generatePredictoorYaml(config);
  const cliCommand = generateCliCommand("predictoor", "ppss.yaml", config.network);
  const dockerCommand = generateDockerCommand("predictoor", "ppss.yaml", config.network);
  const dockerCompose = generateDockerCompose("predictoor", config.network, "ppss.yaml");

  const handleDownloadYaml = () => {
    if (!validationResult.valid) {
      addToast("Please fix validation errors before downloading", "error");
      return;
    }
    const blob = new Blob([yaml], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ppss.yaml";
    a.click();
    URL.revokeObjectURL(url);
    addToast("ppss.yaml downloaded", "success");
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
        <h1 className="text-4xl font-bold mb-2">Create a Predictoor Bot</h1>
        <p className="text-muted-foreground">
          Configure your prediction bot and generate validated configuration files
        </p>
      </div>

      <Alert className="mb-8 border-yellow-900 bg-yellow-900/20">
        <AlertTitle>⚠️ Security</AlertTitle>
        <AlertDescription>
          Never paste your private key into a file. Export it in your terminal
          (export PRIVATE_KEY=0x...) before launching the bot.
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
                  placeholder="my-predictoor"
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
                <Label htmlFor="predSubmitterMgr">Prediction Submitter Manager Address *</Label>
                <Input
                  id="predSubmitterMgr"
                  value={config.predSubmitterMgr || ""}
                  onChange={(e) => setConfig({ ...config, predSubmitterMgr: e.target.value })}
                  placeholder="0x1234...abcd"
                />
                <Alert className="mt-2 border-orange-900 bg-orange-900/20">
                  <AlertDescription className="text-xs">
                    <strong>Required for predictions to work!</strong> Deploy this contract first using:{" "}
                    <code className="bg-muted px-1 rounded">pdr deploy_pred_submitter_mgr</code>.{" "}
                    See the <a href="/setup" className="text-primary hover:underline">Setup Guide</a> for step-by-step instructions.
                  </AlertDescription>
                </Alert>
              </div>

              <div>
                <Label htmlFor="asset">Market Asset *</Label>
                <Select
                  id="asset"
                  value={config.asset}
                  onChange={(e) => setConfig({ ...config, asset: e.target.value })}
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
                <Label htmlFor="timeframe">Timeframe *</Label>
                <Select
                  id="timeframe"
                  value={config.timeframe}
                  onChange={(e) =>
                    setConfig({ ...config, timeframe: e.target.value as "5m" | "15m" | "1h" })
                  }
                >
                  {availableTimeframes.map((tf) => (
                    <option key={tf} value={tf}>
                      {tf === "5m" && "5 minutes"}
                      {tf === "15m" && "15 minutes"}
                      {tf === "1h" && "1 hour"}
                    </option>
                  ))}
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
                  placeholder="*/5 * * * *"
                />
                <p className="text-xs text-muted-foreground mt-1">Format: minute hour day month day-of-week</p>
              </div>

              <div>
                <Label htmlFor="outDir">Output directory *</Label>
                <Input
                  id="outDir"
                  value={config.outDir}
                  onChange={(e) => setConfig({ ...config, outDir: e.target.value })}
                  placeholder="./pdr_out"
                />
              </div>
            </div>
          </FormCard>

          <NetworkInfo network={config.network} />
        </div>

        <div className="space-y-6">
          <ValidationAlert valid={validationResult.valid} errors={validationResult.errors} />

          <YamlPreview yaml={yaml} title="ppss.yaml Preview" />

          <FormCard title="Downloads">
            <div className="space-y-3">
              <Button
                onClick={handleDownloadYaml}
                className="w-full"
                disabled={!validationResult.valid}
              >
                <Download className="mr-2 h-4 w-4" />
                Download ppss.yaml
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
            <a href="/predictoor/run">
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

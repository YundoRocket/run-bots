import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Activity, BarChart3, TrendingUp } from "lucide-react";

export default function MonitorPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Activity className="h-10 w-10 text-primary" />
          Monitor & Analyze Performance
        </h1>
        <p className="text-muted-foreground">
          Track your bot's accuracy, profits, and costs to optimize strategy
        </p>
      </div>

      <Alert className="mb-8 border-blue-900 bg-blue-900/20">
        <AlertTitle>📊 Why Monitor?</AlertTitle>
        <AlertDescription>
          Regular monitoring helps you identify issues early, optimize parameters, and maximize
          profits. A bot that was profitable last week might not be this week due to market changes.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Dashboard Visualization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The pdr-backend provides a real-time dashboard to visualize your bot's performance
              using live blockchain data.
            </p>

            <div>
              <h3 className="font-semibold mb-2">Setup the dashboard</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`cd pdr-backend
source venv/bin/activate

# Start the dashboard
pdr sim_plots`}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Opens at <code className="bg-muted px-1 rounded">http://127.0.0.1:8050</code>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">View specific run</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# List available runs
ls sim_state/

# View specific run
pdr sim_plots --run-id <unique_id>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Multiple dashboards</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# Run on different port
pdr sim_plots --port 8051`}</code>
              </pre>
            </div>

            <Alert className="mt-4 border-green-900 bg-green-900/20">
              <AlertDescription>
                For detailed dashboard setup, see the{" "}
                <a
                  href="https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/dashboard.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  official guide <ExternalLink className="h-3 w-3" />
                </a>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Key Metrics to Track
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-md">
                  <h3 className="font-semibold mb-2">Accuracy</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Overall prediction accuracy (%)</li>
                    <li>Accuracy by timeframe</li>
                    <li>Accuracy by market pair</li>
                    <li>Trend over time</li>
                  </ul>
                </div>

                <div className="p-4 bg-muted/50 rounded-md">
                  <h3 className="font-semibold mb-2">Profit/Loss</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Total profit in OCEAN</li>
                    <li>Profit after gas fees</li>
                    <li>ROI percentage</li>
                    <li>Daily/weekly breakdown</li>
                  </ul>
                </div>

                <div className="p-4 bg-muted/50 rounded-md">
                  <h3 className="font-semibold mb-2">Costs</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Gas fees (ROSE consumed)</li>
                    <li>Stakes slashed</li>
                    <li>Compute costs</li>
                    <li>Total costs vs revenue</li>
                  </ul>
                </div>

                <div className="p-4 bg-muted/50 rounded-md">
                  <h3 className="font-semibold mb-2">Operations</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Predictions submitted</li>
                    <li>Predictions missed</li>
                    <li>Transaction failures</li>
                    <li>Uptime percentage</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Log Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Real-time logs</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# Docker logs
docker compose logs -f

# Or tail local logs
tail -f logs/out_*.txt`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">What to look for in logs</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>✓ Successful predictions submitted</li>
                <li>✗ Failed transactions (investigate gas or balance)</li>
                <li>⚠️ Warnings about accuracy drops</li>
                <li>💰 Rewards claimed</li>
                <li>📊 Model retraining events</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Configure logging</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Edit <code className="bg-muted px-1 rounded">logging.yaml</code> to adjust log levels:
              </p>
              <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto">
                <code>{`loggers:
  pdr_backend:
    level: INFO  # DEBUG for more detail
    handlers: [console, file]`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Predictoor Subgraph Queries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Query detailed on-chain data about your predictions and earnings using the Predictoor subgraph.
            </p>

            <div>
              <h3 className="font-semibold mb-2">Subgraph endpoints</h3>
              <div className="space-y-2">
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-xs text-muted-foreground mb-1">Testnet:</p>
                  <code className="text-xs break-all">
                    https://v4.subgraph.sapphire-testnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph
                  </code>
                </div>
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-xs text-muted-foreground mb-1">Mainnet:</p>
                  <code className="text-xs break-all">
                    https://v4.subgraph.sapphire-mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Example queries</h3>
              <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto">
                <code>{`# Get your predictions
{
  predictions(where: {user: "YOUR_ADDRESS"}) {
    id
    stake
    payout
    trueval
    timestamp
  }
}`}</code>
              </pre>
            </div>

            <Alert>
              <AlertDescription className="text-sm">
                Use{" "}
                <a
                  href="https://github.com/oceanprotocol/pdr-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  pdr-backend CLI tools <ExternalLink className="h-3 w-3" />
                </a>{" "}
                for easy subgraph queries: <code className="bg-muted px-1 rounded">pdr get_predictions_info</code>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Optimization Based on Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert className="border-orange-900 bg-orange-900/20">
                <AlertTitle>💡 When to Optimize</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Accuracy drops below 52% for multiple days</li>
                    <li>Gas costs exceed 30% of rewards</li>
                    <li>Frequent transaction failures</li>
                    <li>Market conditions change significantly</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold mb-2">Optimization strategies</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Adjust stake amounts based on confidence</li>
                  <li>Filter out low-liquidity markets</li>
                  <li>Retrain model with recent data</li>
                  <li>Change prediction timeframes</li>
                  <li>Optimize gas timing (submit earlier/later)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Use multisim for parameter tuning</h3>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`pdr multisim my_ppss.yaml`}</code>
                </pre>
                <p className="text-sm text-muted-foreground mt-2">
                  Test multiple parameter combinations to find optimal settings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert>
          <AlertTitle>📚 Additional Resources</AlertTitle>
          <AlertDescription>
            <div className="space-y-2 mt-2">
              <a
                href="https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/dashboard.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Dashboard Setup Guide
              </a>
              <a
                href="https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Predictoor Bot Documentation
              </a>
              <a
                href="https://docs.oceanprotocol.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Ocean Protocol Documentation
              </a>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

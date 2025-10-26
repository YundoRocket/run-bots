import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Terminal, CheckCircle2 } from "lucide-react";

export default function SetupPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Installation & Setup</h1>
        <p className="text-muted-foreground">
          Complete setup guide for pdr-backend and Prediction Submitter Manager
        </p>
      </div>

      <Alert className="mb-8 border-yellow-900 bg-yellow-900/20">
        <AlertTitle>⚠️ Prerequisites</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Python 3.12</strong> (earlier versions will fail)</li>
            <li><strong>Ubuntu or MacOS</strong> (Windows not supported)</li>
            <li><strong>Git</strong> installed</li>
            <li><strong>ROSE tokens</strong> for gas fees</li>
          </ul>
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              Step 1: Install pdr-backend Repository
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1.1 Clone the repository</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`git clone https://github.com/oceanprotocol/pdr-backend
cd pdr-backend`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">1.2 Create virtual environment</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">1.3 Install dependencies</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`pip install -r requirements.txt
export PATH=$PATH:.`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">1.4 Get Ocean contract addresses</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`mkdir -p ~/.ocean/ocean-contracts/artifacts/
curl https://raw.githubusercontent.com/oceanprotocol/contracts/main/addresses/address.json -o ~/.ocean/ocean-contracts/artifacts/address.json`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">1.5 MacOS only: Fix dependencies</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# Fix sapphire.py
codesign --force --deep --sign - venv/sapphirepy_bin/sapphirewrapper-arm64.dylib

# Install xgboost dependency
brew install libomp`}</code>
              </pre>
            </div>

            <Alert className="mt-4 border-green-900 bg-green-900/20">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                Installation complete! Verify by running: <code className="bg-muted px-1 rounded">pdr --help</code>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              Step 2: Run Simulation (Highly Recommended)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-blue-900 bg-blue-900/20">
              <AlertTitle>💡 Why Simulate First?</AlertTitle>
              <AlertDescription>
                Simulation lets you backtest your strategy with historical data, saving you from
                costly mistakes on mainnet. You can test different parameters and see potential
                profits/losses before risking real money.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="font-semibold mb-2">2.1 Copy config template</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`cp ppss.yaml my_ppss.yaml`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2.2 Run simulation</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`pdr sim my_ppss.yaml`}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                The simulation will download historical data and run through many epochs, showing
                you predicted accuracy and estimated profits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2.3 Visualize results (optional)</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`# In a separate terminal
pdr sim_plots`}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Opens a dashboard at http://127.0.0.1:8050 with real-time plots.
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-orange-500" />
              Step 3: Deploy Prediction Submitter Manager (Predictoor Only)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-red-900 bg-red-900/20">
              <AlertTitle>🚨 CRITICAL for Predictoor Bots</AlertTitle>
              <AlertDescription>
                This step is <strong>required</strong> for Predictoor bots. Without deploying this
                contract, your bot cannot submit predictions. You only need to do this once per account.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="font-semibold mb-2">3.1 Export your private key</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`export PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HERE`}</code>
              </pre>
              <Alert className="mt-2 border-yellow-900 bg-yellow-900/20">
                <AlertDescription className="text-sm">
                  Make sure you have ROSE tokens in this wallet for gas fees!
                </AlertDescription>
              </Alert>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3.2 Deploy the contract (Testnet)</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`pdr deploy_pred_submitter_mgr my_ppss.yaml sapphire-testnet`}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                This will deploy a smart contract and output its address. <strong>Save this address!</strong>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3.3 Deploy the contract (Mainnet)</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`pdr deploy_pred_submitter_mgr my_ppss.yaml sapphire-mainnet`}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                You'll need a separate deployment for mainnet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3.4 Copy the contract address</h3>
              <div className="p-4 bg-muted/50 rounded-md border-l-4 border-primary">
                <p className="text-sm mb-2">The command will output something like:</p>
                <code className="text-xs">
                  Deployed Prediction Submitter Manager at: <span className="text-primary">0x1234...abcd</span>
                </code>
                <p className="text-sm mt-3 font-semibold text-primary">
                  ⚠️ Copy this address! You'll need it when configuring your bot.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className="border-green-900 bg-green-900/20">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>✓ Setup Complete!</AlertTitle>
          <AlertDescription>
            <p className="mb-2">You're now ready to configure your bot:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Go to <a href="/predictoor/create" className="text-primary hover:underline">Predictoor Bot Configuration</a></li>
              <li>Enter your Prediction Submitter Manager contract address</li>
              <li>Download your ppss.yaml and launch!</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting Installation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-sm">Python version error</h3>
                <p className="text-sm text-muted-foreground">
                  Make sure you're using Python 3.12. Check with: <code className="bg-muted px-1 rounded">python --version</code>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">address.json not found</h3>
                <p className="text-sm text-muted-foreground">
                  Verify the file exists: <code className="bg-muted px-1 rounded">ls ~/.ocean/ocean-contracts/artifacts/address.json</code>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Contract deployment fails</h3>
                <p className="text-sm text-muted-foreground">
                  Check you have enough ROSE for gas. Get testnet ROSE from the{" "}
                  <a
                    href="https://faucet.testnet.oasis.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Oasis faucet <ExternalLink className="inline h-3 w-3" />
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

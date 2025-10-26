import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function PredictoorRunPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">How to Run a Predictoor Bot</h1>
        <p className="text-muted-foreground">
          Step-by-step guide to launch your prediction bot
        </p>
      </div>

      <Alert className="mb-8 border-yellow-900 bg-yellow-900/20">
        <AlertTitle>⚠️ Prerequisites</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>ppss.yaml file downloaded from the creation page</li>
            <li>Ethereum/Ocean private key (starting with 0x...)</li>
            <li>Docker installed (Option A) OR Python 3.11+ (Option B)</li>
            <li>Sufficient funds on the chosen network (testnet/mainnet)</li>
          </ul>
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Option A: Run with Docker (Recommended)</CardTitle>
            <CardDescription>Simplest and most isolated method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Create a working directory</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`mkdir predictoor-run && cd predictoor-run`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Place your ppss.yaml file</h3>
              <p className="text-sm text-muted-foreground">
                Copy the downloaded ppss.yaml file into this folder.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Export your private key</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`export PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HERE`}</code>
              </pre>
              <Alert className="mt-2 border-red-900 bg-red-900/20">
                <AlertDescription className="text-sm">
                  NEVER commit your private key to Git. Do not store it in a file.
                </AlertDescription>
              </Alert>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4a. Run with docker run</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`docker run --rm -it \\
  -e PRIVATE_KEY=\${PRIVATE_KEY} \\
  -v $(pwd):/work \\
  ghcr.io/oceanprotocol/pdr-backend:latest \\
  pdr predictoor /work/ppss.yaml testnet`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4b. OR run with docker-compose</h3>
              <p className="text-sm text-muted-foreground mb-2">
                If you downloaded the docker-compose.yml:
              </p>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`docker compose up -d`}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                View logs: <code className="bg-muted px-1 rounded">docker compose logs -f</code>
              </p>
              <p className="text-sm text-muted-foreground">
                Stop: <code className="bg-muted px-1 rounded">docker compose down</code>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Option B: Run with Python CLI</CardTitle>
            <CardDescription>For developers familiar with Python</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Create a virtual environment</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`python3 -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Install pdr-backend</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`pip install pdr-backend`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Export your private key</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`export PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HERE`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4. Run the bot</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`pdr predictoor ppss.yaml testnet`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Logs & Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="font-semibold mb-1">View logs (Docker)</h3>
              <pre className="bg-muted p-3 rounded-md text-sm">
                <code>{`docker compose logs -f predictoor`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Check outputs</h3>
              <p className="text-sm text-muted-foreground">
                Results are saved in the specified directory (out_dir in ppss.yaml).
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Common errors</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>
                  <strong>PRIVATE_KEY not defined</strong>: Check the variable export
                </li>
                <li>
                  <strong>Insufficient funds</strong>: Fund your wallet on the network
                </li>
                <li>
                  <strong>Cron error</strong>: Check the cron schedule format
                </li>
                <li>
                  <strong>Permission denied (Docker)</strong>: Add your user to docker group
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Update the bot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="font-semibold mb-1">Docker</h3>
              <pre className="bg-muted p-3 rounded-md text-sm">
                <code>{`docker pull ghcr.io/oceanprotocol/pdr-backend:latest
docker compose restart`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Python CLI</h3>
              <pre className="bg-muted p-3 rounded-md text-sm">
                <code>{`pip install --upgrade pdr-backend`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Switch to Mainnet</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="border-orange-900 bg-orange-900/20">
              <AlertTitle>⚠️ Warning</AlertTitle>
              <AlertDescription>
                <p className="mb-2">Before switching to mainnet:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Test your bot thoroughly on testnet</li>
                  <li>Check your funds and gas fees</li>
                  <li>Start with a low stake</li>
                  <li>Monitor performance and adjust</li>
                </ul>
              </AlertDescription>
            </Alert>
            <p className="text-sm text-muted-foreground mt-4">
              To switch to mainnet, recreate your ppss.yaml with network: mainnet, and run with
              <code className="bg-muted px-1 rounded ml-1">mainnet</code> instead of
              <code className="bg-muted px-1 rounded ml-1">testnet</code> in the commands.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

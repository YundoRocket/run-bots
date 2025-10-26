import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, DollarSign, CheckCircle2, Calendar } from "lucide-react";

export default function ClaimPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <DollarSign className="h-10 w-10 text-primary" />
          Claim Your Rewards
        </h1>
        <p className="text-muted-foreground">
          How to claim your earned OCEAN tokens from Data Farming
        </p>
      </div>

      <Alert className="mb-8 border-green-900 bg-green-900/20">
        <AlertTitle>💰 Congratulations!</AlertTitle>
        <AlertDescription>
          If your Predictoor bot has been running successfully on mainnet with good accuracy,
          you're earning OCEAN rewards through Data Farming. Here's how to claim them.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              When Are Rewards Distributed?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-muted/50 rounded-md">
              <h3 className="font-semibold mb-2">Weekly Distribution</h3>
              <p className="text-sm text-muted-foreground">
                Data Farming rewards are calculated and distributed <strong>weekly</strong>. The
                calculation considers:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Your prediction accuracy over the week</li>
                <li>Total stakes submitted</li>
                <li>Market eligibility for DF rewards</li>
                <li>Your share relative to other Predictoors</li>
              </ul>
            </div>

            <Alert className="border-blue-900 bg-blue-900/20">
              <AlertDescription>
                Check the{" "}
                <a
                  href="https://df.oceandao.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Data Farming Dashboard <ExternalLink className="h-3 w-3" />
                </a>{" "}
                for the current reward round schedule and your earnings.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              How to Claim Rewards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Step 1: Check Your Rewards</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Visit the Data Farming dashboard to see your pending and claimable rewards:
              </p>
              <a
                href="https://df.oceandao.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                https://df.oceandao.org/
              </a>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Step 2: Connect Your Wallet</h3>
              <p className="text-sm text-muted-foreground">
                Connect the wallet you used for predictions. Make sure you're on the{" "}
                <strong>Sapphire Mainnet</strong>.
              </p>
              <div className="mt-2 p-3 bg-muted rounded-md text-sm">
                <p className="font-semibold mb-1">Network Details:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Network: Sapphire Mainnet</li>
                  <li>RPC: https://sapphire.oasis.io</li>
                  <li>Chain ID: 0x5afe (23294)</li>
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Step 3: Claim Your OCEAN</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Once rewards are available (usually after the weekly round ends):
              </p>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                <li>Navigate to the "Claim" section on the DF dashboard</li>
                <li>Review your claimable amount</li>
                <li>Click "Claim Rewards"</li>
                <li>Confirm the transaction in your wallet</li>
                <li>Wait for the transaction to confirm</li>
              </ol>
            </div>

            <Alert className="mt-4 border-yellow-900 bg-yellow-900/20">
              <AlertTitle>⚠️ Gas Fees</AlertTitle>
              <AlertDescription>
                Claiming rewards requires a transaction, which costs ROSE for gas. Make sure you have
                enough ROSE in your wallet before claiming. If rewards are small, consider waiting
                to accumulate more before claiming to optimize gas costs.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Using CLI to Check Rewards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You can also use pdr-backend CLI tools to check your prediction performance and estimated rewards.
            </p>

            <div>
              <h3 className="font-semibold mb-2">Get predictions info</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`pdr get_predictions_info my_ppss.yaml sapphire-mainnet`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Get predictoor info</h3>
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                <code>{`pdr get_predictoor_info my_ppss.yaml sapphire-mainnet`}</code>
              </pre>
            </div>

            <p className="text-sm text-muted-foreground">
              These commands will show your accuracy, total stakes, and other metrics that affect rewards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Understanding Your Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-md">
                <h3 className="font-semibold mb-2">Reward Calculation Factors</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li><strong>Accuracy</strong>: Higher accuracy = more rewards</li>
                  <li><strong>Stake Amount</strong>: More stake = more potential rewards (but also more risk)</li>
                  <li><strong>Market Eligibility</strong>: Only certain markets qualify for DF rewards</li>
                  <li><strong>Competition</strong>: Rewards are shared among all Predictoors</li>
                  <li><strong>Consistency</strong>: Regular predictions build reputation score</li>
                </ul>
              </div>

              <Alert className="border-orange-900 bg-orange-900/20">
                <AlertTitle>💡 Maximize Your Rewards</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Focus on accuracy over volume</li>
                    <li>Stake more on high-confidence predictions</li>
                    <li>Target eligible markets (check DF docs)</li>
                    <li>Run consistently to build reputation</li>
                    <li>Monitor and optimize based on performance</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-sm">No rewards showing?</h3>
                <p className="text-sm text-muted-foreground">
                  Check if: (1) You're on mainnet, (2) Markets are DF-eligible, (3) Enough time
                  has passed (rewards are weekly), (4) Your accuracy is above threshold (~52%).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Rewards lower than expected?</h3>
                <p className="text-sm text-muted-foreground">
                  Review your accuracy metrics and compare with other Predictoors. Lower accuracy or
                  high competition can reduce rewards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Can't claim rewards?</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure you have ROSE for gas, you're on the correct network (Sapphire Mainnet),
                  and the claim period is active.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert>
          <AlertTitle>📚 Learn More</AlertTitle>
          <AlertDescription>
            <div className="space-y-2 mt-2">
              <a
                href="https://docs.oceanprotocol.com/data-farming/df-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Data Farming Documentation
              </a>
              <a
                href="https://df.oceandao.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Data Farming Dashboard
              </a>
              <a
                href="https://blog.oceanprotocol.com/tag/data-farming"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Data Farming Blog Posts
              </a>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

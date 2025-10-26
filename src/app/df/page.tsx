import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export default function DataFarmingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Sparkles className="h-10 w-10 text-primary" />
          Data Farming (DF)
        </h1>
        <p className="text-muted-foreground">
          Earn OCEAN rewards for accurate predictions
        </p>
      </div>

      <Alert className="mb-8 border-blue-900 bg-blue-900/20">
        <AlertTitle>💰 What is Data Farming?</AlertTitle>
        <AlertDescription>
          Data Farming is Ocean Protocol&apos;s incentive mechanism that rewards Predictoors for making accurate predictions. The more accurate your predictions, the more OCEAN tokens you earn weekly.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>How Data Farming Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold">1. Run Your Predictoor Bot</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy your bot on mainnet and start making predictions on eligible markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold">2. Submit Predictions</h3>
                  <p className="text-sm text-muted-foreground">
                    Your bot automatically submits predictions to the Data Farming contract. Each prediction is tracked and scored for accuracy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold">3. Earn Rewards</h3>
                  <p className="text-sm text-muted-foreground">
                    Rewards are calculated weekly based on your prediction accuracy and distributed in OCEAN tokens.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold">4. Claim Your OCEAN</h3>
                  <p className="text-sm text-muted-foreground">
                    Check your rewards dashboard weekly and claim your earned OCEAN tokens.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="border-orange-900 bg-orange-900/20">
              <AlertTitle>⚠️ Mainnet Only</AlertTitle>
              <AlertDescription>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Data Farming rewards are only available on <strong>mainnet</strong></li>
                  <li>You must use eligible markets (check Ocean docs for current list)</li>
                  <li>Your wallet must have sufficient ROSE for gas fees</li>
                  <li>Stakes must meet minimum requirements</li>
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Eligible Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Not all markets are eligible for Data Farming rewards. Check the official documentation for the current list of supported markets:
            </p>
            <div className="space-y-2">
              <a
                href="https://docs.oceanprotocol.com/data-farming/df-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Data Farming Introduction
              </a>
              <a
                href="https://df.oceandao.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Data Farming Dashboard
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tracking Your Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Monitor your bot&apos;s performance and rewards:
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-muted rounded-md">
                <strong>Prediction Accuracy:</strong> Track via your bot&apos;s output logs
              </div>
              <div className="p-3 bg-muted rounded-md">
                <strong>Rewards:</strong> View on the Data Farming dashboard
              </div>
              <div className="p-3 bg-muted rounded-md">
                <strong>Rankings:</strong> Compare your performance with other Predictoors
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tips for Maximizing Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li><strong>Focus on accuracy</strong>: Higher accuracy = more rewards</li>
              <li><strong>Choose liquid markets</strong>: More volume means more prediction opportunities</li>
              <li><strong>Monitor gas costs</strong>: Keep enough ROSE to avoid missed predictions</li>
              <li><strong>Run consistently</strong>: Regular predictions build your reputation score</li>
              <li><strong>Diversify markets</strong>: Consider running multiple bots on different pairs</li>
              <li><strong>Stay updated</strong>: Check for new eligible markets and rule changes</li>
            </ul>
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
                href="https://blog.oceanprotocol.com/tag/data-farming"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Data Farming Blog Posts
              </a>
              <a
                href="https://discord.gg/oceanprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Join Ocean Protocol Discord
              </a>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { PREDICTOOR_WORKFLOW, TRADER_WORKFLOW } from "@/lib/workflow";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function WorkflowPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Complete Workflow Guide</h1>
        <p className="text-muted-foreground">
          End-to-end guide from installation to earning rewards
        </p>
      </div>

      <Alert className="mb-8 border-blue-900 bg-blue-900/20">
        <AlertTitle>📚 Why Follow This Workflow?</AlertTitle>
        <AlertDescription>
          This workflow ensures you don't skip critical steps like simulation (saving you from losses)
          or deploying the Prediction Submitter Manager (required for predictions to work). Following
          this order maximizes your chances of success.
        </AlertDescription>
      </Alert>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Predictoor Bot Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <WorkflowSteps steps={PREDICTOOR_WORKFLOW} />
            <div className="mt-6 space-y-3">
              <Link href="/setup">
                <Button className="w-full">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Start with Installation & Setup
                </Button>
              </Link>
              <Link href="/predictoor/create">
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Skip to Bot Configuration
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trader Bot Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <WorkflowSteps steps={TRADER_WORKFLOW} />
            <div className="mt-6 space-y-3">
              <Link href="/setup">
                <Button className="w-full">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Start with Installation
                </Button>
              </Link>
              <Link href="/trader/create">
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Skip to Bot Configuration
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Differences: Predictoor vs Trader</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-primary">Predictoor Bot</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Predicts price movements (up/down)</li>
                <li>Requires Prediction Submitter Manager deployment</li>
                <li>Earns OCEAN through Data Farming rewards</li>
                <li>Stakes OCEAN on predictions</li>
                <li>Accuracy determines rewards/slashing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Trader Bot</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Executes trades based on signals</li>
                <li>No contract deployment needed</li>
                <li>Earns from trading profits</li>
                <li>Uses capital for buying/selling</li>
                <li>Profit depends on trading strategy</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="mt-8 border-orange-900 bg-orange-900/20">
        <AlertTitle>⚠️ Don't Skip Steps!</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Simulation</strong>: Test without risking real money</li>
            <li><strong>Deploy Manager</strong>: Required for Predictoor bots to submit predictions</li>
            <li><strong>Testnet</strong>: Verify everything works before mainnet</li>
            <li><strong>Monitor</strong>: Track performance to optimize strategy</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}

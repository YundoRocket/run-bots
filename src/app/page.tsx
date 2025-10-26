import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, TrendingUp, Shield, FileCode, Sparkles, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium text-primary shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-400 animate-pulse" />
          Complete Workflow <span className="text-muted-foreground">Setup → Run → Monitor → Claim</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Complete Guide to Running Predictoor & Trader Bots
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          From installation to claiming rewards - Everything you need in one place
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/workflow">
            <Button size="lg">
              <Sparkles className="mr-2 h-5 w-5" />
              View Complete Workflow
            </Button>
          </Link>
          <Link href="/predictoor/create">
            <Button size="lg" variant="secondary">
              <Bot className="mr-2 h-5 w-5" />
              Create Predictoor Bot
            </Button>
          </Link>
          <Link href="/trader/create">
            <Button size="lg" variant="outline">
              <TrendingUp className="mr-2 h-5 w-5" />
              Create Trader Bot
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <FileCode className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Validated Configuration</CardTitle>
            <CardDescription>
              Zod-powered validation ensures your YAML files are correct before deployment
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Secure</CardTitle>
            <CardDescription>
              No private keys processed on the web. Everything stays on your machine.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Database className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Market Presets</CardTitle>
            <CardDescription>
              Pre-configured markets and timeframes for quick setup
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mx-auto mb-12">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>What's New in v1.4 - Complete Workflow Coverage</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Complete Workflow Guide</strong>: Step-by-step guide from installation to claiming rewards</li>
              <li><strong>Setup Page</strong>: pdr-backend installation, simulation, and critical contract deployment</li>
              <li><strong>Pred Submitter Manager</strong>: Added required contract address field to config (critical!)</li>
              <li><strong>Monitor Page</strong>: Dashboard setup, log analysis, and optimization strategies</li>
              <li><strong>Claim Rewards</strong>: Complete guide to claiming your OCEAN tokens from Data Farming</li>
              <li><strong>Simplified Navigation</strong>: Covers the entire journey that was previously in GitHub READMEs</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Complete Workflow (8 Steps)</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground flex-1">
              <li><strong>Install</strong>: Set up pdr-backend repository and dependencies</li>
              <li><strong>Simulate</strong>: Test your strategy with historical data (highly recommended)</li>
              <li><strong>Deploy Contract</strong>: Deploy Prediction Submitter Manager (Predictoor only)</li>
              <li><strong>Configure</strong>: Generate your ppss.yaml with our form</li>
              <li><strong>Test on Testnet</strong>: Verify everything works risk-free</li>
              <li><strong>Run on Mainnet</strong>: Launch your production bot</li>
              <li><strong>Monitor</strong>: Track accuracy, profits, and optimize strategy</li>
              <li><strong>Claim Rewards</strong>: Collect your OCEAN tokens weekly</li>
            </ol>
            <div className="mt-4 text-center">
              <Link href="/workflow">
                <Button>
                  View Detailed Workflow Guide
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

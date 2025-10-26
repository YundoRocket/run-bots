import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ROSE_GUIDE } from "@/lib/roseGuide";
import { ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">How it works</h1>
        <p className="text-muted-foreground">
          Understanding the Predictoor Bot Runner workflow
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Architecture & Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│           Predictoor Bot Runner UI                              │
│           (Local Web Interface + Zod Validation)                │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
          ┌──────────────────────────────────────┐
          │  1. Fill form with presets           │
          │     - Market presets (BTC/USDT...)   │
          │     - Real-time Zod validation       │
          └──────────────┬───────────────────────┘
                         │
                         ▼
          ┌──────────────────────────────────────┐
          │  2. Validate & Generate              │
          │     - Zod schema validation          │
          │     - ppss.yaml generation           │
          │     - docker-compose.yml             │
          └──────────────┬───────────────────────┘
                         │
                         ▼
          ┌──────────────────────────────────────┐
          │  3. Download & Export                │
          │     - All files stay local           │
          │     - Network info displayed         │
          └──────────────┬───────────────────────┘
                         │
                         ▼
          ┌──────────────────────────────────────┐
          │  4. Runtime (Local)                  │
          │     export PRIVATE_KEY=0x...         │
          │     + Ensure ROSE for gas            │
          └──────────────┬───────────────────────┘
                         │
         ┌───────────────┴───────────────┐
         │                               │
         ▼                               ▼
┌──────────────────┐          ┌──────────────────┐
│  Docker          │          │  Python CLI      │
│  pdr-backend     │          │  pdr-backend     │
└────────┬─────────┘          └─────────┬────────┘
         │                              │
         └──────────┬───────────────────┘
                    │
                    ▼
      ┌─────────────────────────────┐
      │   Sapphire Network          │
      │   - Testnet / Mainnet       │
      │   - ROSE gas fees           │
      │   - Smart contracts         │
      └─────────────┬───────────────┘
                    │
                    ▼
      ┌─────────────────────────────┐
      │   Data Farming (DF)         │
      │   - Track predictions       │
      │   - Calculate accuracy      │
      │   - Distribute OCEAN        │
      └─────────────────────────────┘`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{ROSE_GUIDE.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">{ROSE_GUIDE.description}</p>

            <div className="space-y-6">
              {ROSE_GUIDE.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{section.content}</p>
                  {section.links && (
                    <div className="space-y-1">
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:underline text-sm"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Alert className="mt-6 border-orange-900 bg-orange-900/20">
              <AlertDescription>{ROSE_GUIDE.alert}</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What's New</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-primary">✓ Zod Validation</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time YAML validation with detailed, user-friendly error messages powered by Zod and zod-validation-error.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">✓ Market Presets</h3>
                <p className="text-sm text-muted-foreground">
                  Quick select from popular trading pairs (BTC/USDT, ETH/USDT, SUI/USDC, etc.) with automatic timeframe filtering.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">✓ Network Information</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed testnet/mainnet configuration display including RPC URLs, chain IDs, and explorer links.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">✓ ROSE Gas Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Complete guide for understanding and obtaining ROSE tokens for Sapphire network gas fees.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">✓ Data Farming Section</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated page explaining how to earn OCEAN rewards through accurate predictions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">✓ Trader Bot Support</h3>
                <p className="text-sm text-muted-foreground">
                  Full support for creating and configuring Trader bots with strategy selection (momentum, mean-reversion, custom).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">✓ Docker Compose Generation</h3>
                <p className="text-sm text-muted-foreground">
                  One-click generation and download of production-ready docker-compose.yml files.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security & Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">🔐 Private Keys</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>NEVER store your private key in YAML files</li>
                  <li>Export it only at runtime: <code className="bg-muted px-1 rounded">export PRIVATE_KEY=0x...</code></li>
                  <li>Use a dedicated wallet with limited funds for bots</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">⛽ ROSE Management</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Always keep sufficient ROSE for gas fees</li>
                  <li>Monitor your ROSE balance regularly</li>
                  <li>Budget ~10-50 ROSE for production depending on frequency</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">🧪 Testing</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>ALWAYS test on testnet first</li>
                  <li>Validate your YAML before deployment</li>
                  <li>Start with low stakes and increase gradually</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li><strong>Next.js 15</strong>: React framework with App Router</li>
              <li><strong>TypeScript</strong>: Static typing for robustness</li>
              <li><strong>Zod</strong>: Schema validation for YAML files</li>
              <li><strong>Tailwind CSS</strong>: Utility-first CSS</li>
              <li><strong>shadcn/ui</strong>: Accessible UI components</li>
              <li><strong>yaml</strong>: JS library for YAML generation</li>
              <li><strong>pdr-backend</strong>: Ocean Protocol CLI (external)</li>
            </ul>
          </CardContent>
        </Card>

        <Alert>
          <AlertTitle>📚 External Resources</AlertTitle>
          <AlertDescription>
            <div className="space-y-2 mt-2">
              <a
                href="https://github.com/oceanprotocol/pdr-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                pdr-backend on GitHub
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
              <a
                href="https://docs.oceanprotocol.com/concepts/sapphire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="h-3 w-3" />
                Sapphire Network Documentation
              </a>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

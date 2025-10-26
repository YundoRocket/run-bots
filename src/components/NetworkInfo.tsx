"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NETWORK_INFO } from "@/lib/roseGuide";
import { ExternalLink } from "lucide-react";

interface NetworkInfoProps {
  network: "testnet" | "mainnet";
}

export function NetworkInfo({ network }: NetworkInfoProps) {
  const info = NETWORK_INFO[network];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Network Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-muted-foreground">Network:</div>
          <div className="font-mono">{info.name}</div>

          <div className="text-muted-foreground">RPC URL:</div>
          <div className="font-mono text-xs break-all">{info.rpc}</div>

          <div className="text-muted-foreground">Chain ID:</div>
          <div className="font-mono">{info.chainId}</div>

          <div className="text-muted-foreground">Currency:</div>
          <div className="font-mono">{info.currency}</div>

          <div className="text-muted-foreground">Explorer:</div>
          <a
            href={info.explorer}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 text-xs"
          >
            View Explorer <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

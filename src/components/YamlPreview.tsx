"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "./CopyButton";

interface YamlPreviewProps {
  yaml: string;
  title?: string;
}

export function YamlPreview({ yaml, title = "YAML Preview" }: YamlPreviewProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CopyButton text={yaml} />
      </CardHeader>
      <CardContent>
        <pre className="rounded-md bg-muted p-4 text-sm overflow-x-auto">
          <code>{yaml}</code>
        </pre>
      </CardContent>
    </Card>
  );
}

"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ValidationAlertProps {
  valid: boolean;
  errors: string[];
}

export function ValidationAlert({ valid, errors }: ValidationAlertProps) {
  if (valid) {
    return (
      <Alert className="border-green-900 bg-green-900/20">
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>✓ Valid Configuration</AlertTitle>
        <AlertDescription>
          Your YAML configuration is valid and ready to use.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="border-red-900 bg-red-900/20">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>⚠ Validation Errors</AlertTitle>
      <AlertDescription>
        <ul className="list-disc list-inside mt-2 space-y-1">
          {errors.map((error, index) => (
            <li key={index} className="text-sm">
              {error}
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}

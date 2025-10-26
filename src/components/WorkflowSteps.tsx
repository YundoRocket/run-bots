"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle, AlertCircle } from "lucide-react";
import type { WorkflowStep } from "@/lib/workflow";

interface WorkflowStepsProps {
  steps: WorkflowStep[];
}

export function WorkflowSteps({ steps }: WorkflowStepsProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <Card
          key={step.id}
          className={`${
            step.status === "current"
              ? "border-primary bg-primary/5"
              : step.status === "completed"
              ? "border-green-700 bg-green-900/10"
              : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                {step.status === "completed" ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : step.status === "current" ? (
                  <AlertCircle className="h-6 w-6 text-primary" />
                ) : (
                  <Circle className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {step.required && (
                  <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-orange-900/20 text-orange-400 border border-orange-900">
                    Required
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

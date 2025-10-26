import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export const PredictoorPPSSSchema = z.object({
  pp: z.object({
    kind: z.literal("predictoor"),
    market: z.object({
      asset: z.string().min(3, "Asset must be at least 3 characters"),
      timeframe: z.enum(["5m", "15m", "1h"], {
        errorMap: () => ({ message: "Timeframe must be 5m, 15m, or 1h" }),
      }),
    }),
  }),
  ss: z.object({
    name: z.string().min(3, "Bot name must be at least 3 characters").max(32, "Bot name cannot exceed 32 characters"),
    strategy: z.object({
      stake_usd: z.number().positive("Stake must be positive"),
      max_gas_usd: z.number().positive("Max gas must be positive"),
    }),
    schedule: z.string().regex(/^(\*|[0-9,\-*/]+)\s+(\*|[0-9,\-*/]+)\s+(\*|[0-9,\-*/]+)\s+(\*|[0-9,\-*/]+)\s+(\*|[0-9,\-*/]+)$/, "Invalid cron format"),
    out_dir: z.string().min(1, "Output directory is required"),
  }),
});

export const TraderPPSSSchema = z.object({
  pp: z.object({
    kind: z.literal("trader"),
    market: z.object({
      pair: z.string().min(3, "Pair must be at least 3 characters"),
    }),
  }),
  ss: z.object({
    name: z.string().min(3, "Bot name must be at least 3 characters").max(32, "Bot name cannot exceed 32 characters"),
    strategy: z.object({
      type: z.enum(["momentum", "mean-reversion", "custom"]),
      stake_usd: z.number().positive("Stake must be positive"),
      max_gas_usd: z.number().positive("Max gas must be positive"),
    }),
    schedule: z.string().regex(/^(\*|[0-9,\-*/]+)\s+(\*|[0-9,\-*/]+)\s+(\*|[0-9,\-*/]+)\s+(\*|[0-9,\-*/]+)\s+(\*|[0-9,\-*/]+)$/, "Invalid cron format"),
    out_dir: z.string().min(1, "Output directory is required"),
  }),
});

export function validatePredictoorPPSS(data: any): { valid: boolean; errors: string[] } {
  try {
    PredictoorPPSSSchema.parse(data);
    return { valid: true, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationError = fromZodError(error);
      return {
        valid: false,
        errors: validationError.details.map((d) => d.message),
      };
    }
    return { valid: false, errors: ["Unknown validation error"] };
  }
}

export function validateTraderPPSS(data: any): { valid: boolean; errors: string[] } {
  try {
    TraderPPSSSchema.parse(data);
    return { valid: true, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationError = fromZodError(error);
      return {
        valid: false,
        errors: validationError.details.map((d) => d.message),
      };
    }
    return { valid: false, errors: ["Unknown validation error"] };
  }
}

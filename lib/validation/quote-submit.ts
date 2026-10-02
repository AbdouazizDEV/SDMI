import { z } from "zod";

import { quoteContactPayloadSchema } from "@/lib/validation/quote-contact";

/** productId = UUID catalogue ou `slug:{slug}` côté client (jamais affiché). */
export const quoteSubmitLineSchema = z.object({
  productId: z.string().trim().min(1).max(120),
  quantity: z.number().positive().max(1_000_000),
  unit: z.enum(["piece", "pair", "set", "meter", "kilogram", "lot"]),
  lineNotes: z.string().max(500).optional(),
});

export const quoteSubmitPayloadSchema = quoteContactPayloadSchema.extend({
  lines: z.array(quoteSubmitLineSchema).max(50).optional(),
});

export type QuoteSubmitPayload = z.infer<typeof quoteSubmitPayloadSchema>;

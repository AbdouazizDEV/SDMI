import { z } from "zod";

import { siteConfig } from "@/lib/site";

export const quoteRequestLineSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().positive().max(1_000_000),
  unit: z.enum(["piece", "pair", "set", "meter", "kilogram", "lot"]),
  lineNotes: z.string().max(500).optional(),
});

export const quoteRequestPayloadSchema = z.object({
  locale: z.enum(siteConfig.locales),
  companyName: z.string().trim().min(2).max(160),
  contactName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional(),
  country: z.string().trim().min(2).max(2).default("SN"),
  message: z.string().trim().max(4000).optional(),
  attachmentStoragePath: z.string().max(500).optional(),
  consentPersonalData: z.literal(true),
  lines: z.array(quoteRequestLineSchema).min(1).max(50),
});

export type QuoteRequestPayload = z.infer<typeof quoteRequestPayloadSchema>;

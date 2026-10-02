import { z } from "zod";

import { siteConfig } from "@/lib/site";

export const quoteContactPayloadSchema = z.object({
  locale: z.enum(siteConfig.locales),
  companyName: z.string().trim().min(2).max(160),
  contactName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional(),
  country: z.string().trim().min(2).max(2).default("SN"),
  productReference: z.string().trim().max(120).optional(),
  message: z.string().trim().max(4000).optional(),
  consentPersonalData: z.literal(true),
});

export type QuoteContactPayload = z.infer<typeof quoteContactPayloadSchema>;

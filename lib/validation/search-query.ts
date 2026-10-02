import { z } from "zod";

import { siteConfig } from "@/lib/site";

export const catalogSearchQuerySchema = z.object({
  q: z
    .string()
    .trim()
    .min(2)
    .max(80)
    .regex(/^[\p{L}\p{N}\s./\-_+]+$/u, "Invalid search characters"),
  locale: z.enum(siteConfig.locales),
});

export type CatalogSearchQuery = z.infer<typeof catalogSearchQuerySchema>;

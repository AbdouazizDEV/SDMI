import type { LocalizedText } from "@/types/localized";

import type { Database, Enums, Tables } from "./database.types";

export type { Database, Enums, Tables };

export type Product = Tables<"products">;
export type ProductFamily = Tables<"product_families">;
export type ProductSubfamily = Tables<"product_subfamilies">;
export type ApplicationSector = Tables<"application_sectors">;
export type Material = Tables<"materials">;
export type ConnectionType = Tables<"connection_types">;
export type Standard = Tables<"standards">;
export type ProductPhoto = Tables<"product_photos">;
export type ProductDocument = Tables<"product_documents">;
export type QuoteRequest = Tables<"quote_requests">;
export type QuoteRequestLine = Tables<"quote_request_lines">;

export type DocumentKind = Enums<"document_kind">;
export type QuoteRequestStatus = Enums<"quote_request_status">;
export type QuoteLineUnit = Enums<"quote_line_unit">;

/** Ligne produit avec libellés typés côté app. */
export type ProductWithLocalizedName = Omit<Product, "name" | "short_description" | "description"> & {
  name: LocalizedText;
  short_description: LocalizedText | null;
  description: LocalizedText | null;
};

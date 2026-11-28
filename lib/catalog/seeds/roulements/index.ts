import type { CatalogRangeSeed } from "@/lib/catalog/range-product";
import { ball_bearings_ranges } from "./ball-bearings-ranges";
import { roller_bearings_ranges } from "./roller-bearings-ranges";
import { bearings_accessories_ranges } from "./bearings-accessories-ranges";
import { engineered_products_ranges } from "./engineered-products-ranges";
import { track_rollers_ranges } from "./track-rollers-ranges";

export const roulementsAllRanges: CatalogRangeSeed[] = [
  ...ball_bearings_ranges,
  ...roller_bearings_ranges,
  ...bearings_accessories_ranges,
  ...engineered_products_ranges,
  ...track_rollers_ranges,
];


const STORAGE_KEY = "sdmi-catalog-search-history";
const MAX_ITEMS = 8;

export function readSearchHistory(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string").slice(0, MAX_ITEMS);
  } catch {
    return [];
  }
}

export function pushSearchHistory(term: string): void {
  if (typeof window === "undefined") return;
  const trimmed = term.trim();
  if (trimmed.length < 2) return;
  const next = [trimmed, ...readSearchHistory().filter((item) => item !== trimmed)].slice(
    0,
    MAX_ITEMS,
  );
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* quota / private mode */
  }
}

export function filterHistory(prefix: string, limit = 5): string[] {
  const q = prefix.trim().toLowerCase();
  if (!q) return readSearchHistory().slice(0, limit);
  return readSearchHistory()
    .filter((item) => item.toLowerCase().includes(q))
    .slice(0, limit);
}

export function getStoragePublicUrl(storagePath: string): string | null {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  if (!baseUrl) {
    return null;
  }
  return `${baseUrl}/storage/v1/object/public/${storagePath}`;
}

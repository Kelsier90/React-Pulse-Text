export function getSlug(text: string): string {
  return text
    .toLowerCase() // Convert the text to lowercase
    .trim() // Remove any leading or trailing spaces
    .replace(/[^a-z0-9\s-]/g, "") // Remove all non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Consolidate multiple hyphens into one
}

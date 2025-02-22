export function copyToClipboard(text: string): Promise<void> {
  if (!navigator.clipboard) {
    return Promise.reject(new Error("Clipboard API not supported"));
  }

  return navigator.clipboard.writeText(text);
}

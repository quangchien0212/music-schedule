export function stripedHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '')
}

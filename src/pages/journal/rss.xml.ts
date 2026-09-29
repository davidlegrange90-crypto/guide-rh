import { getCollection } from 'astro:content';
import site from '../../../data/site.json';
export async function GET() {
  const entries = (await getCollection('journal')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const items = entries.map((e) => `<item><title>${esc(e.data.title)}</title><link>${site.url}/journal</link><guid isPermaLink="false">${e.slug}</guid><pubDate>${e.data.date.toUTCString()}</pubDate><description>${esc(e.body.trim())}</description></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)} — journal des mises à jour</title><link>${site.url}/journal</link><description>Changements apportés aux comparatifs.</description><language>fr-FR</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

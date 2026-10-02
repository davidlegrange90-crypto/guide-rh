import { SITE, rankedProviders, USE_CASES, CRITERIA } from '../lib/data';
import { GLOSSAIRE } from '../lib/glossaire';

export function GET() {
  const base = SITE.url.replace(/\/$/, '');

  const staticPages = [
    '/',
    '/roleplay-ia',
    '/methodologie',
    '/a-propos',
    '/contact',
    '/mentions-legales',
    '/journal',
    '/glossaire',
  ];

  const providerPages = rankedProviders().map((p) => `/roleplay-ia/${p.slug}`);
  const alternativePages = rankedProviders().map((p) => `/roleplay-ia/alternatives/${p.slug}`);
  const useCasePages = USE_CASES.map((u) => `/roleplay-ia/${u.slug}`);
  const criterionPages = CRITERIA.filter((c) => c.page).map((c) => `/roleplay-ia/${c.slug}`);
  const glossaryPages = GLOSSAIRE.map((g) => `/glossaire/${g.slug}`);

  const urls = Array.from(new Set([
    ...staticPages,
    ...providerPages,
    ...alternativePages,
    ...useCasePages,
    ...criterionPages,
    ...glossaryPages,
  ]));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url>
    <loc>${base}${path === '/' ? '/' : path}</loc>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}

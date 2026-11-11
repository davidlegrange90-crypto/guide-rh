import { SITE, COMPARISON_UPDATED, METHODOLOGY_UPDATED, PROVIDER_TEMPLATE_UPDATED, rankedProviders, USE_CASES, CRITERIA } from '../lib/data';
import { USE_CASE_PAGES, USE_CASE_TEMPLATE_UPDATED, CRITERION_PAGES } from '../lib/content-roleplay';
import { GLOSSAIRE, GLOSSARY_UPDATED } from '../lib/glossaire';
import { getCollection } from 'astro:content';

const latestDate = (dates: string[], fallback: string) =>
  [...dates, fallback].sort().at(-1)!;

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export async function GET() {
  const base = SITE.url.replace(/\/$/, '');
  const providers = rankedProviders();
  const journal = await getCollection('journal');
  const journalUpdated = journal.length
    ? journal.map((entry) => entry.data.date.toISOString().slice(0, 10)).sort().at(-1)!
    : '2026-09-29';
  const comparisonUpdated = latestDate(
    providers.flatMap((provider) => provider.changelog.map((change) => change.date)),
    COMPARISON_UPDATED,
  );

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

  const providerPages = providers.map((p) => `/roleplay-ia/${p.slug}`);
  const alternativePages = providers.map((p) => `/roleplay-ia/alternatives/${p.slug}`);
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

  const lastmod = new Map<string, string>([
    ['/', journalUpdated],
    ['/roleplay-ia', comparisonUpdated],
    ['/methodologie', METHODOLOGY_UPDATED],
    ['/journal', journalUpdated],
    ['/glossaire', GLOSSARY_UPDATED],
  ]);

  for (const provider of providers) {
    const providerDate = latestDate(
      provider.changelog.map((change) => change.date),
      PROVIDER_TEMPLATE_UPDATED,
    );
    lastmod.set(`/roleplay-ia/${provider.slug}`, providerDate);

    // Mirror the selection rendered by the alternatives page so its date only
    // changes when the original profile or a displayed alternative changes.
    const all = providers.filter((candidate) => candidate.slug !== provider.slug);
    const shared = all.filter((candidate) => candidate.use_cases.some(
      (useCase) => provider.use_cases.includes(useCase),
    ));
    const alternatives = (shared.length ? shared : all).slice(0, 8);
    const alternativesDate = latestDate(
      [provider, ...alternatives].flatMap((candidate) =>
        candidate.changelog.map((change) => change.date)),
      '2026-10-18',
    );
    lastmod.set(`/roleplay-ia/alternatives/${provider.slug}`, alternativesDate);
  }

  for (const page of USE_CASE_PAGES) {
    lastmod.set(
      `/roleplay-ia/${page.slug}`,
      latestDate(page.updated ? [page.updated] : [], USE_CASE_TEMPLATE_UPDATED),
    );
  }
  for (const page of CRITERION_PAGES) {
    if (page.updated) lastmod.set(`/roleplay-ia/${page.slug}`, page.updated);
  }
  for (const entry of GLOSSAIRE) {
    lastmod.set(`/glossaire/${entry.slug}`, GLOSSARY_UPDATED);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url>
    <loc>${escapeXml(`${base}${path === '/' ? '/' : path}`)}</loc>${lastmod.has(path) ? `
    <lastmod>${lastmod.get(path)}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}

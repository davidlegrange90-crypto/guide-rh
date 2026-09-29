import criteriaFile from '../../data/roleplay-ia/criteria.json';
import providersFile from '../../data/roleplay-ia/providers.json';
import site from '../../data/site.json';

export type Criterion = (typeof criteriaFile.criteria)[number];
export type Provider = (typeof providersFile.providers)[number];

export const SITE = site;
export const CATEGORY = { slug: 'roleplay-ia', label: 'Roleplay IA', updated: providersFile.updated };
export const CRITERIA: Criterion[] = criteriaFile.criteria;
export const SCALE_NOTE: string = criteriaFile.scale;

export const USE_CASES = [
  { slug: 'managers', label: 'Former les managers', term: 'formation management' },
  { slug: 'gestion-des-conflits', label: 'Gestion des conflits', term: 'formation gestion des conflits' },
  { slug: 'feedback', label: 'Feedback difficile', term: 'formation feedback' },
  { slug: 'entretien-annuel', label: 'Entretien annuel', term: 'formation entretien annuel' },
  { slug: 'equipes-commerciales', label: 'Équipes commerciales', term: 'formation commerciale' },
  { slug: 'relation-client', label: 'Relation client', term: 'formation relation client' },
  { slug: 'onboarding', label: 'Onboarding des nouveaux managers', term: 'onboarding managers' },
  { slug: 'recrutement', label: 'Entretiens de recrutement', term: 'formation recruteurs' },
  { slug: 'certification', label: 'Certification des compétences', term: 'certification roleplay IA' },
  { slug: 'ramp-up', label: 'Accélérer le ramp-up', term: 'ramp-up commercial onboarding IA' },
];

/** Weighted score on 100; null when no criterion has been scored. */
export function computeScore(p: Provider): { score: number | null; scored: number; total: number } {
  let num = 0, den = 0, scored = 0;
  for (const c of CRITERIA) {
    const s = (p.scores as any)[c.slug]?.score;
    if (typeof s === 'number') { num += s * c.weight; den += 5 * c.weight; scored++; }
  }
  return { score: den ? Math.round((num / den) * 100) : null, scored, total: CRITERIA.length };
}

export function rankedProviders(): (Provider & { rank: number | null; score: number | null; scored: number })[] {
  const withScores = providersFile.providers.map((p) => ({ ...p, ...computeScore(p) }));
  const scored = withScores.filter((p) => p.score !== null).sort((a, b) => (b.score! - a.score!) || a.name.localeCompare(b.name));
  const unscored = withScores.filter((p) => p.score === null).sort((a, b) => a.name.localeCompare(b.name));
  return [
    ...scored.map((p, i) => ({ ...p, rank: i + 1 })),
    ...unscored.map((p) => ({ ...p, rank: null })),
  ];
}

export const isTested = (p: Provider) => Boolean(p.tested_on);
export const hasPlaceholder = (s: unknown) => typeof s === 'string' && /\[À (COMPLÉTER|VÉRIFIER)/.test(s);

export function providerBySlug(slug: string) {
  return rankedProviders().find((p) => p.slug === slug);
}

export function providersForUseCase(slug: string) {
  return rankedProviders().filter((p) => (p.use_cases as string[]).includes(slug));
}

export function formatDate(iso: string | null | undefined) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

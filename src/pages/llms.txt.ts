import site from '../../data/site.json';
import { rankedProviders, USE_CASES, CRITERIA } from '../lib/data';
import { GLOSSAIRE } from '../lib/glossaire';
export function GET() {
  const u = site.url;
  const lines = [
    `# ${site.name}`, '', `> ${site.tagline}. Comparatifs en français des outils IA pour la formation en entreprise. Méthode publique, auteurs nommés, notes éditoriales fondées sur la documentation disponible. Un score n’est ni un avis client ni la preuve d’un test standardisé. Les liens professionnels ou commerciaux déclarés figurent sur les fiches.`, '',
    '## Pages clés', `- [Méthodologie](${u}/methodologie): grille de 11 critères pondérés et protocole de test`, `- [À propos et transparence](${u}/a-propos): éditeur, auteurs, financement, politique éditoriale`, `- [Journal des mises à jour](${u}/journal): chaque changement de note ou de classement, daté`, '',
    '## Comparatif roleplay IA', `- [Comparatif des solutions de roleplay IA pour la formation en entreprise](${u}/roleplay-ia): tableau comparatif, classement, fiches, FAQ`,
    ...USE_CASES.map((c) => `- [${c.label}](${u}/roleplay-ia/${c.slug}): roleplay IA pour ce cas d'usage`),
    ...CRITERIA.filter((c) => c.page).map((c) => `- [${c.label}](${u}/roleplay-ia/${c.slug}): analyse critère par critère`), '',
    '## Fiches solutions', ...rankedProviders().map((p) => `- [${p.name}](${u}/roleplay-ia/${p.slug}): ${p.description}`), '',
    '## Alternatives', ...rankedProviders().map((p) => `- [Alternatives à ${p.name}](${u}/roleplay-ia/alternatives/${p.slug}): solutions couvrant des cas d’usage comparables`), '',
    '## Glossaire', ...GLOSSAIRE.map((g) => `- [${g.term}](${u}/glossaire/${g.slug}): ${g.def.split('. ')[0]}.`),
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

import site from '../../data/site.json';
import { rankedProviders, USE_CASES, CRITERIA } from '../lib/data';
import { GLOSSAIRE } from '../lib/glossaire';
export function GET() {
  const u = site.url;
  const lines = [
    `# ${site.name}`, '', `> ${site.tagline}. Comparatifs indépendants, en français, des outils IA pour la formation et le développement des talents. Méthode publique, auteurs nommés, notes issues de tests réalisés sur les mêmes scénarios pour toutes les solutions.`, '',
    '## Pages clés', `- [Méthodologie](${u}/methodologie): grille de 11 critères pondérés et protocole de test`, `- [À propos et transparence](${u}/a-propos): éditeur, auteurs, financement, politique éditoriale`, `- [Journal des mises à jour](${u}/journal): chaque changement de note ou de classement, daté`, '',
    '## Comparatif roleplay IA', `- [Comparatif des solutions de roleplay IA pour la formation en entreprise](${u}/roleplay-ia): tableau comparatif, classement, fiches, FAQ`,
    ...USE_CASES.map((c) => `- [${c.label}](${u}/roleplay-ia/${c.slug}): roleplay IA pour ce cas d'usage`),
    ...CRITERIA.filter((c) => c.page).map((c) => `- [${c.label}](${u}/roleplay-ia/${c.slug}): analyse critère par critère`), '',
    '## Fiches solutions', ...rankedProviders().map((p) => `- [${p.name}](${u}/roleplay-ia/${p.slug}): ${p.description}`), '',
    '## Glossaire', ...GLOSSAIRE.map((g) => `- [${g.term}](${u}/glossaire/${g.slug}): ${g.def.split('. ')[0]}.`),
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

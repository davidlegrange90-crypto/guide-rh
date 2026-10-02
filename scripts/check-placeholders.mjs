// Fails the build (exit 1) when site.json still contains placeholders, or when a provider shown as
// tested still has unfilled fields. Run with `npm run check:content`. Use `--strict` to also fail on any
// untested provider (for the day the site claims a full ranking).
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const strict = process.argv.includes('--strict');
const PH = /\[À (COMPLÉTER|VÉRIFIER)/;
const site = JSON.parse(readFileSync('data/site.json', 'utf8'));
const data = JSON.parse(readFileSync('data/roleplay-ia/providers.json', 'utf8'));
const problems = [];
const walk = (obj, path) => {
  if (typeof obj === 'string') { if (PH.test(obj)) problems.push(path); return; }
  if (obj && typeof obj === 'object') for (const [k, v] of Object.entries(obj)) walk(v, `${path}.${k}`);
};
walk(site, 'site.json');
// Public text in templates and FAQ must be complete even for documentary reviews.
function checkSource(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) checkSource(path);
    else if (/\.(astro|ts|md)$/.test(entry.name) && PH.test(readFileSync(path, 'utf8'))) problems.push(path);
  }
}
checkSource('src');
for (const p of data.providers) {
  if (PH.test(p.disclosure)) problems.push(`${p.slug}.disclosure (must state the relationship or "Aucun lien commercial.")`);
  const tested = Boolean(p.tested_on);
  if (tested || strict) {
    walk({ ideal_for: p.ideal_for, strengths: p.strengths, limits: p.limits, test_notes: p.test_notes, scores: p.scores }, p.slug);
    const unscored = Object.entries(p.scores).filter(([, s]) => typeof s.score !== 'number').map(([k]) => k);
    if (unscored.length) problems.push(`${p.slug}: criteria without score: ${unscored.join(', ')}`);
  }
}
if (problems.length) {
  console.error(`\n${problems.length} content problem(s) block publication:\n- ` + problems.join('\n- '));
  process.exit(1);
}
console.log('Content check passed.');

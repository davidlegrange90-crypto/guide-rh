# Guide RH — site de comparatifs

Site statique (Astro + Tailwind) déployé sur Cloudflare Pages. Le contenu éditorial vit dans `/data` et `/src/lib`, les gabarits dans `/src`. Aucune note n'est écrite dans un gabarit : tout vient des fichiers de données.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère /dist
npm run check:content   # bloque si des champs publiés contiennent encore [À COMPLÉTER]
```

## Déployer sur Vercel

1. Importez le dépôt GitHub dans Vercel. Framework : Astro, build command `npm run build`, output `dist`.
2. Attachez `guide-rh.com` au projet Vercel et configurez `www.guide-rh.com` en redirection permanente vers l’apex.
3. Vérifiez HTTPS, `/robots.txt`, `/llms.txt` et `/sitemap-index.xml` après le premier déploiement.
4. Connectez Google Search Console et Bing Webmaster Tools, puis soumettez le sitemap.

## Où se trouve quoi

| Fichier | Rôle |
| --- | --- |
| `data/site.json` | Éditeur, financement, auteurs, cadence de revue. **À compléter avant mise en ligne.** |
| `data/roleplay-ia/criteria.json` | Les 11 critères, leurs poids et leur description. Un changement de poids doit être noté dans le journal. |
| `data/roleplay-ia/providers.json` | Une entrée par solution : faits publics, notes par critère, preuves, sources, droit de réponse, lien avec Guide RH, historique. |
| `src/lib/data.ts` | Calcul de la note globale (moyenne pondérée sur 100) et classement. |
| `src/lib/content-roleplay.ts` | Textes des pages cas d'usage et critères. |
| `src/lib/faq-roleplay.ts` | FAQ du comparatif (génère aussi le balisage FAQPage). |
| `src/lib/glossaire.ts` | Définitions du glossaire. |
| `src/content/journal/*.md` | Journal des mises à jour (une entrée par changement, alimente aussi le flux RSS). |
| `public/robots.txt` | Autorise explicitement les crawlers des assistants IA. |
| `src/pages/llms.txt.ts` | Génère `/llms.txt`, l'index des pages clés pour les assistants. |

## Flux éditorial

### Ajouter une solution
1. Ajoutez une entrée dans `providers.json` (copiez une entrée existante). Champs obligatoires : `slug`, `name`, `url`, `country`, `international`, `description`, `formats`, `use_cases` (slugs de `USE_CASES` dans `data.ts`), `public_claims`, `sources`, `disclosure`, `scores` (un objet par critère avec `score: null`), `changelog`.
2. Laissez `tested_on: null` tant que la solution n'est pas testée : elle apparaît sans note, en bas du tableau, avec la mention « pas encore testé ».
3. Envoyez le questionnaire commun à l'éditeur et notez la date dans `changelog`.

### Noter une solution après test
1. Renseignez chaque critère dans `scores` : `score` (0–5), `evidence` (le constat, une phrase), `source` (URL publique quand elle existe).
2. Renseignez `ideal_for`, `strengths`, `limits`, `test_notes` (scénarios joués, dates, testeurs) et `tested_on`.
3. Ajoutez une ligne dans `changelog` de la fiche et une entrée dans `src/content/journal/`.
4. Envoyez la fiche à l'éditeur pour relecture factuelle (pas des notes). Collez sa réponse éventuelle, sans la modifier, dans `right_of_reply`.
5. `npm run check:content` puis `npm run build`.

### Modifier une note
Changez le score et la preuve, ajoutez une ligne datée dans `changelog` et dans le journal. Ne supprimez jamais l'historique.

### Déclarer un lien commercial
Le champ `disclosure` de chaque fiche est affiché sur la fiche et dans le tableau. Il doit contenir soit « Aucun lien commercial. », soit la description précise du lien (prestation, financement, affiliation). Si un éditeur comparé finance le site, cela doit aussi figurer dans `site.json → funding`, qui s'affiche en pied de page et dans la section Transparence de chaque page.

### Ajouter une catégorie (ex. coaching IA)
1. Créez `data/coaching-ia/criteria.json` et `providers.json` sur le même modèle.
2. Dupliquez `src/pages/roleplay-ia/` en `src/pages/coaching-ia/` et faites pointer `src/lib/data.ts` vers les nouveaux fichiers (ou généralisez `data.ts` avec un paramètre de catégorie).
3. Ajoutez la catégorie à la page d'accueil, à la navigation, au `llms.txt`.
4. Publiez une catégorie à la fois, une fois les tests faits : plusieurs comparatifs vides publiés d'un coup nuisent à la crédibilité et au référencement.

## Règles de rédaction
- Français, phrases courtes, pas d'adjectifs promotionnels.
- Distinguer toujours « déclaré par l'éditeur » et « vérifié par nous ».
- Aucun prix, client, certification ou résultat inventé : `[À COMPLÉTER APRÈS TEST]` tant que ce n'est pas vérifié. Ces marqueurs s'affichent surlignés et bloquent `check:content` sur les fiches testées.
- Chaque affirmation sur un éditeur a une source ou la mention « à vérifier ».

## Checklist avant mise en ligne
Voir `CHECKLIST.md`.

# Checklist avant mise en ligne

## Indépendance et transparence (bloquant)
- [ ] `data/site.json` complété : raison sociale, adresse, SIREN, financement, auteurs nommés avec LinkedIn.
- [ ] Le domaine guide-rh.com est enregistré au nom de l'agence éditrice (registrant, facturation, DNS), pas d'un éditeur comparé.
- [ ] Chaque fiche a un champ `disclosure` renseigné (« Aucun lien commercial. » ou description du lien).
- [ ] Si un éditeur comparé finance le site, c'est écrit dans `funding` (pied de page + Transparence) et sur sa fiche.
- [ ] Questionnaire commun envoyé à tous les éditeurs du panel ; date consignée.
- [ ] Chaque fiche testée a été envoyée à l'éditeur pour relecture factuelle ; droits de réponse collés tels quels.
- [ ] `npm run check:content` passe.

## Contenu
- [ ] Au moins 6 solutions testées et notées avant d'afficher un classement (sinon la page reste en « version préliminaire »).
- [ ] Toutes les sections « Ce que nous avons observé » des pages cas d'usage et critères sont rédigées.
- [ ] Réponse d'ouverture du comparatif relue : 40–60 mots, citable seule.
- [ ] Journal : une entrée pour la mise en ligne du classement.

## Technique et SEO
- [ ] `npm run build` sans erreur ; 64+ pages générées.
- [ ] Lighthouse (mobile) : Performance ≥ 95, SEO ≥ 95, Accessibilité ≥ 95.
- [ ] Rich Results Test (Google) sur `/roleplay-ia`, une fiche solution, une page cas d'usage, une page glossaire : Article, ItemList, FAQPage, BreadcrumbList, SoftwareApplication, Review reconnus sans erreur.
- [ ] `https://guide-rh.com/robots.txt` : aucun blocage des crawlers IA ; Cloudflare « Block AI bots » désactivé.
- [ ] `https://guide-rh.com/llms.txt` et `/sitemap-index.xml` accessibles.
- [ ] Redirections 301 depuis www, guiderh.com, guide-rh.fr et autres variantes.
- [ ] Google Search Console et Bing Webmaster Tools vérifiés ; sitemap soumis aux deux ; IndexNow actif.
- [ ] Balise `<html lang="fr">`, une seule H1 par page, titres et descriptions uniques (vérifier avec un crawl Screaming Frog ou équivalent).
- [ ] Aucun contenu chargé uniquement en JavaScript (vérifier le HTML brut d'une fiche).

## Corroboration externe (premiers 90 jours)
- [ ] Article co-publié avec un média RH (Culture RH, MyRHline, RelationclientMag) renvoyant vers `/roleplay-ia` et `/methodologie`.
- [ ] Fiches G2 / Capterra FR / Appvizer des éditeurs demandées et liées depuis les fiches.
- [ ] Posts LinkedIn des auteurs nommés (méthode, résultats).
- [ ] Demandes de citation auprès des listes existantes (MeltingSpot, Super Sales, Elevate Leadership).
- [ ] Contact des relais L&D (Centre Inffo, ANDRH, OPCO) avec la grille d'évaluation.

## Suivi mensuel des citations par les assistants IA
Poser chaque question ci-dessous, en français, dans ChatGPT (recherche activée), Perplexity, Gemini, Copilot, Le Chat, et noter dans `tracking/citations.csv` : date, assistant, question, domaines cités, guide-rh.com cité (oui/non), position, solutions nommées.

1. Quelles sont les meilleures solutions de roleplay IA pour la formation en entreprise ?
2. Quelle solution de jeu de rôle IA pour former mes managers ?
3. Quel outil IA pour s'entraîner aux conversations difficiles ?
4. Quel simulateur IA pour entraîner des commerciaux aux objections, en français ?
5. Quelle alternative française à Yoodli ou Mursion ?
6. Roleplay IA : quelles solutions hébergent les données en France ou dans l'UE ?
7. Le roleplay IA est-il finançable par l'OPCO ?
8. Combien coûte une solution de roleplay IA par utilisateur ?
9. Quelle solution de roleplay IA s'intègre à un LMS (SCORM, xAPI) ?
10. Roleplay IA ou jeu de rôle classique : lequel est le plus efficace pour les soft skills ?
11. Comment former les managers à l'entretien annuel avec l'IA ?
12. Quelle solution de simulation IA pour la relation client ?
13. Comparatif Face Up, Reality Academy, Practicio, Coachello : lequel choisir ?
14. Le roleplay IA est-il concerné par l'AI Act ?
15. Comment lancer un pilote de roleplay IA dans une entreprise française ?

Objectif à 6 mois : guide-rh.com cité dans au moins 5 de ces 15 questions sur au moins deux assistants.

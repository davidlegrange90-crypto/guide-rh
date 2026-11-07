---
title: "Sitemap : une URL canonique et une redirection de compatibilité"
date: 2026-11-07
summary: "L’ancienne URL de contrôle du sitemap redirige désormais vers le sitemap XML unique déclaré aux moteurs."
pages:
  - /sitemap.xml
---

Le fichier `robots.txt` et les pages du site désignent déjà `/sitemap.xml` comme sitemap canonique. En revanche, les consignes de déploiement historiques demandaient encore de contrôler `/sitemap-index.xml`, une URL qui renvoyait une erreur 404 en production.

Guide RH compte 64 URL dans un sitemap XML unique, bien en dessous de la limite de 50 000 URL indiquée par Google. Un index de sitemaps n’est utile que pour regrouper plusieurs fichiers. Afin de ne pas publier deux fichiers concurrents ni de laisser une ancienne URL en erreur, `/sitemap-index.xml` redirige maintenant de façon permanente (HTTP 301) vers `/sitemap.xml`.

Cette correction améliore la cohérence des signaux de crawl et des contrôles d’exploitation. Elle ne garantit ni exploration, ni indexation, ni classement. Aucun contenu éditorial, score, avis ou résultat produit n’a été modifié.

Sources techniques :

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps/
- https://vercel.com/docs/project-configuration/vercel-json

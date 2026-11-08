---
title: "Sitemap : dates de modification éditoriales"
date: 2026-11-08
summary: "Le sitemap indique désormais la dernière modification significative des pages lorsque cette date peut être établie depuis le contenu."
pages:
  - /sitemap.xml
  - /glossaire
---

Le sitemap XML publie désormais une balise `lastmod` pour les 61 pages dont la date de modification peut être établie à partir du journal, de l’historique des fournisseurs ou de la date éditoriale propre à la page. Les pages administratives sans date fiable restent volontairement sans `lastmod`.

Les dates ne sont pas recalculées à chaque build. Elles changent uniquement lorsque le contenu correspondant évolue de façon significative. Les pages d’alternatives tiennent compte du fournisseur comparé et des alternatives réellement affichées ; les guides de cas d’usage et de critères utilisent leur propre date éditoriale.

La date structurée des définitions du glossaire a aussi été dissociée des mises à jour des fournisseurs. Une modification de fiche ne fera donc plus croire que toutes les définitions ont été révisées.

Google indique utiliser `lastmod` lorsqu’il reste exact et vérifiable, tout en recommandant de l’omettre lorsqu’une date fiable n’est pas disponible. Ce signal peut aider à planifier l’exploration ; il ne garantit ni crawl, ni indexation, ni classement.

Sources techniques :

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- https://www.sitemaps.org/protocol.html

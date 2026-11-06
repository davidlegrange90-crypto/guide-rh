---
title: "Comparatif : date de mise à jour et couverture des preuves"
date: 2026-11-06
summary: "La date du comparatif principal est désormais calculée depuis l’historique réel des fiches, et la couverture des sources est affichée explicitement."
pages:
  - /roleplay-ia
  - /methodologie
---

Le comparatif principal affichait encore une date fixée au 30 octobre 2026 alors que plusieurs fiches avaient été actualisées depuis. Sa date visible et la propriété structurée `dateModified` sont désormais calculées depuis la dernière entrée de l’historique des quatorze fournisseurs, avec la révision propre au comparatif comme date minimale. Une future mise à jour de fiche actualisera donc automatiquement le comparatif sans utiliser la date du build.

La section « En bref » indique aussi le nombre de critères qui renvoient vers une source publique. Au 6 novembre 2026, les 154 critères notés du panel disposent d’un lien source. Cette couverture ne signifie pas que Guide RH a testé les produits ni validé les déclarations des éditeurs ; cette limite est affichée à côté de l’indicateur.

Google recommande de fournir `dateModified` pour mieux décrire la date réelle d’une page de type Article et de montrer une date visible cohérente. La modification porte uniquement sur la fraîcheur éditoriale et sa transparence. Aucune note, pondération, fiche fournisseur, position du classement ou déclaration commerciale n’a été modifiée.

Source technique :

- https://developers.google.com/search/docs/appearance/structured-data/article

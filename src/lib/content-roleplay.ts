/** Editorial content for use-case and criterion pages. HTML allowed in body. */

export type Section = { h: string; body: string };
export type UseCasePage = { slug: string; title: string; description: string; answer: string; updated?: string; sections: Section[]; faq: { q: string; a: string }[] };

export const USE_CASE_PAGES: UseCasePage[] = [
  {
    slug: 'managers',
    title: 'Roleplay IA pour former les managers : quelle solution choisir ?',
    description: 'Comment le roleplay IA complète une formation management : entretiens difficiles, recadrage, délégation. Solutions comparées, protocole de test et points de vigilance.',
    answer: "Le roleplay IA permet à un manager de répéter un entretien de recadrage, une annonce difficile ou un point de délégation face à un collaborateur simulé, avant de le vivre en réel. Pour ce cas d'usage, les critères qui pèsent le plus sont la qualité du feedback comportemental, la personnalisation des scénarios aux situations de l'entreprise et la possibilité d'associer un coach humain. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.",
    sections: [
      { h: 'Pourquoi les formations management ont besoin de pratique', body: "Une formation management transmet des cadres (feedback, écoute, gestion des émotions) que les managers savent réciter mais peinent à appliquer sous pression. La pratique répétée est ce qui fait passer du savoir au réflexe. Les jeux de rôle en salle offrent une ou deux répétitions ; le roleplay IA en offre autant que nécessaire, en privé." },
      { h: 'Scénarios types pour les managers', body: "<ul><li>Recadrer un collaborateur sur un comportement, sans le braquer.</li><li>Annoncer une décision impopulaire (réorganisation, refus d'augmentation).</li><li>Déléguer un dossier à un collaborateur réticent.</li><li>Mener un entretien de retour après un arrêt long.</li><li>Réagir à un désaccord frontal en réunion d'équipe.</li></ul><p>Nos tests utilisent le scénario « recadrage d'un retard récurrent » pour toutes les solutions : il mobilise écoute, fermeté et recherche de solution.</p>" },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
      { h: "Points de vigilance", body: "<ul><li>Les scores d'un manager ne doivent pas remonter à sa hiérarchie sans son accord : sinon l'outil devient un dispositif d'évaluation, avec les obligations qui vont avec (information du CSE, <a href=\"/roleplay-ia/ai-act\">AI Act</a>).</li><li>Un personnage IA trop conciliant ne prépare à rien ; vérifiez qu'il résiste, s'énerve ou se ferme de façon crédible.</li><li>Prévoyez un temps de débrief humain (pairs, coach, formateur) pour les situations complexes.</li></ul>" },
    ],
    faq: [
      { q: 'Le roleplay IA remplace-t-il la formation management ?', a: "Non. Il remplace la partie « exercice » que les formations n'ont jamais eu le temps de faire correctement. Les cadres, les échanges entre pairs et le regard d'un formateur restent nécessaires." },
      { q: 'Combien de sessions faut-il pour progresser ?', a: "Les éditeurs observent une progression sensible entre la première et la troisième session sur un même scénario. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés." },
    ],
  },
  {
    slug: 'gestion-des-conflits',
    title: "Formation gestion des conflits : s'entraîner avec le roleplay IA",
    description: "Le roleplay IA appliqué à la gestion des conflits en entreprise : désaccords d'équipe, tensions avec un collaborateur, médiation. Solutions comparées et scénarios de test.",
    answer: "Une formation gestion des conflits apprend à nommer le désaccord, écouter la position de l'autre et chercher une issue acceptable. Le roleplay IA permet de s'y entraîner face à un interlocuteur qui s'agace, se ferme ou attaque, sans risque pour la relation réelle. Les solutions les plus adaptées proposent des personnages à intensité émotionnelle réglable et un feedback sur la désescalade. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.",
    sections: [
      { h: 'Ce qu\'un bon scénario de conflit doit contenir', body: "<ul><li>Un enjeu concret (répartition de la charge, décision contestée, comportement blessant).</li><li>Un personnage qui réagit à ce que dit l'apprenant, et non un script linéaire.</li><li>Une montée en tension possible si l'apprenant s'y prend mal.</li><li>Un feedback qui distingue le fond (la solution trouvée) et la forme (le ton, l'écoute, les mots qui ont apaisé ou envenimé).</li></ul>" },
      { h: 'Notre scénario de test', body: "« Deux membres de votre équipe se reprochent mutuellement un retard de livraison. Vous recevez l'un d'eux, convaincu d'avoir raison. » Nous jouons la même séquence sur chaque solution et notons la crédibilité des réactions, la latence, la qualité du français et le contenu du feedback." },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
    faq: [
      { q: "Le roleplay IA convient-il aux conflits graves (harcèlement, discrimination) ?", a: "Non. Ces situations relèvent de procédures et d'acteurs spécialisés (RH, référents, médecine du travail). Le roleplay IA sert aux tensions du quotidien managérial." },
    ],
  },
  {
    slug: 'feedback',
    title: "S'entraîner au feedback difficile avec le roleplay IA",
    description: 'Donner un feedback négatif sans démotiver : comment le roleplay IA aide les managers à pratiquer, et quelles solutions le font bien.',
    answer: "Donner un feedback difficile est la compétence managériale la plus demandée en formation et la moins pratiquée. Le roleplay IA permet de répéter la formulation (faits, impact, demande), d'encaisser la réaction du collaborateur simulé et de recevoir un retour immédiat sur la clarté et le ton. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.",
    sections: [
      { h: 'Les modèles de feedback que les outils évaluent', body: "La plupart des solutions s'appuient sur des grilles classiques (faits observables, impact, demande de changement, écoute de la réponse). Vérifiez que la grille est explicite et adaptable à votre culture managériale, et qu'elle ne se réduit pas à un score global." },
      { h: 'Notre scénario de test', body: "« Un collaborateur senior a présenté au client un livrable comportant des erreurs que vous aviez signalées. Vous le recevez le lendemain. »" },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
    faq: [
      { q: 'Le roleplay IA aide-t-il aussi à recevoir un feedback ?', a: "Certaines solutions proposent l'inverse : le personnage IA donne un feedback au collaborateur qui s'entraîne à le recevoir. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés." },
    ],
  },
  {
    slug: 'entretien-annuel',
    title: "Préparer les managers à l'entretien annuel avec le roleplay IA",
    description: "Entretiens annuels et professionnels : s'entraîner à fixer des objectifs, évaluer et gérer les désaccords sur la notation grâce au roleplay IA.",
    answer: "L'entretien annuel est le moment où un manager doit à la fois évaluer, écouter et projeter. Le roleplay IA permet de s'entraîner aux passages délicats : annoncer une évaluation en dessous des attentes, répondre à une demande d'augmentation, refuser une mobilité. Il ne remplace pas la préparation du fond (objectifs, faits), mais la partie conversationnelle. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.",
    sections: [
      { h: 'Ce que le roleplay IA prépare, et ce qu\'il ne prépare pas', body: "Il prépare la conduite de l'échange. Il ne prépare ni la collecte des faits de l'année ni la cohérence des évaluations au sein de l'équipe, qui relèvent du processus RH. Les meilleures solutions permettent d'injecter le contexte réel (poste, objectifs, historique) dans le scénario." },
      { h: 'Notre scénario de test', body: "« Une collaboratrice attend une promotion que vous ne pouvez pas lui accorder cette année. Elle ouvre l'entretien en le disant. »" },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
    faq: [
      { q: "Peut-on utiliser le roleplay IA pour l'entretien professionnel obligatoire ?", a: "Oui pour s'entraîner à le mener ; le contenu réglementaire (parcours, formation, évolution) reste à préparer par ailleurs." },
    ],
  },
  {
    slug: 'equipes-commerciales',
    title: 'Roleplay IA pour la formation commerciale : objections, découverte, closing',
    description: "Formation commerciale et roleplay IA : simulateurs d'appels, traitement des objections, pitch. Solutions françaises et internationales comparées.",
    answer: "La vente est le cas d'usage le plus mature du roleplay IA : appels de prospection, découverte, traitement des objections, pitch. Les simulateurs vocaux permettent d'enchaîner des dizaines d'appels avec des prospects simulés et de recevoir un scoring détaillé. Pour une équipe française, le critère décisif est la qualité du français à l'oral et la personnalisation des personnages à vos personas clients. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.",
    sections: [
      { h: 'Scénarios types', body: "<ul><li>Appel à froid avec un décideur pressé.</li><li>Découverte des besoins d'un prospect qui en dit peu.</li><li>Objections prix, concurrent, « pas le moment ».</li><li>Négociation de fin de cycle.</li></ul>" },
      { h: 'Notre scénario de test', body: "« Vous appelez un DRH d'une ETI qui a téléchargé un livre blanc il y a trois semaines. Il décroche, agacé. » Même scénario, même persona, sur chaque solution vocale." },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
    faq: [
      { q: 'Faut-il un simulateur vocal ou un roleplay écrit pour les commerciaux ?', a: "Pour la prospection téléphonique et la visio, le vocal est indispensable. Pour la préparation d'un rendez-vous ou d'un e-mail de relance, l'écrit suffit et coûte moins cher." },
    ],
  },
  {
    slug: 'relation-client',
    title: 'Former les conseillers relation client avec le roleplay IA',
    description: "Roleplay IA pour les centres de contact et la relation client : clients mécontents, réclamations, rétention. Solutions comparées.",
    answer: "Dans la relation client, le roleplay IA sert à entraîner les conseillers aux appels difficiles (client mécontent, réclamation, menace de résiliation) et à homogénéiser les pratiques d'une équipe qui tourne vite. Les critères qui comptent : le volume de sessions possible par conseiller, l'intégration au parcours d'onboarding et la conformité des scripts au cadre réglementaire du secteur. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.",
    sections: [
      { h: 'Notre scénario de test', body: "« Un client appelle pour la troisième fois au sujet d'un prélèvement contesté. Il menace de résilier et de publier un avis. »" },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
    faq: [
      { q: 'Le roleplay IA peut-il évaluer les conseillers en production ?', a: "Ce n'est pas son rôle, et l'usage des scores à des fins d'évaluation individuelle change le cadre juridique (information du CSE, AI Act). Il sert à l'entraînement." },
    ],
  },
  {
    slug: 'onboarding',
    title: "Roleplay IA pour l'onboarding des nouveaux managers",
    description: "Intégrer le roleplay IA dans un parcours d'onboarding manager : premières conversations, prise de poste, premiers 90 jours.",
    answer: "Un nouveau manager fait face en quelques semaines à des conversations qu'il n'a jamais menées : premier point individuel, première remarque à faire, première demande refusée. Le roleplay IA intégré au parcours d'onboarding permet de les répéter avant de les vivre. Le critère décisif est l'intégration au LMS ou au parcours existant, pour que l'entraînement arrive au bon moment. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.",
    sections: [
      { h: 'Où placer le roleplay IA dans les 90 premiers jours', body: "<ul><li>Semaine 1 : premier entretien individuel avec chaque membre de l'équipe.</li><li>Semaine 3 : première remarque sur un comportement.</li><li>Mois 2 : refuser une demande (congés, télétravail, budget).</li><li>Mois 3 : premier point d'étape avec sa propre hiérarchie.</li></ul>" },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
    faq: [],
  },
  {
    slug: 'recrutement',
    title: "Former les recruteurs et managers à l'entretien de recrutement avec le roleplay IA",
    description: "Roleplay IA pour l'entretien de recrutement côté recruteur : questions structurées, non-discrimination, évaluation des réponses.",
    answer: "Côté recruteur, le roleplay IA sert à s'entraîner à mener un entretien structuré : poser les mêmes questions à tous, creuser une réponse vague, éviter les questions discriminatoires, conclure proprement. Il s'adresse aux managers qui recrutent occasionnellement autant qu'aux recruteurs. À ne pas confondre avec les simulateurs d'entretien destinés aux candidats, très présents sur le web. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.",
    sections: [
      { h: 'Notre scénario de test', body: "« Vous recevez un candidat dont le CV présente un trou de deux ans. Vous devez l'aborder sans question interdite et évaluer une compétence clé par une question comportementale. »" },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
    faq: [
      { q: "Le roleplay IA peut-il servir aux candidats ?", a: "Oui, des simulateurs d'entretien d'embauche existent pour les candidats (France Travail, APEC, éditeurs privés). Cette page traite de la formation des recruteurs, pas des candidats." },
    ],
  },
  {
    slug: 'certification',
    updated: '2026-10-03',
    title: 'Certification des compétences avec le roleplay IA : comment construire un programme fiable',
    description: 'Utiliser le roleplay IA pour certifier des compétences commerciales ou managériales : seuils de réussite, rubriques, répétition, analytics et points de vigilance.',
    answer: "Le roleplay IA peut transformer une certification de compétences en épreuve pratique : l'apprenant mène une conversation simulée, reçoit un score selon une grille explicite et peut recommencer avant l'évaluation finale. Pour être crédible, le programme doit séparer entraînement et certification, utiliser des critères observables, fixer un seuil de réussite à l'avance et conserver une supervision humaine sur les décisions importantes.",
    sections: [
      { h: 'Ce qu\'une certification par roleplay IA doit mesurer', body: "<ul><li>Des comportements observables : découverte, écoute, structure, traitement des objections, formulation du feedback.</li><li>Une grille identique pour tous les participants.</li><li>Un seuil de réussite défini avant le lancement.</li><li>Une distinction claire entre sessions d'entraînement et tentative de certification.</li></ul>" },
      { h: 'Pourquoi le roleplay IA est adapté à la certification à grande échelle', body: "L'objectif est de proposer des scénarios comparables et une même grille à tous les participants. Une grille commune ne garantit toutefois pas que les scores IA soient reproductibles ou équivalents entre langues. La pratique autonome peut limiter le temps de correction manuelle ; ce gain doit être vérifié pendant le pilote. Il faut néanmoins auditer régulièrement les critères, les scénarios et les écarts éventuels entre populations." },
      { h: 'Solutions documentant cet usage', body: "Coachello documente des programmes de certification par roleplay IA. Yoodli publie des cas de certification de pitch à grande échelle, notamment chez Google Cloud. Second Nature présente également la certification commerciale comme un cas d'usage de sa plateforme. Vérifiez pour chaque projet la configuration des seuils, la gouvernance des résultats et la possibilité d'un contrôle humain." },
      { h: 'Exemple de grille à calibrer avant le pilote', body: "<p>Exemple proposé par Guide RH pour un entretien de découverte commerciale. Il ne décrit pas un test réalisé ni un seuil universel de certification.</p><table><caption>Quatre comportements observables pour un pilote</caption><thead><tr><th scope=\"col\">Critère</th><th scope=\"col\">Preuve attendue dans la conversation</th><th scope=\"col\">Point à contrôler</th></tr></thead><tbody><tr><th scope=\"row\">Découverte</th><td>Questionner le besoin, son contexte et ses conséquences.</td><td>Le feedback cite-t-il les questions réellement posées ?</td></tr><tr><th scope=\"row\">Écoute</th><td>Reformuler le besoin et faire confirmer la compréhension.</td><td>La grille distingue-t-elle reformulation et simple répétition ?</td></tr><tr><th scope=\"row\">Objection</th><td>Clarifier l'objection avant de répondre avec un élément pertinent.</td><td>Une réponse hors sujet peut-elle obtenir une bonne note ?</td></tr><tr><th scope=\"row\">Prochaine étape</th><td>Convenir d'une action, d'un responsable et d'une échéance.</td><td>Le score repose-t-il sur des actions explicites ?</td></tr></tbody></table><p>Définissez des niveaux ancrés dans des exemples : absent, partiel, conforme au niveau attendu. Faites noter un même échantillon par les évaluateurs humains et l'IA, examinez les désaccords, puis fixez le seuil et la règle de révision avant le lancement.</p>" },
      { h: 'Ce que demander à chaque éditeur en démonstration', body: "<ul><li>Créer le même scénario à partir de votre brief, avec une <a href=\"/roleplay-ia/voix-ou-texte\">version voix et une version texte</a> si ces formats sont nécessaires.</li><li>Afficher les extraits qui justifient chaque score, puis tester une réponse volontairement incomplète.</li><li>Comparer plusieurs évaluations d'une même transcription et expliquer les variations.</li><li>Montrer la séparation entre entraînement et épreuve finale, les règles de nouvelle tentative et la validation humaine.</li><li>Exporter la version de la grille, le scénario, la date, les scores détaillés et le statut final vers votre <a href=\"/roleplay-ia/integration-lms\">LMS</a>.</li><li>Préciser qui accède aux résultats et comment les données sont conservées : voir les questions <a href=\"/roleplay-ia/rgpd-hebergement\">RGPD et hébergement</a>.</li></ul><p>Une certification interne de compétences ne constitue pas à elle seule une certification professionnelle reconnue. Définissez précisément la portée du dispositif et communiquez-la aux participants.</p>" },
      { h: 'Un exemple public et ses limites', body: "<p>Dans son <a href=\"https://yoodli.ai/case-studies/google-cloud-gtm-pitch-certification\" rel=\"noopener\">cas Google Cloud publié le 5 décembre 2024</a>, Yoodli décrit des scénarios spécifiques, des grilles personnalisées et un retour humain par les pairs. Sa <a href=\"https://support.yoodli.ai/en/articles/9628260-customizing-practice\" rel=\"noopener\">documentation Pitch Roleplay</a> décrit aussi un objectif de durée dans la grille. Sources consultées le 3 octobre 2026. Ce sont des informations publiées par l'éditeur, sans validation indépendante de Guide RH ; elles ne démontrent pas la fiabilité de votre propre certification ni la qualité du français.</p>" },
    ],
    faq: [
      { q: 'Peut-on certifier automatiquement un salarié uniquement sur un score IA ?', a: "Pour une certification interne de développement, un score peut servir de repère. Pour une décision ayant un impact RH important, Guide RH recommande une validation humaine et une gouvernance explicite des critères." },
      { q: 'Faut-il autoriser plusieurs tentatives ?', a: "Oui si l'objectif est pédagogique. Une bonne architecture sépare des tentatives d'entraînement illimitées d'une tentative finale ou d'une fenêtre de certification clairement définie." },
    ],
  },
  {
    slug: 'ramp-up',
    updated: '2026-10-03',
    title: 'Accélérer le ramp-up commercial avec le roleplay IA',
    description: "Construire un pilote de roleplay IA pour le ramp-up commercial : onboarding, grille de compétences, mesure du délai de validation et questions aux éditeurs.",
    answer: "Le roleplay IA peut soutenir le ramp-up en remplaçant une partie de l'apprentissage passif par de la pratique répétée : pitch, découverte, objections, négociation et conversations propres au produit. Les nouveaux commerciaux peuvent s'entraîner dès les premières semaines, recevoir un feedback immédiat et recommencer sans monopoliser un manager. Le gain de temps n'est pas automatique : il doit être mesuré sur votre population. Suivez le délai jusqu'au niveau attendu, les répétitions et la progression sur une grille stable, puis comparez avec un parcours de référence comparable.",
    sections: [
      { h: 'Exemple de parcours de ramp-up à adapter', body: "<p>Cette trame de quatre semaines est une proposition pédagogique de Guide RH, pas une durée de montée en compétence démontrée.</p><ol><li><strong>Semaine 1 :</strong> pitch produit et message de valeur.</li><li><strong>Semaine 2 :</strong> découverte et qualification.</li><li><strong>Semaine 3 :</strong> objections fréquentes et concurrence.</li><li><strong>Semaine 4 :</strong> scénario complet avec certification ou validation manager.</li></ol>" },
      { h: 'Les métriques utiles', body: "<ul><li>Temps jusqu'au premier niveau de compétence attendu.</li><li>Nombre de sessions avant réussite.</li><li>Progression par compétence plutôt qu'un score global.</li><li>Taux de complétion du parcours.</li><li>Écart entre nouveaux arrivants et commerciaux expérimentés sur la même rubrique.</li></ul>" },
      { h: 'Solutions documentant cet usage', body: "Coachello positionne le roleplay IA sur l'accélération du ramp-up commercial et managérial. Hyperbound publie spécifiquement sur la réduction du ramp-up des nouvelles recrues commerciales. Second Nature met en avant le ramp-up et l'onboarding commercial, et Yoodli positionne ses roleplays sur le sales onboarding et le GTM enablement. Comparez surtout la qualité du français, la personnalisation à vos contenus et l'intégration au parcours existant." },
      { h: "Mesurer un délai de validation, pas seulement l’activité", body: "<ol><li><strong>Définir le point de départ :</strong> première journée du parcours et niveau initial, identiques pour tous les groupes comparés.</li><li><strong>Définir l'arrivée :</strong> scénario, grille et niveau attendu, validés par un manager. Distinguez réussite en simulation et autonomie en situation réelle.</li><li><strong>Enregistrer :</strong> date d'entrée, date de validation, nombre de tentatives, minutes de pratique et temps de revue du manager.</li><li><strong>Comparer :</strong> médiane des jours jusqu'à validation, part des recrues validées à une échéance commune et personnes encore en parcours. Ne retirez pas silencieusement les personnes non validées du bilan.</li><li><strong>Interpréter :</strong> documentez les différences de séniorité, de produit, de territoire, de manager et de formation. Une comparaison avant/après seule ne prouve pas que l'IA cause le gain observé.</li></ol><p>Proposition de mesure Guide RH, sans résultat chiffré annoncé. Pour préparer l'épreuve finale, utilisez la <a href=\"/roleplay-ia/certification\">grille de certification</a> et gardez les mêmes critères pendant le pilote.</p>" },
      { h: 'Questions pour comparer deux offres de ramp-up', body: "<ul><li>Peut-on modifier soi-même le scénario quand le produit ou le discours commercial change ?</li><li>Le feedback distingue-t-il une erreur de fond, une objection mal traitée et un problème de formulation ?</li><li>Le manager peut-il voir une progression par compétence et les extraits associés, selon les accès définis ?</li><li>Le devis inclut-il la création des scénarios, la voix, le nombre de tentatives, l'accompagnement et les exports ? Comparez le <a href=\"/roleplay-ia/prix\">coût total du pilote</a>.</li><li>Que se passe-t-il si une recrue atteint le seuil en simulation mais reste en difficulté sur le terrain ?</li></ul><p>Demandez une démonstration sur le même brief et vos objections réelles. Consultez aussi le cas d'usage <a href=\"/roleplay-ia/equipes-commerciales\">formation commerciale</a> avant de sélectionner les scénarios.</p>" },
    ],
    faq: [
      { q: 'Le roleplay IA remplace-t-il le coaching du manager pendant le ramp-up ?', a: "Non. Il automatise la répétition et le feedback de premier niveau. Le manager reste utile pour prioriser les situations, contextualiser les résultats et accompagner les écarts les plus importants." },
      { q: 'Quelle est la meilleure métrique de ramp-up ?', a: "Le délai jusqu'à un niveau de compétence défini à l'avance est plus utile qu'un simple nombre de sessions. Il peut ensuite être rapproché des indicateurs opérationnels de l'équipe." },
    ],
  },
];

export type CriterionPage = { slug: string; title: string; description: string; answer: string; sections: Section[] };

export const CRITERION_PAGES: CriterionPage[] = [
  {
    slug: 'rgpd-hebergement',
    title: 'Roleplay IA et RGPD : hébergement des données, sous-traitants et conservation',
    description: "Ce qu'il faut vérifier avant de déployer un roleplay IA : où sont hébergées les sessions, quels modèles IA les traitent, combien de temps elles sont conservées.",
    answer: "Une session de roleplay IA contient la voix ou les écrits d'un salarié, parfois des informations sur des collègues ou des clients. Avant tout déploiement, vérifiez trois choses : la localisation de l'hébergement (France ou UE), les sous-traitants IA (quel fournisseur de modèle, avec quelles garanties de non-réutilisation des données) et la durée de conservation des enregistrements. Le tableau ci-dessous résume ce que chaque éditeur déclare et ce que nous avons pu vérifier.",
    sections: [
      { h: 'Les questions à poser à l\'éditeur', body: "<ol><li>Où sont stockées les sessions (pays, prestataire d'hébergement) ?</li><li>Quels fournisseurs de modèles IA traitent la voix et le texte, et où ?</li><li>Les données servent-elles à entraîner des modèles ? Un engagement écrit existe-t-il ?</li><li>Combien de temps les enregistrements sont-ils conservés ? Le salarié peut-il les supprimer ?</li><li>Un accord de traitement des données (DPA) et un registre des sous-traitants sont-ils fournis ?</li><li>Qui, côté employeur, peut accéder aux sessions individuelles ?</li></ol>" },
      { h: 'Ce que nous avons vérifié', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
      { h: 'Le rôle de la DPO et du CSE', body: "Le déploiement d'un outil qui enregistre des salariés relève d'une information-consultation du CSE et d'une analyse d'impact (AIPD) si les sessions sont conservées et rattachées à des personnes. Impliquez la DPO dès le choix de la solution, pas à la signature." },
    ],
  },
  {
    slug: 'ai-act',
    title: "Roleplay IA et AI Act : ce que le règlement européen change pour la formation",
    description: "Le règlement européen sur l'IA appliqué aux outils de roleplay en formation : obligations de transparence, cas à haut risque, bonnes pratiques.",
    answer: "L'AI Act classe les systèmes d'IA selon leur risque. Un outil d'entraînement conversationnel n'est pas, en soi, à haut risque. Il le devient si ses résultats servent à évaluer les performances, promouvoir ou sanctionner des salariés : ces usages relèvent de l'annexe III (emploi et gestion des travailleurs). La règle simple : réservez les résultats au collaborateur et à son développement, informez les salariés qu'ils interagissent avec une IA, et conservez une supervision humaine sur toute décision RH.",
    sections: [
      { h: 'Obligations qui s\'appliquent dans tous les cas', body: "<ul><li>Informer clairement l'utilisateur qu'il parle à une IA (obligation de transparence).</li><li>Documenter le fonctionnement de l'outil et ses limites.</li><li>Former les utilisateurs et administrateurs à un usage approprié.</li></ul>" },
      { h: 'Ce qui fait basculer vers le haut risque', body: "L'utilisation des scores pour des décisions individuelles : évaluation annuelle, éligibilité à une promotion, plan de performance. Dans ce cas, l'employeur devient déployeur d'un système à haut risque, avec analyse d'impact, supervision humaine documentée et information des représentants du personnel." },
      { h: 'Ce que déclarent les éditeurs', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
  },
  {
    slug: 'qualiopi-opco',
    title: 'Roleplay IA, Qualiopi et OPCO : comment financer une solution de simulation IA',
    description: "Un roleplay IA est-il finançable par l'OPCO ? Conditions, rôle de la certification Qualiopi et montage en parcours de formation.",
    answer: "Un abonnement logiciel seul n'est pas une action de formation finançable. La prise en charge par un OPCO passe par un parcours de formation dispensé par un organisme certifié Qualiopi, dans lequel le roleplay IA est un outil pédagogique. Plusieurs éditeurs sont eux-mêmes certifiés ou travaillent avec des organismes partenaires. Le tableau ci-dessous indique pour chaque solution la certification déclarée et les montages observés.",
    sections: [
      { h: 'Les trois montages possibles', body: "<ol><li><strong>L'éditeur est certifié Qualiopi</strong> et vend un parcours (formation + outil) : prise en charge possible sur le parcours.</li><li><strong>Un organisme de formation partenaire</strong> intègre l'outil dans sa formation : l'organisme facture, l'outil est un moyen pédagogique.</li><li><strong>Achat logiciel direct</strong> : pas de prise en charge OPCO, budget formation interne ou budget outils.</li></ol>" },
      { h: 'Ce que déclarent les éditeurs', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
  },
  {
    slug: 'integration-lms',
    title: 'Roleplay IA et LMS : SCORM, xAPI, LTI et SSO',
    description: "Comment intégrer une solution de roleplay IA à votre LMS ou LXP : standards SCORM et xAPI, SSO, remontée des résultats.",
    answer: "L'intégration au LMS décide si le roleplay IA sera utilisé ou oublié. Trois niveaux existent : le lien simple (l'apprenant sort du LMS), le module SCORM ou LTI (l'activité s'ouvre dans le LMS et remonte une complétion), et xAPI (les détails de chaque session remontent dans un LRS). Vérifiez aussi le SSO (SAML, OIDC) pour éviter une création de comptes manuelle.",
    sections: [
      { h: 'Ce que chaque standard remonte', body: "<table><thead><tr><th>Standard</th><th>Ce qui remonte au LMS</th><th>Quand le choisir</th></tr></thead><tbody><tr><td>Lien / deep link</td><td>Rien</td><td>Pilote rapide</td></tr><tr><td>SCORM 1.2 / 2004</td><td>Complétion, score global</td><td>LMS classiques</td></tr><tr><td>LTI 1.3</td><td>Lancement authentifié, note</td><td>LMS académiques et modernes</td></tr><tr><td>xAPI</td><td>Événements détaillés par session</td><td>Analytique fine, LRS</td></tr></tbody></table>" },
      { h: 'Ce que déclarent les éditeurs', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
  },
  {
    slug: 'voix-ou-texte',
    title: 'Roleplay IA : voix, texte ou avatar ? Choisir le bon format',
    description: "Comparer les formats de roleplay IA (texte, voix, avatar, vidéo) selon le cas d'usage, la qualité du français et le coût.",
    answer: "Le texte est le format le moins coûteux et le plus discret ; il convient à la préparation d'un échange et à l'entraînement à la formulation. La voix est nécessaire dès que le ton, le rythme et l'improvisation comptent : vente par téléphone, conflit, annonce difficile. L'avatar ajoute des réactions visibles, utile pour la lecture des signaux non verbaux, au prix d'une complexité technique plus grande. Pour une équipe française, la qualité de la voix en français (latence, accents, interruptions) est le premier critère à tester.",
    sections: [
      { h: 'Comment tester la voix en français', body: "<ul><li>Coupez la parole au personnage : réagit-il ou finit-il sa phrase ?</li><li>Parlez vite, puis avec un accent régional : la transcription tient-elle ?</li><li>Mesurez la latence entre votre fin de phrase et sa réponse (au-delà de deux secondes, l'illusion se brise).</li><li>Écoutez la prosodie : les tournures sont-elles celles d'un collègue ou d'une traduction ?</li></ul>" },
      { h: 'Ce que nous avons observé', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
    ],
  },
  {
    slug: 'prix',
    title: 'Prix des solutions de roleplay IA : modèles tarifaires et coût total',
    description: 'Combien coûte un roleplay IA par utilisateur ? Modèles de prix (licence, session, parcours), grilles publiques et coûts cachés.',
    answer: "Peu d'éditeurs publient leurs tarifs. Les grilles publiques observées en septembre 2026 vont de formules gratuites limitées à 50–100 € par utilisateur et par mois pour des outils commerciaux. Pour des déploiements RH à plusieurs centaines de personnes, les éditeurs pratiquent des licences annuelles par utilisateur ou des forfaits par volume de sessions, avec des coûts de création de scénarios en plus. Le coût total inclut la licence, les scénarios sur mesure, l'accompagnement et l'intégration.",
    sections: [
      { h: 'Les modèles rencontrés', body: "<ul><li><strong>Licence par utilisateur et par mois</strong>, la plus courante pour la vente.</li><li><strong>Forfait par volume de sessions</strong>, adapté aux déploiements ponctuels (onboarding, campagne d'entretiens annuels).</li><li><strong>Parcours de formation</strong> incluant l'outil, souvent finançable (voir <a href=\"/roleplay-ia/qualiopi-opco\">Qualiopi / OPCO</a>).</li></ul>" },
      { h: 'Grilles publiques et fourchettes constatées', body: 'Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les éléments documentés publiquement des scores standardisés.' },
      { h: 'Coûts à ne pas oublier', body: "Création et mise à jour des scénarios, temps des RH pour le cadrage, intégration LMS, accompagnement au lancement, et le temps des collaborateurs eux-mêmes." },
    ],
  },
];

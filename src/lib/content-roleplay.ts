/** Editorial content for use-case and criterion pages. HTML allowed in body. */

export type Section = { h: string; body: string };
export type UseCasePage = { slug: string; title: string; description: string; answer: string; updated?: string; sections: Section[]; faq: { q: string; a: string }[] };

export const USE_CASE_PAGES: UseCasePage[] = [
  {
    slug: 'managers',
    updated: '2026-10-04',
    title: 'Roleplay IA pour former les managers : quelle solution choisir ?',
    description: 'Comment le roleplay IA complète une formation management : entretiens difficiles, recadrage, délégation. Solutions comparées, protocole de test et points de vigilance.',
    answer: "Le roleplay IA permet à un manager de répéter un entretien de recadrage, une annonce difficile ou un point de délégation face à un collaborateur simulé, avant de le vivre en réel. Pour ce cas d'usage, les critères qui pèsent le plus sont la qualité du feedback comportemental, la personnalisation des scénarios aux situations de l'entreprise et la possibilité d'associer un coach humain. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les capacités documentées des notes éditoriales ; aucun test standardisé n'est revendiqué.",
    sections: [
      { h: 'Pourquoi les formations management ont besoin de pratique', body: "Une formation management transmet des cadres (feedback, écoute, gestion des émotions) que les managers savent réciter mais peinent à appliquer sous pression. La pratique répétée est ce qui fait passer du savoir au réflexe. Les jeux de rôle en salle offrent une ou deux répétitions ; le roleplay IA en offre autant que nécessaire, en privé." },
      { h: 'Scénarios types pour les managers', body: "<ul><li>Recadrer un collaborateur sur un comportement, sans le braquer.</li><li>Annoncer une décision impopulaire (réorganisation, refus d'augmentation).</li><li>Déléguer un dossier à un collaborateur réticent.</li><li>Mener un entretien de retour après un arrêt long.</li><li>Réagir à un désaccord frontal en réunion d'équipe.</li></ul><p>Pour comparer les solutions pendant un pilote, Guide RH propose le scénario « recadrage d'un retard récurrent » : il mobilise écoute, fermeté et recherche de solution. Cette proposition ne signifie pas qu'un test comparatif a déjà été réalisé.</p>" },
      { h: 'Ce qu’il faut vérifier pendant le pilote', body: "<ul><li>Le personnage résiste-t-il sans devenir caricatural ?</li><li>Le feedback cite-t-il des passages précis de la conversation ?</li><li>Deux managers qui adoptent des approches différentes mais acceptables peuvent-ils réussir ?</li><li>Le responsable du programme peut-il modifier la grille sans intervention de l'éditeur ?</li></ul><p>Documentez les versions du scénario et de la grille, puis faites relire un échantillon par un formateur ou un coach. Guide RH n'a pas encore exécuté ce protocole sur les solutions du comparatif.</p>" },
      { h: "Points de vigilance", body: "<ul><li>Les scores d'un manager ne doivent pas remonter à sa hiérarchie sans son accord : sinon l'outil devient un dispositif d'évaluation, avec les obligations qui vont avec (information du CSE, <a href=\"/roleplay-ia/ai-act\">AI Act</a>).</li><li>Un personnage IA trop conciliant ne prépare à rien ; vérifiez qu'il résiste, s'énerve ou se ferme de façon crédible.</li><li>Prévoyez un temps de débrief humain (pairs, coach, formateur) pour les situations complexes.</li></ul>" },
    ],
    faq: [
      { q: 'Le roleplay IA remplace-t-il la formation management ?', a: "Non. Il remplace la partie « exercice » que les formations n'ont jamais eu le temps de faire correctement. Les cadres, les échanges entre pairs et le regard d'un formateur restent nécessaires." },
      { q: 'Combien de sessions faut-il pour progresser ?', a: "Il n'existe pas de nombre universel démontré pour ces solutions. Prévoyez plusieurs tentatives sur un même scénario, mais mesurez séparément la familiarisation avec l'outil, la progression sur la grille et le transfert en situation réelle. Fixez la durée du pilote et le critère d'arrêt avant son lancement." },
    ],
  },
  {
    slug: 'gestion-des-conflits',
    updated: '2026-10-04',
    title: "Formation gestion des conflits : s'entraîner avec le roleplay IA",
    description: "Le roleplay IA appliqué à la gestion des conflits en entreprise : désaccords d'équipe, tensions avec un collaborateur, médiation. Solutions comparées et scénarios de test.",
    answer: "Une formation gestion des conflits apprend à nommer le désaccord, écouter la position de l'autre et chercher une issue acceptable. Le roleplay IA permet de s'y entraîner face à un interlocuteur qui s'agace, se ferme ou attaque, sans risque pour la relation réelle. Les solutions les plus adaptées proposent des personnages à intensité émotionnelle réglable et un feedback sur la désescalade. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les capacités documentées des notes éditoriales ; aucun test standardisé n'est revendiqué.",
    sections: [
      { h: 'Ce qu\'un bon scénario de conflit doit contenir', body: "<ul><li>Un enjeu concret (répartition de la charge, décision contestée, comportement blessant).</li><li>Un personnage qui réagit à ce que dit l'apprenant, et non un script linéaire.</li><li>Une montée en tension possible si l'apprenant s'y prend mal.</li><li>Un feedback qui distingue le fond (la solution trouvée) et la forme (le ton, l'écoute, les mots qui ont apaisé ou envenimé).</li></ul>" },
      { h: 'Scénario proposé pour un pilote', body: "« Deux membres de votre équipe se reprochent mutuellement un retard de livraison. Vous recevez l'un d'eux, convaincu d'avoir raison. » Utilisez le même contexte, le même niveau de tension et la même grille sur chaque solution. Guide RH propose ce protocole mais ne l'a pas encore exécuté sur les solutions du comparatif." },
      { h: 'Ce qu’il faut vérifier pendant le pilote', body: "Notez séparément la crédibilité des réactions, la latence, la qualité du français et le feedback. Vérifiez surtout si le personnage réagit aux formulations de l'apprenant, si une escalade peut être désamorcée et si le feedback explique quels mots ont aggravé ou apaisé l'échange." },
    ],
    faq: [
      { q: "Le roleplay IA convient-il aux conflits graves (harcèlement, discrimination) ?", a: "Non. Ces situations relèvent de procédures et d'acteurs spécialisés (RH, référents, médecine du travail). Le roleplay IA sert aux tensions du quotidien managérial." },
    ],
  },
  {
    slug: 'feedback',
    updated: '2026-10-04',
    title: "S'entraîner au feedback difficile avec le roleplay IA",
    description: 'Donner un feedback négatif sans démotiver : comment le roleplay IA aide les managers à pratiquer, et quelles solutions le font bien.',
    answer: "Le roleplay IA permet de répéter un feedback difficile : formuler les faits et leur impact, faire une demande, puis répondre à la réaction du collaborateur simulé. La qualité dépend de la crédibilité du personnage, de la grille utilisée et des justifications associées au score. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les capacités documentées des notes éditoriales ; aucun test standardisé n'est revendiqué.",
    sections: [
      { h: 'Les modèles de feedback que les outils évaluent', body: "La plupart des solutions s'appuient sur des grilles classiques (faits observables, impact, demande de changement, écoute de la réponse). Vérifiez que la grille est explicite et adaptable à votre culture managériale, et qu'elle ne se réduit pas à un score global." },
      { h: 'Scénario proposé pour un pilote', body: "« Un collaborateur senior a présenté au client un livrable comportant des erreurs que vous aviez signalées. Vous le recevez le lendemain. » Guide RH propose ce scénario pour comparer les solutions ; aucun résultat de test n'est revendiqué." },
      { h: 'Ce qu’il faut vérifier pendant le pilote', body: "Vérifiez si la grille distingue les faits, leur impact, la demande formulée et l'écoute de la réponse. Introduisez volontairement une généralisation (« toujours », « jamais ») et une formulation factuelle pour voir si le feedback les différencie. Demandez à un formateur de relire les justifications, pas seulement le score global." },
    ],
    faq: [
      { q: 'Le roleplay IA aide-t-il aussi à recevoir un feedback ?', a: "Certaines solutions proposent l'inverse : le personnage IA donne un feedback au collaborateur qui s'entraîne à le recevoir. Vérifiez en démonstration si le scénario permet réellement d'inverser les rôles et si le feedback évalue l'écoute, la reformulation et la réponse du participant." },
    ],
  },
  {
    slug: 'entretien-annuel',
    updated: '2026-10-04',
    title: "Préparer les managers à l'entretien annuel avec le roleplay IA",
    description: "Entretiens annuels et professionnels : s'entraîner à fixer des objectifs, évaluer et gérer les désaccords sur la notation grâce au roleplay IA.",
    answer: "L'entretien annuel est le moment où un manager doit à la fois évaluer, écouter et projeter. Le roleplay IA permet de s'entraîner aux passages délicats : annoncer une évaluation en dessous des attentes, répondre à une demande d'augmentation, refuser une mobilité. Il ne remplace pas la préparation du fond (objectifs, faits), mais la partie conversationnelle. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les capacités documentées des notes éditoriales ; aucun test standardisé n'est revendiqué.",
    sections: [
      { h: 'Ce que le roleplay IA prépare, et ce qu\'il ne prépare pas', body: "Il prépare la conduite de l'échange. Il ne prépare ni la collecte des faits de l'année ni la cohérence des évaluations au sein de l'équipe, qui relèvent du processus RH. Les meilleures solutions permettent d'injecter le contexte réel (poste, objectifs, historique) dans le scénario." },
      { h: 'Scénario proposé pour un pilote', body: "« Une collaboratrice attend une promotion que vous ne pouvez pas lui accorder cette année. Elle ouvre l'entretien en le disant. » Guide RH propose ce scénario pour comparer les réactions des personnages et la qualité du feedback ; aucun test n'a encore été réalisé." },
      { h: 'Ce qu’il faut vérifier pendant le pilote', body: "Contrôlez si le personnage peut contester l'évaluation avec des arguments cohérents, si le manager est invité à s'appuyer sur des faits et si l'outil évite de suggérer des promesses qu'il ne peut tenir. Les données réelles d'un salarié ne sont pas nécessaires pour ce pilote : utilisez un dossier fictif mais complet." },
    ],
    faq: [
      { q: "Peut-on utiliser le roleplay IA pour l'entretien professionnel obligatoire ?", a: "Oui pour s'entraîner à le mener ; le contenu réglementaire (parcours, formation, évolution) reste à préparer par ailleurs." },
    ],
  },
  {
    slug: 'equipes-commerciales',
    updated: '2026-10-04',
    title: 'Roleplay IA pour la formation commerciale : objections, découverte, closing',
    description: "Formation commerciale et roleplay IA : simulateurs d'appels, traitement des objections, pitch. Solutions françaises et internationales comparées.",
    answer: "La vente est un cas d'usage fréquent du roleplay IA : appels de prospection, découverte, traitement des objections et pitch. Les éditeurs proposent des simulateurs vocaux pour répéter ces conversations et recevoir un scoring. Pour une équipe française, vérifiez la qualité du français à l'oral, la latence et la personnalisation des personnages à vos clients cibles. Les fiches solution distinguent les capacités documentées des notes éditoriales ; aucun test standardisé n'est revendiqué.",
    sections: [
      { h: 'Scénarios types', body: "<ul><li>Appel à froid avec un décideur pressé.</li><li>Découverte des besoins d'un prospect qui en dit peu.</li><li>Objections prix, concurrent, « pas le moment ».</li><li>Négociation de fin de cycle.</li></ul>" },
      { h: 'Scénario proposé pour un pilote', body: "« Vous appelez un DRH d'une ETI qui a téléchargé un livre blanc il y a trois semaines. Il décroche, agacé. » Utilisez le même persona, les mêmes informations produit et les mêmes objections sur chaque solution vocale. Guide RH propose ce protocole mais ne l'a pas encore exécuté." },
      { h: 'Ce qu’il faut vérifier pendant le pilote', body: "Mesurez la latence et les erreurs de transcription dans un environnement comparable. Testez une bonne découverte, un pitch prématuré et une réponse inventée pour voir si le feedback les distingue. Vérifiez que les critères correspondent à votre méthode commerciale et que les exemples cités proviennent bien de la conversation." },
    ],
    faq: [
      { q: 'Faut-il un simulateur vocal ou un roleplay écrit pour les commerciaux ?', a: "Pour la prospection téléphonique et la visio, le vocal est indispensable. Pour la préparation d'un rendez-vous ou d'un e-mail de relance, l'écrit suffit et coûte moins cher." },
    ],
  },
  {
    slug: 'relation-client',
    updated: '2026-10-04',
    title: 'Former les conseillers relation client avec le roleplay IA',
    description: "Roleplay IA pour les centres de contact et la relation client : clients mécontents, réclamations, rétention. Solutions comparées.",
    answer: "Dans la relation client, le roleplay IA sert à entraîner les conseillers aux appels difficiles : client mécontent, réclamation ou menace de résiliation. Les critères qui comptent sont le volume de sessions possible par conseiller, l'intégration au parcours d'onboarding et la conformité des scripts au cadre réglementaire du secteur. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les capacités documentées des notes éditoriales ; aucun test standardisé n'est revendiqué.",
    sections: [
      { h: 'Scénario proposé pour un pilote', body: "« Un client appelle pour la troisième fois au sujet d'un prélèvement contesté. Il menace de résilier et de publier un avis. » Guide RH propose ce scénario pour un pilote ; il ne correspond pas à un test déjà réalisé." },
      { h: 'Ce qu’il faut vérifier pendant le pilote', body: "Vérifiez si le personnage conserve l'historique du problème, si le conseiller doit reformuler avant de proposer une solution et si le feedback repère une promesse hors procédure. Ajoutez vos règles sectorielles au brief, puis faites valider un échantillon des réponses par le responsable qualité." },
    ],
    faq: [
      { q: 'Le roleplay IA peut-il évaluer les conseillers en production ?', a: "Ce n'est pas son rôle, et l'usage des scores à des fins d'évaluation individuelle change le cadre juridique (information du CSE, AI Act). Il sert à l'entraînement." },
    ],
  },
  {
    slug: 'onboarding',
    updated: '2026-10-04',
    title: "Roleplay IA pour l'onboarding des nouveaux managers",
    description: "Intégrer le roleplay IA dans un parcours d'onboarding manager : premières conversations, prise de poste, premiers 90 jours.",
    answer: "Un nouveau manager fait face en quelques semaines à des conversations qu'il n'a jamais menées : premier point individuel, première remarque à faire, première demande refusée. Le roleplay IA intégré au parcours d'onboarding permet de les répéter avant de les vivre. Le critère décisif est l'intégration au LMS ou au parcours existant, pour que l'entraînement arrive au bon moment. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les capacités documentées des notes éditoriales ; aucun test standardisé n'est revendiqué.",
    sections: [
      { h: 'Où placer le roleplay IA dans les 90 premiers jours', body: "<ul><li>Semaine 1 : premier entretien individuel avec chaque membre de l'équipe.</li><li>Semaine 3 : première remarque sur un comportement.</li><li>Mois 2 : refuser une demande (congés, télétravail, budget).</li><li>Mois 3 : premier point d'étape avec sa propre hiérarchie.</li></ul>" },
      { h: 'Ce qu’il faut vérifier pendant le pilote', body: "Vérifiez que les scénarios apparaissent au moment prévu dans le parcours, qu'un nouveau manager comprend la consigne sans aide et que le feedback renvoie aux principes transmis en formation. Comparez le taux de démarrage, le taux d'achèvement et le temps de revue des responsables, sans présenter ces indicateurs d'usage comme une preuve de transfert en poste." },
    ],
    faq: [],
  },
  {
    slug: 'recrutement',
    updated: '2026-10-04',
    title: "Former les recruteurs et managers à l'entretien de recrutement avec le roleplay IA",
    description: "Roleplay IA pour l'entretien de recrutement côté recruteur : questions structurées, non-discrimination, évaluation des réponses.",
    answer: "Côté recruteur, le roleplay IA sert à s'entraîner à mener un entretien structuré : poser les mêmes questions à tous, creuser une réponse vague, éviter les questions discriminatoires, conclure proprement. Il s'adresse aux managers qui recrutent occasionnellement autant qu'aux recruteurs. À ne pas confondre avec les simulateurs d'entretien destinés aux candidats. Guide RH recommande de valider ces points sur un pilote avec vos propres scénarios. Les fiches solution distinguent les capacités documentées des notes éditoriales ; aucun test standardisé n'est revendiqué.",
    sections: [
      { h: 'Scénario proposé pour un pilote', body: "« Vous recevez un candidat dont le CV présente un trou de deux ans. Vous devez l'aborder sans question interdite et évaluer une compétence clé par une question comportementale. » Guide RH propose ce scénario pour un pilote ; aucun résultat comparatif n'est revendiqué." },
      { h: 'Ce qu’il faut vérifier pendant le pilote', body: "Testez une question factuelle sur le parcours, une question discriminatoire et une question comportementale structurée. Vérifiez que le feedback les distingue clairement, explique le risque et ne produit pas lui-même d'inférence sensible sur le candidat. Faites valider la grille par les équipes RH et juridiques avant diffusion." },
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

export type CriterionPage = { slug: string; title: string; description: string; answer: string; updated?: string; sections: Section[] };

export const CRITERION_PAGES: CriterionPage[] = [
  {
    slug: 'rgpd-hebergement',
    updated: '2026-10-05',
    title: 'Roleplay IA et RGPD : hébergement des données, sous-traitants et conservation',
    description: "Ce qu'il faut vérifier avant de déployer un roleplay IA : où sont hébergées les sessions, quels modèles IA les traitent, combien de temps elles sont conservées.",
    answer: "Une session de roleplay IA peut contenir la voix ou les écrits d'un salarié, ainsi que des informations sur des collègues ou des clients. Avant le déploiement, documentez la finalité, la base légale, les données collectées, les destinataires, les sous-traitants, les transferts hors Espace économique européen et les durées de conservation. Le tableau compare les informations publiques ou déclarées par les éditeurs ; il ne constitue pas un audit RGPD indépendant.",
    sections: [
      { h: 'Les questions à poser à l\'éditeur', body: "<ol><li>Où sont stockées les sessions (pays, prestataire d'hébergement) ?</li><li>Quels fournisseurs de modèles IA traitent la voix et le texte, et où ?</li><li>Les données servent-elles à entraîner des modèles ? Un engagement écrit existe-t-il ?</li><li>Combien de temps les enregistrements sont-ils conservés ? Le salarié peut-il les supprimer ?</li><li>Un accord de traitement des données (DPA) et un registre des sous-traitants sont-ils fournis ?</li><li>Qui, côté employeur, peut accéder aux sessions individuelles ?</li></ol>" },
      { h: 'Comment contrôler les déclarations', body: "<ul><li>Demandez le DPA, la liste datée des sous-traitants et les lieux de traitement, puis comparez-les aux réponses commerciales.</li><li>Vérifiez séparément l'audio, la transcription, les scores, les journaux techniques et les sauvegardes : leurs durées peuvent différer.</li><li>Faites décrire les mécanismes de suppression, d'export et de gestion des demandes des personnes.</li><li>Confirmez par écrit si les données, prompts ou sorties servent à entraîner ou améliorer un modèle.</li></ul><p>Les notes du comparatif restent des appréciations documentaires fondées sur les éléments cités dans chaque fiche, pas une certification de conformité.</p>" },
      { h: 'AIPD, DPO et représentants du personnel', body: "Une AIPD est obligatoire lorsqu'un traitement est susceptible d'engendrer un risque élevé pour les droits et libertés ; la simple conservation d'une session ne suffit pas, à elle seule, à trancher. La CNIL recommande d'examiner notamment l'évaluation ou la notation, la surveillance systématique, les personnes vulnérables, l'usage innovant et l'ampleur du traitement. Impliquez la DPO dès le cadrage et déterminez avec les conseils compétents les obligations d'information ou de consultation des représentants du personnel selon l'usage prévu. Voir les <a href=\"https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd\" rel=\"noopener\">critères AIPD de la CNIL</a> et sa fiche <a href=\"https://cnil.fr/fr/realiser-une-analyse-dimpact-si-necessaire\" rel=\"noopener\">IA : réaliser une AIPD si nécessaire</a>, consultées le 5 octobre 2026." },
    ],
  },
  {
    slug: 'ai-act',
    updated: '2026-10-05',
    title: "Roleplay IA et AI Act : ce que le règlement européen change pour la formation",
    description: "Le règlement européen sur l'IA appliqué aux outils de roleplay en formation : obligations de transparence, cas à haut risque, bonnes pratiques.",
    answer: "Le classement AI Act dépend de la finalité prévue du système, pas seulement de son interface. Un roleplay réservé à l'entraînement n'est pas automatiquement à haut risque. En revanche, un système destiné à prendre ou soutenir des décisions qui affectent les conditions de travail, la promotion, la rupture de la relation de travail, l'attribution de tâches ou l'évaluation des personnes peut relever de l'annexe III. Décrivez l'usage autorisé par écrit et empêchez la réutilisation des scores à une autre finalité.",
    sections: [
      { h: 'Ce qui s’applique déjà en octobre 2026', body: "<ul><li>L'obligation de prendre des mesures de maîtrise de l'IA pour les personnes qui utilisent des systèmes d'IA s'applique depuis le 2 février 2025.</li><li>Les obligations de transparence de l'article 50 s'appliquent depuis le 2 août 2026 : une personne doit être informée qu'elle interagit avec une IA, sauf si cela est évident dans le contexte.</li><li>Selon le calendrier publié par la Commission après l'AI Omnibus, les règles visant les systèmes à haut risque de l'annexe III s'appliquent à partir du 2 décembre 2027.</li></ul><p>Sources officielles consultées le 5 octobre 2026 : <a href=\"https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers\" rel=\"noopener\">Commission européenne, maîtrise de l'IA</a>, <a href=\"https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems\" rel=\"noopener\">lignes directrices sur la transparence</a> et <a href=\"https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems\" rel=\"noopener\">calendrier des systèmes à haut risque</a>.</p>" },
      { h: 'Ce qui peut faire entrer l’usage dans le haut risque', body: "L'usage prévu et réellement organisé doit être examiné : une note d'entraînement privée n'a pas la même finalité qu'un score transmis au manager pour décider d'une promotion ou d'un plan de performance. Pour chaque projet, définissez qui voit les résultats, quelles décisions ils peuvent alimenter, la durée de conservation et la supervision humaine. Si l'usage relève du haut risque, préparez les obligations applicables avant leur date d'entrée en application et évaluez aussi la nécessité d'une AIPD au titre du RGPD." },
      { h: 'Vérifications documentaires auprès des éditeurs', body: "Demandez à l'éditeur de qualifier séparément son rôle, l'usage prévu, les fonctions de scoring, les journaux, la supervision humaine et les mesures de maîtrise de l'IA. Une mention générale « conforme AI Act » ne suffit pas. Les fiches Guide RH rapportent des capacités et déclarations documentées ; elles ne constituent pas une certification juridique indépendante." },
    ],
  },
  {
    slug: 'qualiopi-opco',
    updated: '2026-10-05',
    title: 'Roleplay IA, Qualiopi et OPCO : comment financer une solution de simulation IA',
    description: "Un roleplay IA est-il finançable par l'OPCO ? Conditions, rôle de la certification Qualiopi et montage en parcours de formation.",
    answer: "Qualiopi certifie le processus qualité d'un prestataire d'actions concourant au développement des compétences ; elle ne rend pas automatiquement une dépense finançable. Lorsqu'une action mobilise des fonds publics ou mutualisés, le prestataire concerné doit être certifié pour la catégorie d'action correspondante. La prise en charge d'un parcours intégrant un roleplay IA dépend ensuite des règles de votre OPCO, de la branche, de la taille de l'entreprise, du dispositif et du budget disponible. Demandez une confirmation écrite avant de commander.",
    sections: [
      { h: 'Trois structures à examiner', body: "<ol><li><strong>Parcours vendu par un organisme certifié Qualiopi</strong> pour la catégorie « action de formation », avec le roleplay comme moyen pédagogique.</li><li><strong>Organisme de formation partenaire</strong> qui porte le parcours, contractualise et intègre l'outil de l'éditeur.</li><li><strong>Licence logicielle achetée directement</strong>, à soumettre à l'OPCO avant tout engagement si vous souhaitez l'inclure dans une demande de prise en charge.</li></ol><p>Dans chaque cas, demandez le programme, les objectifs, les modalités d'accompagnement et d'évaluation, le certificat Qualiopi et son périmètre, le devis détaillé et les conditions exactes de l'OPCO.</p>" },
      { h: 'Ce que Qualiopi prouve, et ne prouve pas', body: "<p>La certification atteste la conformité du processus du prestataire au référentiel national qualité pour les catégories couvertes. Elle ne certifie ni l'efficacité d'un logiciel, ni la qualité d'un scénario IA, ni l'accord de financement de votre dossier. Vérifiez le prestataire et la catégorie d'action dans la liste publique, puis obtenez la décision de prise en charge de l'OPCO. Sources officielles consultées le 5 octobre 2026 : <a href=\"https://travail-emploi.gouv.fr/IMG/pdf/guide_de_lecture_qualiopi_v9_du_8_janvier_2024.pdf\" rel=\"noopener\">guide de lecture Qualiopi</a> et <a href=\"https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco\" rel=\"noopener\">missions et règles générales des OPCO</a>.</p>" },
    ],
  },
  {
    slug: 'integration-lms',
    updated: '2026-10-06',
    title: 'Roleplay IA et LMS : SCORM, xAPI, LTI et SSO',
    description: "Comment intégrer une solution de roleplay IA à votre LMS ou LXP : standards SCORM et xAPI, SSO, remontée des résultats.",
    answer: "Une mention « compatible LMS » ne décrit pas précisément l'intégration. Demandez quel standard et quelle version sont pris en charge, quelles données circulent dans chaque sens, où elles sont stockées et quelle configuration a déjà été validée avec votre LMS. Un lien, un paquet SCORM, LTI 1.3 et xAPI répondent à des besoins différents ; le SSO et le provisionnement des comptes doivent être vérifiés séparément.",
    sections: [
      { h: 'Ce que les options peuvent couvrir', body: "<table><caption>Portée à confirmer dans la configuration proposée</caption><thead><tr><th scope=\"col\">Option</th><th scope=\"col\">Usage possible</th><th scope=\"col\">Preuve à demander</th></tr></thead><tbody><tr><th scope=\"row\">Lien simple</th><td>Ouvrir l'outil depuis le parcours.</td><td>Parcours utilisateur et méthode d'authentification.</td></tr><tr><th scope=\"row\">SCORM 1.2 / 2004</th><td>Échanger, selon l'implémentation, statut, réussite, score et temps avec le LMS.</td><td>Version exacte, paquet de démonstration et champs réellement transmis.</td></tr><tr><th scope=\"row\">LTI 1.3 / LTI Advantage</th><td>Lancer un outil distant ; des services complémentaires peuvent couvrir le deep linking, les rôles et les notes.</td><td>Composants pris en charge, certification de conformité éventuelle et LMS déjà validés.</td></tr><tr><th scope=\"row\">xAPI</th><td>Envoyer des déclarations d'activité à un LRS, avec résultat, réussite, complétion, durée ou extensions selon le profil retenu.</td><td>Exemples de déclarations, profil xAPI, LRS cible et règles d'accès.</td></tr></tbody></table><p>Sources officielles consultées le 6 octobre 2026 : <a href=\"https://www.1edtech.org/standards/lti\" rel=\"noopener\">1EdTech, LTI 1.3 et services LTI Advantage</a> et <a href=\"https://adlnet.gov/assets/uploads/xAPI_v1.0.1-2013-10-01.pdf\" rel=\"noopener\">spécification xAPI d'ADL</a>.</p>" },
      { h: 'Test d’intégration à exiger avant le contrat', body: "<ol><li>Créer un utilisateur test depuis le LMS avec le rôle attendu.</li><li>Lancer un scénario précis sans seconde connexion.</li><li>Terminer, échouer puis recommencer l'activité pour contrôler les statuts et tentatives.</li><li>Vérifier chaque donnée reçue par le LMS ou le LRS, son identifiant, sa date et son unité.</li><li>Retirer l'accès dans l'annuaire ou le LMS et confirmer la révocation côté outil.</li><li>Exporter les traces utiles puis vérifier leur suppression selon les règles convenues.</li></ol><p>Guide RH n'a pas exécuté ce test sur les solutions du comparatif. Les notes restent des appréciations documentaires fondées sur les sources citées par fiche.</p>" },
    ],
  },
  {
    slug: 'voix-ou-texte',
    updated: '2026-10-06',
    title: 'Roleplay IA : voix, texte ou avatar ? Choisir le bon format',
    description: "Comparer les formats de roleplay IA (texte, voix, avatar, vidéo) selon le cas d'usage, la qualité du français et le coût.",
    answer: "Le bon format dépend de la compétence visée. Le texte facilite l'analyse des formulations et un usage discret. La voix permet de travailler le rythme, les silences, les interruptions et l'improvisation. Un avatar ajoute une présence visuelle, mais son apparence ne prouve ni la qualité de la conversation ni une analyse fiable des signaux non verbaux. Comparez les formats sur le même scénario et dans les conditions réelles d'usage.",
    sections: [
      { h: 'Protocole proposé pour tester la voix en français', body: "<ol><li>Utilisez le même appareil, casque, réseau, scénario et durée pour chaque solution.</li><li>Faites participer plusieurs locuteurs : débits, genres de voix et accents différents, sans présenter cet échantillon comme représentatif de toute la population.</li><li>Incluez des nombres, sigles, noms de produits, silences, hésitations et interruptions.</li><li>Enregistrez la latence de réponse sur plusieurs tours et publiez la médiane ainsi qu'une valeur haute, pas seulement le meilleur essai.</li><li>Comparez la transcription au son original et classez les erreurs qui changent le sens.</li><li>Demandez à plusieurs évaluateurs humains de noter le naturel, la cohérence du personnage et l'utilité du feedback avec une grille commune.</li></ol><p>Ce protocole est proposé par Guide RH et n'a pas encore été exécuté sur les solutions du comparatif.</p>" },
      { h: 'Choisir le format selon la situation', body: "<table><caption>Questions de sélection par format</caption><thead><tr><th scope=\"col\">Format</th><th scope=\"col\">À privilégier pour vérifier</th><th scope=\"col\">Limite à contrôler</th></tr></thead><tbody><tr><th scope=\"row\">Texte</th><td>Structure, vocabulaire et préparation d'un échange.</td><td>Ne mesure pas la prestation orale.</td></tr><tr><th scope=\"row\">Voix</th><td>Conversation orale, rythme et gestion des interruptions.</td><td>Qualité de transcription, latence et conditions audio.</td></tr><tr><th scope=\"row\">Avatar</th><td>Engagement visuel ou mise en situation incarnée.</td><td>Réalisme, accessibilité, coût et absence d'inférences non justifiées.</td></tr></tbody></table>" },
    ],
  },
  {
    slug: 'prix',
    updated: '2026-10-06',
    title: 'Prix des solutions de roleplay IA : modèles tarifaires et coût total',
    description: 'Combien coûte un roleplay IA par utilisateur ? Modèles de prix (licence, session, parcours), grilles publiques et coûts cachés.',
    answer: "Les offres de roleplay IA sont difficiles à comparer à partir d'un prix affiché : le périmètre peut varier selon les utilisateurs autorisés, les utilisateurs actifs, les sessions, les minutes de voix, les scénarios, les langues, l'accompagnement et les intégrations. Guide RH ne publie donc pas de fourchette générale sans devis comparables. Demandez à chaque éditeur de chiffrer le même scénario de déploiement et calculez le coût total sur toute la durée du contrat.",
    sections: [
      { h: 'Modèles tarifaires à identifier', body: "<ul><li><strong>Utilisateur autorisé ou actif :</strong> précisez la période de mesure, les réaffectations et les minimums.</li><li><strong>Session, crédit ou minute :</strong> définissez ce qui consomme un crédit, les tentatives interrompues et les dépassements.</li><li><strong>Forfait de programme :</strong> séparez plateforme, conception, accompagnement et reporting.</li><li><strong>Contrat d'entreprise :</strong> vérifiez le plafond d'usage, les entités couvertes, les langues et la durée d'engagement.</li></ul><p>Une prise en charge éventuelle relève d'un dossier distinct : voir <a href=\"/roleplay-ia/qualiopi-opco\">Qualiopi et OPCO</a>.</p>" },
      { h: 'Scénario commun pour demander trois devis', body: "<p>Envoyez aux éditeurs les mêmes hypothèses : nombre de personnes invitées et actives, sessions par personne, durée moyenne, langues, nombre de scénarios initiaux et mises à jour, formats texte/voix/avatar, SSO, <a href=\"/roleplay-ia/integration-lms\">intégration LMS</a>, support, reporting, durée et pays de déploiement. Demandez un prix année 1 et années suivantes, hors taxes, avec dépassements et indexation.</p><p>Guide RH recommande de ne comparer un coût par utilisateur actif ou par session qu'après avoir harmonisé ces hypothèses. Les prix non publics restent indiqués « sur devis » dans les fiches.</p>" },
      { h: 'Calculer le coût total du contrat', body: "<p><strong>Coût total =</strong> licence ou consommation + conception initiale + mises à jour + intégration + accompagnement + support facturé + dépassements prévus + coûts internes de pilotage.</p><table><caption>Contrôles à intégrer au comparatif financier</caption><thead><tr><th scope=\"col\">Élément</th><th scope=\"col\">Question à documenter</th></tr></thead><tbody><tr><th scope=\"row\">Volume</th><td>Que se passe-t-il si l'usage est inférieur ou supérieur aux prévisions ?</td></tr><tr><th scope=\"row\">Contenu</th><td>Combien de créations et mises à jour sont incluses ?</td></tr><tr><th scope=\"row\">Données</th><td>L'export et la restitution en fin de contrat sont-ils inclus ?</td></tr><tr><th scope=\"row\">Renouvellement</th><td>Quelle indexation, quel préavis et quelle durée minimale ?</td></tr></tbody></table>" },
    ],
  },
];

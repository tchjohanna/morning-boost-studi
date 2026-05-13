<script>
// ══════════════════════════════════════════════════════════════════
//  BANQUE DE MORNING BOOSTS
//  ─────────────────────────────────────────────────────────────────
//  Pour ajouter un nouveau boost, copie le modèle ci-dessous,
//  colle-le juste avant la ligne "// FIN DU TABLEAU",
//  et remplis les champs.
//
//  {
//    id: "boost_11",           // identifiant unique (incrémente le numéro)
//    date: "JJ/MM/AAAA",       // date du boost
//    icon: "📝",               // emoji
//    label: "Titre du boost",  // affiché sur la carte
//    sub: "Sous-titre court",  // description
//    color: "#7c6af7",         // couleur hex de la barre
//    questions: [
//      {
//        q: "Ta question ici ?",
//        opts: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
//        ans: 0,   // index de la bonne réponse (0 = A, 1 = B, ...)
//        expl: "Explication de la bonne réponse."
//      },
//      // ... autres questions
//    ]
//  },
// ══════════════════════════════════════════════════════════════════

const BOOSTS = [

  {
    id:"boost_01", date:"08/04/2026", icon:"🏛️",
    label:"Classes & comptes PCG", sub:"Comptes 411, 401, 512, 164, 120… classes 1 à 7",
    color:"#7c6af7",
    questions:[
      {q:"Un solde débiteur du compte 411 signifie que :",opts:["L'entreprise doit de l'argent au client","Le client a payé en avance","La vente est annulée","Le client doit de l'argent"],ans:3,expl:"Un solde débiteur du 411 représente une créance : le client n'a pas encore réglé sa facture."},
      {q:"Un solde créditeur du compte 401 signifie que :",opts:["L'entreprise doit une dette au fournisseur","L'entreprise a payé en avance","La facture est annulée","Le fournisseur a trop facturé"],ans:0,expl:"Un solde créditeur du 401 représente une dette : l'entreprise n'a pas encore réglé son fournisseur."},
      {q:"Quel est le solde normal du compte 512 Banque pour une entreprise solvable ?",opts:["Variable selon les jours","Créditeur","Débiteur","Nul"],ans:2,expl:"La banque est un actif (classe 5). Son solde normal est débiteur. Un solde créditeur = découvert bancaire !"},
      {q:"Les comptes de classe 1 correspondent à :",opts:["Charges et produits","Comptes de tiers","Stocks et en-cours","Capitaux propres"],ans:3,expl:"La classe 1 regroupe les comptes de capitaux : capital (101), réserves, résultat (12x), emprunts (16x)."},
      {q:"Les comptes de classe 2 correspondent à :",opts:["Stocks","Charges","Dettes fournisseurs","Immobilisations"],ans:3,expl:"La classe 2 regroupe les immobilisations incorporelles, corporelles et financières."},
      {q:"Le résultat de l'exercice est calculé ainsi :",opts:["Charges - Produits","Produits + Charges","Produits - Charges","Actif - Passif"],ans:2,expl:"Résultat = Produits - Charges. Si positif : bénéfice (120). Si négatif : perte (129)."},
      {q:"Un bénéfice est inscrit dans les capitaux propres au compte :",opts:["101 Capital","164 Emprunts","129 Résultat (perte)","120 Résultat"],ans:3,expl:"Le bénéfice est inscrit au compte 120 dans les capitaux propres au passif."},
      {q:"Le compte 164 correspond à :",opts:["Réserves légales","Capital social","Emprunt bancaire","Dettes fournisseurs"],ans:2,expl:"Le compte 164 'Emprunts auprès des établissements de crédit' = dettes financières à long terme."},
      {q:"Les comptes de classe 5 regroupent :",opts:["Les immobilisations","Les comptes de trésorerie","Les capitaux propres","Les stocks"],ans:1,expl:"La classe 5 regroupe les comptes financiers : caisse (53), banque (512), VMP (50)."},
      {q:"Lors d'un achat de matériel immobilisé à crédit, quel compte est crédité en contrepartie ?",opts:["512","218","404","401"],ans:2,expl:"L'achat d'immobilisation à crédit génère une dette au compte 404 'Fournisseurs d'immobilisations'."},
      {q:"Les comptes de classe 3 correspondent à :",opts:["Charges","Trésorerie","Stocks et en-cours","Immobilisations"],ans:2,expl:"La classe 3 regroupe les stocks de marchandises, matières premières, produits finis et en-cours."},
      {q:"Les comptes de classe 6 enregistrent :",opts:["Les charges de l'entreprise","Les actifs","Les capitaux propres","Les produits d'exploitation"],ans:0,expl:"La classe 6 regroupe toutes les charges : achats (601/607), personnel (64), dotations (68)..."},
      {q:"Les comptes de classe 7 enregistrent :",opts:["Les immobilisations","Les produits de l'entreprise","Les dettes","Les charges exceptionnelles"],ans:1,expl:"La classe 7 regroupe tous les produits : ventes (70), produits financiers (76), exceptionnels (77)..."},
      {q:"Un compte de produit augmente au :",opts:["Débit","Crédit","Les deux","Ni l'un ni l'autre"],ans:1,expl:"Les produits augmentent au crédit (solde créditeur normal). Les charges augmentent au débit."}
    ]
  },

  {
    id:"boost_02", date:"08/04/2026", icon:"📦",
    label:"Inventaire des stocks", sub:"Intermittent, permanent, évaluation, PCG",
    color:"#5de8c0",
    questions:[
      {q:"Selon le PCG, à quelle fréquence minimale un commerçant doit-il réaliser un inventaire ?",opts:["Tous les 6 mois","Au moins 1 fois par an","Tous les 2 ans","Uniquement à la création"],ans:1,expl:"L'inventaire est une obligation légale : le Code de commerce et le PCG imposent au moins 1 inventaire par an."},
      {q:"Quel est l'un des objectifs principaux de l'inventaire de stocks ?",opts:["Calculer la TVA déductible","Donner une image fidèle de la situation financière","Établir le budget prévisionnel","Contrôler les salaires"],ans:1,expl:"L'inventaire permet de donner une image fidèle de la situation financière et de calculer le résultat."},
      {q:"Avec l'inventaire INTERMITTENT, quand enregistre-t-on les mouvements dans les comptes de stocks ?",opts:["À chaque entrée et sortie","Tous les trimestres","Uniquement à la clôture","Chaque semaine"],ans:2,expl:"Avec l'inventaire intermittent, on ne touche pas aux comptes de stocks pendant l'exercice — uniquement à la clôture."},
      {q:"Quelle est la caractéristique principale de l'inventaire PERMANENT ?",opts:["Il est réservé aux TPE/PME","Il se fait uniquement en fin d'année","Il enregistre chaque entrée et sortie en temps réel","Il est obligatoire pour les commerçants"],ans:2,expl:"L'inventaire permanent permet une connaissance instantanée des stocks grâce à l'enregistrement de chaque entrée/sortie."},
      {q:"Un énoncé ne précise pas la méthode d'inventaire. Laquelle suppose-t-on par défaut ?",opts:["L'inventaire permanent","L'inventaire tournant","L'inventaire intermittent","Aucune méthode"],ans:2,expl:"L'inventaire intermittent est la méthode par défaut. Si l'énoncé ne précise rien, on suppose l'inventaire intermittent."},
      {q:"Pour évaluer les stocks de produits finis, quelle formule utilise-t-on ?",opts:["Prix d'achat + charges = Coût d'achat","Coût matières + charges directes/indirectes = Coût de production","Prix de vente - marge = Coût de revient","CA - charges fixes = Résultat"],ans:1,expl:"Pour les stocks de produits finis, on utilise le coût de production : Coût matières + Charges directes/indirectes."},
      {q:"Lors des travaux d'inventaire, quelle est la PREMIÈRE étape ?",opts:["Rédiger l'annexe","Établir le bilan","Réaliser l'inventaire physique","Enregistrer les amortissements"],ans:2,expl:"La première étape est toujours l'inventaire physique : compter et évaluer tous les stocks."},
      {q:"Les « documents de synthèse » produits à la clôture sont :",opts:["Le bon de commande et la facture","Le compte de résultat, le bilan et l'annexe","Le journal des achats et le grand livre","La feuille de paie et le contrat"],ans:1,expl:"Les documents de synthèse sont : le compte de résultat, le bilan et l'annexe."},
      {q:"Quel est un piège classique lors des travaux d'inventaire ?",opts:["Utiliser un logiciel","Faire l'inventaire un vendredi","Oublier de valoriser les stocks","Classer par ordre alphabétique"],ans:2,expl:"Piège fréquent : oublier de valoriser les stocks ! Il faut compter ET attribuer une valeur monétaire."},
      {q:"Avec l'inventaire intermittent, pendant l'exercice, les achats sont enregistrés en :",opts:["Classe 3 uniquement","Classe 6 (charges) et ventes en classe 7","Classe 4 pour tous les flux","Classe 1"],ans:1,expl:"Avec l'inventaire intermittent pendant l'exercice : achats → classe 6, ventes → classe 7. Classe 3 uniquement à la clôture."}
    ]
  },

  {
    id:"boost_03", date:"16/04/2026", icon:"👥",
    label:"Paie & Salaire", sub:"Brut, net, cotisations, avance vs acompte",
    color:"#f76a6a",
    questions:[
      {q:"Que représente le salaire brut ?",opts:["Le salaire avant déductions sociales","Le salaire net imposable","Le salaire après charges patronales","Le salaire après impôts"],ans:0,expl:"Le salaire brut correspond à la rémunération totale avant toute déduction. Les cotisations sociales sont ensuite retirées."},
      {q:"Le salaire net correspond à :",opts:["Salaire brut - cotisations sociales","Salaire brut + charges","Salaire brut - impôts uniquement","Salaire brut + primes"],ans:0,expl:"Le salaire net = Brut - cotisations sociales salariales. C'est ce que le salarié reçoit effectivement."},
      {q:"Quelle charge est une charge salariale ?",opts:["Cotisation retraite","TVA","Taxe foncière","Impôt sur les sociétés"],ans:0,expl:"Les cotisations retraite font partie des charges sociales salariales, prélevées sur le salaire brut."},
      {q:"Les charges patronales sont :",opts:["Payées par le salarié","Payées par l'employeur","Facultatives","Incluses dans le net"],ans:1,expl:"Les charges patronales sont à la charge de l'employeur. Elles s'ajoutent au salaire brut pour déterminer le coût total."},
      {q:"Le net imposable correspond à :",opts:["Le net à payer","Le brut diminué des charges patronales","Le montant soumis à l'impôt","Le net avant cotisations"],ans:2,expl:"Le net imposable est la base utilisée pour calculer l'impôt sur le revenu."},
      {q:"Une avance sur salaire correspond à :",opts:["Une prime exceptionnelle","Un salaire déjà travaillé","Un prêt sans remboursement","Un paiement anticipé d'un travail futur"],ans:3,expl:"L'avance est versée pour un travail non encore effectué. Elle sera déduite des futurs salaires."},
      {q:"Un acompte sur salaire correspond à :",opts:["Une dette","Une prime","Un salaire déjà travaillé","Un salaire futur"],ans:2,expl:"L'acompte est le paiement d'une partie du salaire correspondant à un travail déjà réalisé."},
      {q:"L'employeur peut refuser un acompte à un salarié mensualisé ?",opts:["Non jamais","Oui toujours","Oui selon le montant","Non, c'est un droit pour le salarié mensualisé"],ans:3,expl:"Pour les salariés mensualisés, l'acompte est un droit. L'employeur ne peut pas le refuser."}
    ]
  },

  {
    id:"boost_04", date:"15/04/2026", icon:"⚖️",
    label:"Bilan & Compte de résultat", sub:"Structure, équilibre, classes 6 et 7",
    color:"#f7c06a",
    questions:[
      {q:"Qu'est-ce que le bilan comptable ?",opts:["Un document qui décrit la situation patrimoniale","Un état des flux de trésorerie","Un tableau des charges et produits","Un relevé de trésorerie mensuel"],ans:0,expl:"Le bilan décrit la situation patrimoniale de l'entreprise à une date donnée."},
      {q:"Que trouve-t-on à l'actif du bilan ?",opts:["Ce que l'entreprise possède (emplois)","Les dettes et le capital social","Les produits encaissés","Les charges de l'exercice"],ans:0,expl:"L'actif représente ce que l'entreprise possède : immobilisations, stocks, créances, trésorerie…"},
      {q:"Que représente le passif du bilan ?",opts:["Les ressources qui ont financé l'actif","Les charges à payer","Les biens achetés dans l'année","Le chiffre d'affaires annuel"],ans:0,expl:"Le passif regroupe les ressources : capitaux propres, emprunts, dettes fournisseurs…"},
      {q:"Quelle égalité fondamentale s'applique toujours au bilan ?",opts:["Actif = Passif","Charges = Produits","Actif = Résultat net","Débit = Solde final"],ans:0,expl:"Le bilan est toujours équilibré : total Actif = total Passif."},
      {q:"Où classe-t-on les emprunts bancaires au bilan ?",opts:["Passif - capitaux propres","Passif - dettes financières","Actif circulant","Actif immobilisé"],ans:1,expl:"Les emprunts sont des dettes financières, classées au passif du bilan (compte 164)."},
      {q:"Qu'est-ce que le compte de résultat ?",opts:["Un état de la trésorerie","Un document récapitulant charges et produits","Un tableau de la situation patrimoniale","Un relevé des mouvements bancaires"],ans:1,expl:"Le compte de résultat récapitule l'ensemble des charges et produits de l'exercice."},
      {q:"Comment calcule-t-on le résultat de l'exercice ?",opts:["Charges - Produits","Ventes - Achats uniquement","Produits - Charges","Actif - Passif"],ans:2,expl:"Résultat = Produits - Charges. Si positif : bénéfice. Si négatif : perte."},
      {q:"Dans quelle classe du PCG se trouvent les charges ?",opts:["Classe 6","Classe 7","Classes 4 et 5","Classes 1 et 2"],ans:0,expl:"Les charges sont enregistrées dans les comptes de classe 6 du PCG."},
      {q:"Dans quelle classe du PCG se trouvent les produits ?",opts:["Classe 6","Classe 7","Classe 5","Classe 2"],ans:1,expl:"Les produits sont enregistrés dans les comptes de classe 7 du PCG."}
    ]
  },

  {
    id:"boost_05", date:"09/04/2026", icon:"📊",
    label:"Infographie & Data visualisation", sub:"Supports de communication, canaux, lisibilité",
    color:"#6aaaf7",
    questions:[
      {q:"Quel support est le plus adapté pour résumer visuellement des données chiffrées ?",opts:["Lettre de motivation","Infographie","Procès-verbal","Note de service"],ans:1,expl:"Une infographie synthétise l'information et facilite la lecture rapide avec peu de texte et des visuels."},
      {q:"Quel outil sert surtout à représenter des données sous forme de graphiques ?",opts:["Data visualisation","Storyboard","Blog","Affiche"],ans:0,expl:"La data visualisation transforme des données en graphiques lisibles et comparables."},
      {q:"Quel canal est le plus adapté pour toucher rapidement un large public externe ?",opts:["Archivage interne","Réseaux sociaux","Tampon humide","Classeur papier"],ans:1,expl:"Les réseaux sociaux permettent une diffusion rapide et large vers un public externe."},
      {q:"Quel indicateur mesure le mieux l'impact d'une diffusion en ligne ?",opts:["Couleur du fond","Taux d'engagement","Format de police","Nom du fichier"],ans:1,expl:"Le taux d'engagement mesure l'intérêt réel du public à travers les clics, partages et interactions."},
      {q:"Quel critère guide d'abord le choix du support de communication ?",opts:["La taille du bureau","La couleur","L'objectif","Le prénom du destinataire"],ans:2,expl:"Le support se choisit d'abord selon l'objectif : informer, convaincre, expliquer ou comparer."},
      {q:"Quel support est le plus adapté pour comparer des chiffres sur plusieurs périodes ?",opts:["Une carte de visite","Une enveloppe","Une affiche décorative","Un graphique"],ans:3,expl:"Un graphique facilite la comparaison de valeurs dans le temps."},
      {q:"Quel élément doit rester simple dans une infographie ?",opts:["Le nom du logiciel","Le mot de passe","La signature","Le message principal"],ans:3,expl:"Une infographie doit aller à l'essentiel. Trop d'informations nuisent à la lecture."},
      {q:"Quelle pratique améliore la lisibilité d'une data visualisation ?",opts:["Choisir des titres clairs","Ajouter du texte long","Réduire la taille des chiffres","Multiplier les couleurs"],ans:0,expl:"Des titres clairs aident à comprendre immédiatement ce que montre le graphique."}
    ]
  },

  {
    id:"boost_06", date:"10/04/2026", icon:"🔷",
    label:"Diagrammes, flux & RACI", sub:"Parties prenantes, circuits de validation, matrice RACI",
    color:"#c06af7",
    questions:[
      {q:"Quel est l'objectif principal d'une analyse des parties prenantes ?",opts:["Rédiger un bilan annuel","Identifier les acteurs et leurs attentes","Choisir le logiciel comptable"],ans:1,expl:"L'analyse des parties prenantes sert à repérer les acteurs concernés, leurs attentes et leur influence."},
      {q:"À quoi sert une cartographie des parties prenantes ?",opts:["Remplacer le budget","Visualiser les acteurs et leur lien avec le projet","Calculer la TVA"],ans:1,expl:"La cartographie aide à voir qui agit, qui décide et qui doit être informé."},
      {q:"Dans un diagramme de flux, que représente une flèche ?",opts:["Le montant d'une facture","Le sens de circulation de l'information","Le nom du service"],ans:1,expl:"Les flèches montrent l'enchaînement des étapes et le chemin suivi par un document ou une information."},
      {q:"Quel est l'intérêt d'un diagramme de flux ?",opts:["Comprendre le déroulement d'un processus","Supprimer les contrôles","Augmenter les charges"],ans:0,expl:"Le diagramme de flux aide à visualiser les étapes, repérer les blocages et simplifier un circuit."},
      {q:"Dans un circuit de validation, qui intervient en premier ?",opts:["La personne qui prépare le document","L'archiviste en dernier recours","Le contrôleur final"],ans:0,expl:"En général, le document est d'abord préparé ou saisi avant d'être contrôlé et validé."},
      {q:"Quel est le rôle principal d'un circuit de validation ?",opts:["Éviter toute trace écrite","Sécuriser et contrôler les opérations","Remplacer les pièces comptables"],ans:1,expl:"Le circuit de validation précise qui contrôle, qui approuve et dans quel ordre."},
      {q:"Dans la matrice RACI, que signifie la lettre A ?",opts:["Approuve ou est responsable final","Analyse","Archive"],ans:0,expl:"A correspond à la personne qui valide ou porte la responsabilité finale de l'activité."},
      {q:"Dans RACI, que signifie la lettre C ?",opts:["Consulté","Comptabilisé","Contrôlé"],ans:0,expl:"C désigne les personnes consultées avant de prendre une décision."},
      {q:"Dans RACI, que signifie la lettre I ?",opts:["Informé","Intervenant","Inspecteur"],ans:0,expl:"I correspond aux personnes informées de l'avancement, sans participation directe."}
    ]
  },

  {
    id:"boost_07", date:"07/04/2026", icon:"🧾",
    label:"Factures & TVA — Débit/Crédit", sub:"Comptes 401, 411, TVA 44571 / 44566",
    color:"#f7a06a",
    questions:[
      {q:"Quel est le numéro du compte de TVA collectée ?",opts:["44571","44557","44566","44580"],ans:0,expl:"Le compte 44571 « TVA collectée » enregistre la TVA facturée aux clients. Elle est due à l'État."},
      {q:"Quel est le numéro du compte de TVA déductible sur achats de biens et services ?",opts:["44571","44566","44562","44580"],ans:1,expl:"Le compte 44566 « TVA déductible sur ABS » enregistre la TVA récupérable sur les achats courants."},
      {q:"Dans une facture d'achat, le compte de charge est enregistré à quel endroit ?",opts:["Au débit","Au crédit","Cela dépend du montant","Ni débit ni crédit"],ans:0,expl:"Les charges augmentent au débit. Une facture d'achat enregistre la charge (ex : 607) au débit."},
      {q:"Dans un avoir fournisseur, le compte de charge est enregistré à quel endroit ?",opts:["Au débit","Au crédit","Ni l'un ni l'autre","Hors bilan"],ans:1,expl:"L'avoir annule ou réduit la charge initiale. On crédite le compte de charge pour diminuer son solde débiteur."},
      {q:"Dans une facture de vente, le compte de produit est enregistré à quel endroit ?",opts:["Hors journal","En solde","Au crédit","Au débit"],ans:2,expl:"Les produits augmentent au crédit. Une vente enregistre le produit (ex : 707) au crédit."},
      {q:"Dans un avoir client, le compte de produit est enregistré à quel endroit ?",opts:["Au débit","Il n'y a pas de produit","Au crédit","En dehors du journal"],ans:0,expl:"L'avoir annule le produit. On débite le compte de produit pour diminuer son solde créditeur."},
      {q:"Dans une facture d'achat, le compte fournisseur (401) est enregistré comment ?",opts:["En compensation","Au débit","À l'actif du bilan","Au crédit"],ans:3,expl:"Le 401 représente une dette envers le fournisseur. Une dette augmente au crédit."},
      {q:"Dans un avoir fournisseur, le compte 401 est enregistré comment ?",opts:["Hors bilan","En solde","Au débit","Au crédit"],ans:2,expl:"L'avoir réduit la dette envers le fournisseur. On débite le 401 pour diminuer son solde créditeur."},
      {q:"Dans une facture de vente, le compte client (411) est enregistré comment ?",opts:["En résultat","Au débit","Au crédit","En produit"],ans:1,expl:"Le 411 représente une créance sur le client. Une créance augmente au débit."}
    ]
  },

  {
    id:"boost_08", date:"01/04/2026", icon:"🗂️",
    label:"Organisation & Gestion admin", sub:"Classement, compte rendu, animation, transversalité",
    color:"#6af7b0",
    questions:[
      {q:"Pour classer rapidement des fichiers numériques, que faut-il privilégier ?",opts:["Des fichiers non datés","Une arborescence logique","Un seul dossier unique","Des noms aléatoires"],ans:1,expl:"Une arborescence claire facilite la recherche, le partage et la continuité du travail."},
      {q:"Quel document sert à présenter l'avancement d'une activité ?",opts:["Facture","Compte rendu","Bon de commande","Planning"],ans:1,expl:"Le compte rendu synthétise une réunion ou une intervention pour informer clairement les autres acteurs."},
      {q:"Quel outil aide le mieux à maintenir l'engagement pendant une animation ?",opts:["Silence complet","Questions collectives","Lecture mot à mot","Monologue long"],ans:1,expl:"Les questions collectives favorisent la participation et l'implication du groupe."},
      {q:"Quel document permet de formaliser une demande d'achat ?",opts:["Bon de commande","Agenda","Relevé bancaire","Facture"],ans:0,expl:"Le bon de commande précise ce qui est demandé, en quelle quantité et dans quelles conditions."},
      {q:"Quelle pratique aide à organiser son espace de travail ?",opts:["Classer par priorité","Mélanger papier et tâches","Empiler les dossiers","Laisser les pièces sans ordre"],ans:0,expl:"Classer par priorité permet de traiter d'abord les urgences et de réduire les oublis."},
      {q:"Dans une intervention transverse, quel réflexe est le plus utile ?",opts:["Travailler sans informer personne","Clarifier son rôle","Changer d'objectif seul","Attendre la fin du projet"],ans:1,expl:"Clarifier son rôle évite les doublons, les oublis et les malentendus entre services."},
      {q:"Quel document suit les opérations d'un dossier client ou fournisseur ?",opts:["Dossier de suivi","Carte de visite","Note de frais","Calendrier scolaire"],ans:0,expl:"Le dossier de suivi rassemble les informations utiles pour assurer la continuité et la traçabilité."},
      {q:"Pour rester concentré, que faut-il faire en premier ?",opts:["Ouvrir plusieurs onglets","Commencer sans objectif","Reporter toutes les tâches","Fermer les distractions"],ans:3,expl:"Réduire les distractions aide à garder un rythme stable et à limiter les erreurs."},
      {q:"Que doit contenir un document professionnel bien présenté ?",opts:["Des phrases très longues","Une structure claire","Des informations non vérifiées","Des couleurs au hasard"],ans:1,expl:"Une structure claire facilite la lecture, le repérage des informations et la crédibilité du document."}
    ]
  },

  {
    id:"boost_09", date:"13/04/2026", icon:"📋",
    label:"Balance & Grand Livre", sub:"Balance générale, âgée, RAN, partie double",
    color:"#f76ab0",
    questions:[
      {q:"Qu'est-ce qu'une balance comptable ?",opts:["Un relevé bancaire mensuel","Un instrument de contrôle et source d'informations","Un document obligatoire comme le bilan","Un registre des factures fournisseurs"],ans:1,expl:"La balance est un instrument de contrôle et source d'informations. Elle n'est pas obligatoire, mais très utile."},
      {q:"La balance comptable est-elle un document obligatoire ?",opts:["Non, et elle est rarement utilisée","Oui, au même titre que le journal","Oui, uniquement pour les SA","Non, mais elle est très utile"],ans:3,expl:"La balance n'est pas obligatoire, mais très utile pour suivre et réviser la comptabilité."},
      {q:"Quel principe la balance permet-elle de vérifier ?",opts:["Le principe de prudence","Le principe de permanence des méthodes","Le principe de continuité","Le principe de la partie double"],ans:3,expl:"La balance vérifie que le total des débits = total des crédits — c'est le principe de la partie double."},
      {q:"Qu'indique la balance pour chaque compte ?",opts:["Le détail de chaque facture","Les mouvements et le solde de chaque compte","Uniquement le solde débiteur","Uniquement les débits"],ans:1,expl:"La balance fournit les mouvements et le solde de chaque compte utilisé."},
      {q:"Comment les comptes sont-ils classés dans une balance générale ?",opts:["Par ordre décroissant","Par ordre chronologique","Par ordre croissant de numéro de compte","Par ordre alphabétique"],ans:2,expl:"Les comptes sont classés par ordre croissant de numéro, de la classe 1 vers les classes supérieures."},
      {q:"Quel document est établi avant la balance dans la chaîne comptable ?",opts:["Le Grand Livre","La déclaration de TVA","Le bilan","Le compte de résultat"],ans:0,expl:"La chaîne est : Journal → Grand Livre → Balance → Bilan & Résultat."},
      {q:"Dans une balance complète, le total des débits est égal à :",opts:["Le double du total des crédits","Le résultat net","La moitié du total des crédits","Le total des crédits"],ans:3,expl:"Par le principe de la partie double, total débits = total crédits dans toute balance complète."},
      {q:"Dans le Grand Livre, les montants débités s'inscrivent :",opts:["À droite du compte","Au centre","À gauche du compte","En bas"],ans:2,expl:"Dans le Grand Livre, la page de gauche accueille les débits, la droite les crédits."},
      {q:"Que signifie RAN dans le Grand Livre ?",opts:["Résultat À Neutraliser","Résultat Annuel Net","Report À Nouveau","Registre À Numéroter"],ans:2,expl:"RAN = Report À Nouveau. C'est le solde reporté d'un exercice à l'autre."},
      {q:"De quel côté inscrit-on le solde débiteur dans un compte en T ?",opts:["Il n'apparaît pas","Des deux côtés","Du côté crédit","Du côté débit"],ans:2,expl:"Le solde débiteur s'inscrit du côté crédit pour équilibrer le total — convention comptable."},
      {q:"Il existe combien de grandes catégories de balances ?",opts:["Deux : générales et âgées","Quatre","Trois","Une seule"],ans:0,expl:"Il existe deux grandes catégories : la balance générale et la balance âgée."},
      {q:"Sur quel critère la balance âgée répartit-elle les montants ?",opts:["Le montant des factures","La date d'échéance de la créance ou de la dette","La nature des produits","Le secteur géographique"],ans:1,expl:"La balance âgée répartit les montants selon la date d'échéance de chaque créance ou dette."},
      {q:"À quoi sert principalement une balance âgée ?",opts:["Calculer le résultat","Contrôler les déclarations de TVA","Établir les fiches de paie","Anticiper l'état de la trésorerie"],ans:3,expl:"La balance âgée permet d'anticiper l'état de la trésorerie à venir."},
      {q:"Le compte 401 est crédité à réception d'une facture, puis :",opts:["Crédité à nouveau lors du paiement","Débité lors du paiement","Supprimé après paiement","Transféré au compte 411"],ans:1,expl:"Le compte 401 est crédité à réception (dette augmente) et débité lors du paiement (dette diminue)."}
    ]
  },

  {
    id:"boost_10", date:"13/03/2026", icon:"🎯",
    label:"PCG — Quiz général (13 mars)", sub:"Principes comptables, bilan, comptes clés",
    color:"#a0f76a",
    questions:[
      {q:"Le principe de non-compensation impose :",opts:["De prudence dans les évaluations","De ne pas compenser un poste d'actif avec un poste de passif","De permanence des méthodes","D'indépendance des exercices"],ans:1,expl:"Le principe de non-compensation (PCG art. 120-3) interdit de compenser des éléments d'actif et de passif."},
      {q:"Le résultat de l'exercice est égal à :",opts:["Actif – Passif du bilan","Total des produits – Total des charges","Chiffre d'affaires – Achats","Capitaux propres + Dettes"],ans:1,expl:"Résultat = Total produits – Total charges. Il apparaît aussi au passif du bilan dans les capitaux propres."},
      {q:"La classe de comptes 6 regroupe :",opts:["Les comptes de bilan (actif)","Les comptes de charges","Les comptes de produits","Les comptes de tiers"],ans:1,expl:"Classe 6 = comptes de charges. Ils sont soldés en fin d'exercice lors de la détermination du résultat."},
      {q:"Une facture d'avoir reçue d'un fournisseur de marchandises est comptabilisée au :",opts:["Débit 607 / Crédit 401","Débit 401 / Crédit 607","Débit 607 / Crédit 512","Débit 401 / Crédit 512"],ans:1,expl:"Un avoir fournisseur réduit la dette (débit 401) et réduit les charges d'achat (crédit 607)."},
      {q:"Le principe de prudence implique :",opts:["D'enregistrer uniquement les produits certains et de provisionner les risques probables","De comptabiliser tous les produits espérés","De compenser pertes et gains","D'évaluer les actifs à leur valeur de marché"],ans:0,expl:"Le principe de prudence impose de comptabiliser les produits réalisés et de provisionner les risques probables."},
      {q:"Le compte 401 'Fournisseurs' a normalement un solde :",opts:["Débiteur","Créditeur","Nul","Variable"],ans:1,expl:"Le compte 401 est un compte de passif. Il a un solde créditeur représentant ce que l'entreprise doit."},
      {q:"La valeur nette d'un actif au bilan est égale à :",opts:["Valeur brute + Amortissements","Valeur brute – Amortissements et dépréciations","Coût d'acquisition – Valeur résiduelle","Prix de vente – Plus-value"],ans:1,expl:"Valeur nette = Brut – Amortissements et dépréciations cumulés."},
      {q:"La capacité d'autofinancement (CAF) approximative se calcule comme :",opts:["Résultat net + Dotations aux amortissements et provisions","CA – Charges variables","Résultat net – Dividendes versés","EBE – Charges financières nettes"],ans:0,expl:"CAF ≈ Résultat net + charges calculées non décaissables (dotations) – produits calculés non encaissables."}
    ]
  }

  // ══════════════════════════════════════════════════════════════════
  //  ↑ COLLE TON NOUVEAU BOOST ICI (avec une virgule après le } précédent)
  // ══════════════════════════════════════════════════════════════════

]; // FIN DU TABLEAU BOOSTS

// ──────────────────────────────────────────────
//  MOTEUR — ne pas modifier en dessous
// ──────────────────────────────────────────────

const STORAGE_KEY = "revision_compta_v2";
function loadHistory(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");}catch(e){return [];}}
function saveHistory(h){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(h));}catch(e){}}

let currentBoostId=null,currentQuestions=[],currentIndex=0,selectedOption=null,answered=false,correctCount=0,wrongCount=0;

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(t=>t.classList.remove("active"));
  document.getElementById("page-"+id).classList.add("active");
  const map={accueil:0,boosts:1,biblio:2};
  if(map[id]!==undefined) document.querySelectorAll(".nav-tab")[map[id]].classList.add("active");
  if(id==="accueil") renderAccueil();
  if(id==="boosts") renderBoosts();
}

function renderAccueil(){
  const now=new Date();
  document.getElementById("hero-date").textContent=now.toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
  const history=loadHistory();
  document.getElementById("stat-total").textContent=history.length;
  const uniq=new Set(history.map(h=>h.id)).size;
  document.getElementById("stat-uniq").textContent=uniq;
  if(history.length>0){
    const pcts=history.map(h=>h.pct);
    document.getElementById("stat-best").textContent=Math.max(...pcts)+"%";
    document.getElementById("stat-avg").textContent=Math.round(pcts.reduce((a,b)=>a+b,0)/pcts.length)+"%";
  }
  const el=document.getElementById("boost-history");
  if(history.length===0){el.innerHTML='<div class="boost-empty">Aucun boost complété pour l\'instant — lance ton premier !</div>';return;}
  el.innerHTML=[...history].reverse().map(h=>{
    const b=BOOSTS.find(x=>x.id===h.id)||{};
    const cls=h.pct>=80?"score-great":h.pct>=50?"score-ok":"score-low";
    return `<div class="boost-row" onclick="startBoost('${h.id}')">
      <div class="boost-row-dot" style="background:${b.color||'#7c6af7'}"></div>
      <div class="boost-row-theme">${b.icon||"⚡"} ${b.label||h.id}</div>
      <div class="boost-row-date">${h.date}</div>
      <div class="boost-row-score ${cls}">${h.score}/${h.total} — ${h.pct}%</div>
      <div class="boost-row-btn">Rejouer</div>
    </div>`;
  }).join("");
}

function renderBoosts(){
  const history=loadHistory();
  document.getElementById("boost-grid").innerHTML=BOOSTS.map(b=>{
    const entries=history.filter(h=>h.id===b.id);
    const bestPct=entries.length>0?Math.max(...entries.map(h=>h.pct)):null;
    const bestColor=bestPct===null?"var(--text-dim)":bestPct>=80?"var(--green)":bestPct>=50?"var(--gold)":"var(--red)";
    const bestTxt=bestPct===null?"Pas encore joué":`Meilleur : ${bestPct}%`;
    return `<div class="boost-card" style="--c:${b.color}" onclick="startBoost('${b.id}')">
      <div class="boost-card-icon">${b.icon}</div>
      <div class="boost-card-date">${b.date}</div>
      <div class="boost-card-theme">${b.label}</div>
      <div class="boost-card-sub">${b.sub}</div>
      <div class="boost-card-meta">
        <span class="boost-card-count">${b.questions.length} questions</span>
        <span class="boost-card-best" style="color:${bestColor}">${bestTxt}</span>
      </div>
    </div>`;
  }).join("");
}

function startBoost(id){
  const boost=BOOSTS.find(b=>b.id===id);
  if(!boost) return;
  currentBoostId=id; currentQuestions=[...boost.questions];
  currentIndex=0; correctCount=0; wrongCount=0; selectedOption=null; answered=false;
  document.getElementById("quiz-title").textContent=boost.icon+" "+boost.label;
  document.getElementById("quiz-subtitle").textContent=boost.questions.length+" questions · "+boost.date;
  document.getElementById("quiz-question-view").style.display="block";
  document.getElementById("quiz-results-view").style.display="none";
  document.getElementById("quiz-overlay").classList.add("active");
  renderQuestion();
}

function closeQuiz(){document.getElementById("quiz-overlay").classList.remove("active"); renderBoosts();}

function renderQuestion(){
  const q=currentQuestions[currentIndex];
  const total=currentQuestions.length;
  document.getElementById("quiz-progress").style.width=(currentIndex/total*100)+"%";
  document.getElementById("quiz-q-num").textContent="Question "+(currentIndex+1)+" / "+total;
  document.getElementById("quiz-question").textContent=q.q;
  const letters=["A","B","C","D","E"];
  document.getElementById("quiz-options").innerHTML=q.opts.map((opt,i)=>
    `<div class="quiz-option" id="opt-${i}" onclick="selectOption(${i})">
      <div class="opt-letter">${letters[i]}</div><div>${opt}</div>
    </div>`).join("");
  document.getElementById("quiz-feedback").classList.remove("show");
  const bv=document.getElementById("btn-validate");
  bv.disabled=true; bv.style.display="block";
  document.getElementById("btn-next").style.display="none";
  selectedOption=null; answered=false;
}

function selectOption(i){
  if(answered) return;
  selectedOption=i;
  document.querySelectorAll(".quiz-option").forEach((el,j)=>el.classList.toggle("selected",j===i));
  document.getElementById("btn-validate").disabled=false;
}

function validateAnswer(){
  if(selectedOption===null||answered) return;
  answered=true;
  const q=currentQuestions[currentIndex];
  const ok=selectedOption===q.ans;
  document.querySelectorAll(".quiz-option").forEach((el,j)=>{
    el.classList.add("locked");
    if(j===q.ans) el.classList.add("correct");
    else if(j===selectedOption&&!ok) el.classList.add("wrong");
  });
  if(ok) correctCount++; else wrongCount++;
  const fb=document.getElementById("quiz-feedback");
  fb.className="quiz-feedback show "+(ok?"correct-fb":"wrong-fb");
  fb.innerHTML=`<div class="fb-label ${ok?"ok":"ko"}">${ok?"✓ Correct !":"✗ Incorrect"}</div>${q.expl}`;
  document.getElementById("btn-validate").style.display="none";
  const bn=document.getElementById("btn-next");
  bn.style.display="block";
  bn.textContent=currentIndex===currentQuestions.length-1?"Voir les résultats →":"Question suivante →";
}

function nextQuestion(){
  currentIndex++;
  if(currentIndex>=currentQuestions.length) showResults();
  else renderQuestion();
}

function showResults(){
  const total=currentQuestions.length;
  const pct=Math.round(correctCount/total*100);
  document.getElementById("quiz-progress").style.width="100%";
  document.getElementById("quiz-question-view").style.display="none";
  document.getElementById("quiz-results-view").style.display="block";
  let emoji,label;
  if(pct===100){emoji="🏆";label="Score parfait — Bravo !";}
  else if(pct>=80){emoji="🎉";label="Excellent — Continue comme ça !";}
  else if(pct>=60){emoji="👍";label="Bien — Quelques points à consolider.";}
  else if(pct>=40){emoji="📚";label="À retravailler — Revois le cours !";}
  else{emoji="💪";label="Courage — On recommence !";}
  document.getElementById("result-emoji").textContent=emoji;
  document.getElementById("result-score").textContent=pct+"%";
  document.getElementById("result-label").textContent=label;
  document.getElementById("rb-correct").textContent="✓ "+correctCount+" correct"+(correctCount>1?"s":"");
  document.getElementById("rb-wrong").textContent="✗ "+wrongCount+" incorrect"+(wrongCount>1?"s":"");
  const now=new Date();
  const history=loadHistory();
  history.push({id:currentBoostId,date:now.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" à "+now.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),score:correctCount,total,pct});
  saveHistory(history);
}

function retryQuiz(){startBoost(currentBoostId);}

window.addEventListener("DOMContentLoaded",()=>{renderAccueil(); renderBoosts();});


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
      
      {q:"Dans un compte en T équilibré, où inscrit-on le solde débiteur pour équilibrer les colonnes ?",opts:["Il n'apparaît pas","Des deux côtés","Du côté crédit","Du côté débit"],ans:2,expl:"Le solde débiteur s'inscrit du côté crédit pour équilibrer le total — convention comptable."},
      
      {q:"Il existe combien de grandes catégories de balances ?",opts:["Deux : générales et âgées","Quatre","Trois","Une seule"],ans:0,expl:"Il existe deux grandes catégories : la balance générale et la balance âgée."},
      {q:"Sur quel critère la balance âgée répartit-elle les montants ?",opts:["Le montant des factures","La date d'échéance de la créance ou de la dette","La nature des produits","Le secteur géographique"],ans:1,expl:"La balance âgée répartit les montants selon la date d'échéance de chaque créance ou dette."},
      {q:"À quoi sert principalement une balance âgée ?",opts:["Calculer le résultat","Contrôler les déclarations de TVA","Établir les fiches de paie","Anticiper l'état de la trésorerie"],ans:3,expl:"La balance âgée permet d'anticiper l'état de la trésorerie à venir."},
      {q:"Le compte 401 est crédité à réception d'une facture, puis :",opts:["Crédité à nouveau lors du paiement","Débité lors du paiement","Supprimé après paiement","Transféré au compte 411"],ans:1,expl:"Le compte 401 est crédité à réception (dette augmente) et débité lors du paiement (dette diminue)."}
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
  id: "boost_16",
  date: "23/04/2026",
  icon: "🌍",
  label: "Quiz TVA UE & étranger",
  sub: "Révisions TVA intracommunautaire et import/export",
  color: "#5b7cff",

  questions: [

    {
      q: "Une vente de biens à un client assujetti en Allemagne est :",
      opts: [
        "Hors champ de TVA",
        "Exonérée de TVA française",
        "Soumise à TVA française",
        "Soumise à TVA allemande dès la facturation"
      ],
      ans: 1,
      expl: "Une livraison intracommunautaire à un assujetti européen peut être exonérée de TVA française sous conditions."
    },

    {
      q: "Un achat de marchandises à un fournisseur italien par une société française est :",
      opts: [
        "Une exportation",
        "Une prestation de services",
        "Une acquisition intracommunautaire",
        "Une importation"
      ],
      ans: 2,
      expl: "Un achat entre deux pays de l'Union Européenne constitue une acquisition intracommunautaire."
    },

    {
      q: "La TVA sur une acquisition intracommunautaire est en principe :",
      opts: [
        "Toujours exonérée",
        "Due uniquement dans le pays d’origine",
        "Facturée par le fournisseur",
        "Autoliquidée"
      ],
      ans: 3,
      expl: "La TVA sur les acquisitions intracommunautaires est autoliquidée par l'entreprise française."
    },

    {
      q: "L'autoliquidation de la TVA signifie que :",
      opts: [
        "Il faut payer la TVA sur l'achat à l'État",
        "On enregistre en même temps une TVA due et une TVA déductible",
        "Le fournisseur doit faire la déclaration"
      ],
      ans: 1,
      expl: "L'autoliquidation consiste à enregistrer simultanément une TVA collectée et une TVA déductible."
    },

    {
      q: "Pour une livraison intracommunautaire, la vente est enregistrée :",
      opts: [
        "Avec TVA étrangère du client",
        "Avec TVA française sur le chiffre d’affaires",
        "En hors comptabilité",
        "Sans TVA collectée, si les conditions sont remplies"
      ],
      ans: 3,
      expl: "Les livraisons intracommunautaires peuvent être exonérées de TVA française sous certaines conditions."
    },

    {
      q: "Quel compte est utilisé pour la TVA déductible sur acquisitions intracommunautaires ?",
      opts: [
        "44562",
        "445662",
        "401",
        "4452"
      ],
      ans: 1,
      expl: "Le compte 445662 correspond à la TVA déductible intracommunautaire."
    },

    {
      q: "Quel compte est utilisé pour constater la TVA due sur acquisitions intracommunautaires ?",
      opts: [
        "44562",
        "445712",
        "4452",
        "4455"
      ],
      ans: 1,
      expl: "Le compte 445712 sert à enregistrer la TVA due intracommunautaire."
    },

    {
      q: "À l’entrée de biens en France depuis la Chine, on parle de :",
      opts: [
        "Une acquisition extra-communautaire",
        "Une exportation",
        "Une prestation de services",
        "Une importation"
      ],
      ans: 3,
      expl: "L'entrée de biens depuis un pays hors UE correspond à une importation."
    },

    {
  q: "À la réception d’une facture d’achat d'importation, la TVA est généralement :",
  opts: [
    "Jamais comptabilisée",
    "Toujours payée à l’État d’origine",
    "Comptabilisée uniquement en charge",
    "Autoliquidée avec TVA due et TVA déductible"
  ],
  ans: 3,
  expl:"La TVA d'importation peut être autoliquidée avec enregistrement simultané d'une TVA collectée et d'une TVA déductible."
},

    {
      q: "Une exportation de biens vers le Canada est en principe :",
      opts: [
        "Comptabilisée comme une acquisition intracommunautaire",
        "Exonérée de TVA française",
        "Soumise à TVA française",
        "Taxée dans tous les cas en France"
      ],
      ans: 1,
      expl: "Les exportations hors UE sont généralement exonérées de TVA française."
    },

    {
      q: "Quel compte est généralement utilisé pour la TVA déductible sur une importation ?",
      opts: [
        "445662",
        "445663",
        "44562",
        "44566"
      ],
      ans: 1,
      expl: "Le compte 445663 est utilisé pour la TVA déductible sur autres biens et services/importations."
    }

  ]
},

  {
    id:"boost_11", date:"27/04/2026", icon:"🧾",
    label:"TVA & Calculs", sub:"Taux, HT/TTC, comptes 44562/44566/44571, franchise",
    color:"#ff4d6d",
    questions:[
      {q:"Une facture mentionne 1 000 € HT et TVA 20 %. Quel est le montant TTC ?",opts:["1 200 €","1 020 €","1 002 €","1 100 €"],ans:0,expl:"TVA = 1 000 × 20 % = 200 €. Montant TTC = 1 000 + 200 = 1 200 €. Le TTC correspond au montant facturé au client, TVA incluse."},
      
      
      {q:"Une entreprise perçoit 600 € TTC (TVA 20 %). Quel est le montant HT ?",opts:["500 €","480 €","580 €","520 €"],ans:0,expl:"Pour retrouver le HT depuis le TTC : 600 / 1,20 = 500 €. La TVA est donc de 100 €. Diviser par 1,20 est le réflexe à avoir pour un taux de 20 %."},
      
      {q:"Qui collecte la TVA et la reverse à l'État ?",opts:["L'assujetti vendeur","La banque","L'expert-comptable","Le client final"],ans:0,expl:"C'est l'assujetti vendeur (l'entreprise) qui collecte la TVA auprès de ses clients et la reverse ensuite à l'État, déduction faite de la TVA déductible sur ses propres achats."},
      
      {q:"Un médecin libéral réalise des consultations. Ses honoraires sont-ils soumis à TVA ?",opts:["Oui, au taux de 10 %","Non, les soins médicaux sont exonérés","Oui, au taux de 20 %","Oui, au taux de 5,5 %"],ans:1,expl:"Les actes médicaux et soins dispensés par les membres des professions médicales sont exonérés de TVA. Le médecin ne collecte pas de TVA et ne peut pas non plus déduire la TVA sur ses achats."},
      
      
      {q:"Quel taux de TVA s'applique aux livres papier et livres numériques ?",opts:["10 %","2,1 %","5,5 %","20 %"],ans:2,expl:"Les livres, qu'ils soient papier ou numériques, sont soumis au taux réduit de 5,5 %. C'est une exception notable car les produits numériques sont en général taxés à 20 %."},
      
         {q:"Une entreprise achète du mobilier de bureau pour 2 400 € TTC (TVA 20 %). Quel compte TVA débite-t-elle ?",opts:["44571 pour 400 €","44551 pour 400 €","44566 pour 400 €","44562 pour 400 €"],ans:3,expl:"Le matériel de bureau est une immobilisation. La TVA déductible est enregistrée au débit du compte 44562 « TVA déductible sur immobilisations ». TVA = 2 400 / 1,20 × 20 % = 400 €."},
      
      
      {q:"Une entreprise achète des fournitures de bureau pour 240 € TTC (TVA 20 %). Quel compte TVA ?",opts:["44566 pour 40 €","44551 pour 40 €","44571 pour 40 €","44562 pour 40 €"],ans:0,expl:"Les fournitures de bureau sont des charges courantes. La TVA déductible est enregistrée au débit du compte 44566 « TVA déductible sur autres biens et services ». TVA = 240 / 1,20 × 20 % = 40 €."},
      
      
      {q:"Qu'est-ce que la TVA collectée ?",opts:["La TVA payée sur les achats de l'entreprise","La TVA facturée par l'entreprise à ses clients","La TVA versée aux fournisseurs","La TVA remboursée par l'État"],ans:1,expl:"La TVA collectée est celle que l'entreprise facture à ses clients sur ses ventes. Elle est portée au crédit du compte 44571. C'est cette TVA que l'entreprise reverse ensuite à l'État, déduction faite de la TVA déductible."},
      
      
      {q:"Qu'est-ce que la TVA déductible ?",opts:["La TVA payée sur les achats et récupérée sur l'État","La TVA reversée à l'administration fiscale","La TVA applicable aux exportations","La TVA facturée aux clients"],ans:0,expl:"La TVA déductible est celle que l'entreprise a payée sur ses achats et qu'elle peut récupérer. Elle vient en déduction de la TVA collectée pour calculer la TVA à reverser à l'État."},
      
      
      {q:"En règle générale, une facture sans mention de TVA permet-elle de déduire la TVA ?",opts:["Oui, si le montant est inférieur à 150 €","Oui, si le fournisseur est connu","Oui, si le paiement est par virement","Non, la facture doit obligatoirement mentionner la TVA"],ans:3,expl:"Pour exercer le droit à déduction, l'assujetti doit obligatoirement détenir une facture régulière mentionnant le montant de TVA ou les éléments permettant de la calculer. Sans cette mention, la déduction est refusée."},
      
      
      {q:"Qu'indique la mention « TVA non applicable, art. 293 B CGI » sur une facture ?",opts:["L'entreprise est exonérée définitivement de TVA","L'entreprise bénéficie de la franchise en base de TVA","L'opération est une exportation","L'entreprise est en redressement fiscal"],ans:1,expl:"Cette mention obligatoire signifie que l'entreprise est en franchise en base de TVA : son CA est inférieur au seuil légal, elle ne collecte donc pas de TVA. Elle ne peut pas non plus déduire la TVA sur ses propres achats."},
      
      {q:"Le bilan comptable est divisé en deux grandes parties. Lesquelles ?",opts:["Charges et produits","Immobilisations et dettes","Emplois et ressources courantes","Actif et passif"],ans:3,expl:"Le bilan est divisé en deux colonnes : l'actif (ce que possède l'entreprise) et le passif (comment ces biens sont financés). Les deux colonnes sont toujours égales."},
      
      {q:"Dans le bilan, où classe-t-on les dettes fournisseurs ?",opts:["Actif circulant","Passif – dettes","Passif – capitaux propres","Actif immobilisé"],ans:1,expl:"Les dettes fournisseurs (compte 401) figurent au passif du bilan, dans la rubrique dettes. Elles représentent une source de financement à court terme."},
      
      {q:"Qu'est-ce que le résultat net dans le compte de résultat ?",opts:["La différence entre les produits et les charges","Le total des immobilisations","Le chiffre d'affaires de l'exercice","Le montant des capitaux propres"],ans:0,expl:"Résultat net = Total des produits − Total des charges. S'il est positif, c'est un bénéfice. S'il est négatif, c'est une perte. Ce résultat est ensuite repris au passif du bilan dans les capitaux propres."},
      {q:"Les achats de marchandises apparaissent-ils au bilan ou au compte de résultat ?",opts:["Au compte de résultat, en produits","Au bilan, au passif","Au bilan, à l'actif","Au compte de résultat, en charges"],ans:3,expl:"Les achats de marchandises (compte 607) sont des charges et figurent au compte de résultat, côté charges. Seuls les stocks restants à la clôture apparaissent au bilan à l'actif circulant."}
    ]
  },

  {
  id:"boost_21",
  date:"28/04/2026",
  icon:"📚",
  label:"PCG — Comptes & Classes",
  sub:"Charges sociales, fournisseurs, amortissements, stocks",
  color:"#00c2ff",

  questions:[

    {
      q:"Quel compte enregistre les capitaux propres de départ ?",
      opts:["101","106","201","512"],
      ans:0,
      expl:"Le compte 101 correspond au capital social. Il représente les apports initiaux des associés ou actionnaires."
    },

    {
      q:"Quel compte concerne les charges sociales ?",
      opts:["641","645","627","44571"],
      ans:1,
      expl:"Le compte 645 regroupe les charges sociales. Le compte 641 concerne les rémunérations du personnel."
    },

    {
      q:"Quel compte enregistre les produits des services ?",
      opts:["701","706","707","601"],
      ans:1,
      expl:"Le compte 706 correspond aux prestations de services."
    },

    {
      q:"Quel compte correspond aux fournisseurs ?",
      opts:["512","401","411","44571"],
      ans:1,
      expl:"Le compte 401 correspond aux fournisseurs et suit les dettes envers eux."
    },

    {
      q:"Quel compte est utilisé pour les produits exceptionnels ?",
      opts:["75","76","77","78"],
      ans:2,
      expl:"La classe 77 regroupe les produits exceptionnels liés aux opérations non courantes."
    },

    {
      q:"Quel compte enregistre les charges financières ?",
      opts:["65","66","67","68"],
      ans:1,
      expl:"La classe 66 correspond aux charges financières comme les intérêts d'emprunt."
    },

    {
      q:"Quel compte correspond aux provisions pour risques et charges ?",
      opts:["16","28","15","20"],
      ans:2,
      expl:"La classe 15 regroupe les provisions pour risques et charges."
    },

    {
      q:"Quelle classe du PCG regroupe les stocks et en-cours ?",
      opts:["Classe 2","Classe 6","Classe 4","Classe 3"],
      ans:3,
      expl:"La classe 3 regroupe les stocks et les en-cours."
    },

    {
      q:"Quel compte sert à enregistrer les dotations aux amortissements ?",
      opts:["775","687","6811","603"],
      ans:2,
      expl:"Le compte 6811 enregistre les dotations aux amortissements des immobilisations."
    },

    {
      q:"Quel compte correspond aux frais de transport sur achats ?",
      opts:["6251","6241","613","6063"],
      ans:1,
      expl:"Le compte 6241 est utilisé pour le transport sur achats."
    },

    {
      q:"Quel compte correspond à la banque ?",
      opts:["401","411","512","531"],
      ans:2,
      expl:"Le compte 512 correspond aux comptes bancaires de l'entreprise."
    }

  ]
},

  {
    id:"boost_12", date:"29/04/2026", icon:"⚖️",
    label:"Bilan, TVA, Balance & Clients douteux", sub:"Créances douteuses 416/491, balance, TVA collectée",
    color:"#00f5ff",
    questions:[
      {q:"Peut-on déduire la TVA sur l'achat d'un véhicule de tourisme ?",opts:["Oui, à hauteur de 50 %","Oui, intégralement","Oui, si usage professionnel > 50 %","Non, la TVA est totalement exclue"],ans:3,expl:"La TVA sur les véhicules de tourisme est intégralement et définitivement exclue du droit à déduction, quelle que soit la proportion d'usage professionnel. Seuls les véhicules utilitaires ouvrent droit à déduction."},
      {q:"La balance avant inventaire et la balance après inventaire : quelle différence ?",opts:["Aucune différence, ce sont les mêmes documents","La balance avant inventaire concerne uniquement les fournisseurs","La balance après inventaire supprime tous les comptes soldés","La balance après inventaire intègre les écritures de clôture"],ans:3,expl:"La balance avant inventaire est établie avant les écritures de fin d'exercice. La balance après inventaire intègre toutes les écritures d'inventaire (amortissements, dépréciations, régularisations…) et sert de base pour établir le bilan et le compte de résultat."},
      {q:"Quel compte mouvementer quand un client 411 devient douteux ?",opts:["Débiter le 607 et créditer le 411","Débiter le 491 et créditer le 416","Débiter le 416 et créditer le 411","Débiter le 411 et créditer le 416"],ans:2,expl:"Quand un client ordinaire devient douteux, on transfère la créance : débit compte 416 « Clients douteux » et crédit compte 411 « Clients ». La créance reste au bilan mais est isolée pour signaler le risque de non-recouvrement."},
      {q:"Qu'est-ce que le résultat net dans le compte de résultat ?",opts:["Le total des immobilisations nettes","La différence entre le total des produits et le total des charges","Le chiffre d'affaires de l'exercice","Le montant des capitaux propres"],ans:1,expl:"Résultat net = Total produits − Total charges. S'il est positif c'est un bénéfice, s'il est négatif c'est une perte. Ce résultat est ensuite repris dans les capitaux propres au passif du bilan."},
      {q:"Où classe-t-on les stocks de marchandises dans le bilan ?",opts:["Passif – capitaux propres","Actif circulant","Actif immobilisé","Passif – dettes"],ans:1,expl:"Les stocks de marchandises font partie de l'actif circulant du bilan. Contrairement aux immobilisations, ils ont vocation à être consommés ou vendus dans le cycle d'exploitation normal."},
      {q:"La balance doit toujours vérifier quelle égalité fondamentale ?",opts:["Total des débits = Total des crédits","Total de l'actif = Total du passif","Total des produits = Total des charges","Total des ventes = Total des achats"],ans:0,expl:"Dans une balance, le total des débits doit toujours être égal au total des crédits. Cette égalité est la conséquence directe du principe de la partie double : chaque écriture comporte autant de débits que de crédits."},
      {q:"Comment appelle-t-on la provision constituée pour un client douteux ?",opts:["Un amortissement de créance","Une dépréciation de créance client","Une charge financière","Une charge exceptionnelle"],ans:1,expl:"Lorsqu'une créance client devient douteuse, on constitue une dépréciation pour constater le risque de non-recouvrement. On débite le compte 68174 et on crédite le compte 491 « Dépréciation des comptes clients »."},
      {q:"Quelle est la règle d'or du bilan comptable ?",opts:["Le total de l'actif est toujours égal au total du passif","Les produits sont toujours supérieurs aux charges","Les dettes sont toujours inférieures aux capitaux propres","L'actif circulant est toujours supérieur aux dettes"],ans:0,expl:"La règle fondamentale du bilan est que l'actif = le passif. L'actif représente ce que possède l'entreprise, le passif indique comment ces biens sont financés. L'équilibre est permanent et indiscutable."},
      {q:"Quel compte est utilisé pour la TVA collectée sur les ventes ?",opts:["44566","44562","44571","44551"],ans:2,expl:"Le compte 44571 « TVA collectée » est crédité à chaque vente soumise à TVA. C'est ce compte que l'on solde en fin de période pour calculer la TVA nette à reverser à l'État."},
      {q:"Quel est le taux de TVA de droit commun en France ?",opts:["2,1 %","10 %","20 %","5,5 %"],ans:2,expl:"Le taux normal de TVA en France est de 20 %. Il s'applique par défaut à toutes les opérations ne relevant pas d'un taux réduit (5,5 %, 10 %) ou d'un taux particulier (2,1 %)."}
    ]
  },

  {
  id:"boost_20",
  date:"29/04/2026",
  icon:"📘",
  label:"Balance, bilan & TVA",
  sub:"Clients douteux, résultat net, stocks, TVA collectée",
  color:"#4f8cff",

  questions:[

    {
      q:"La balance avant inventaire et la balance après inventaire : quelle différence ?",
      opts:[
        "Aucune différence, ce sont les mêmes documents",
        "La balance avant inventaire concerne uniquement les fournisseurs",
        "La balance après inventaire supprime tous les comptes soldés",
        "La balance après inventaire intègre les écritures de clôture"
      ],
      ans:3,
      expl:"La balance après inventaire intègre les écritures d'inventaire et de régularisation avant l'établissement du bilan et du compte de résultat."
    },

    {
      q:"Peut-on déduire la TVA sur l'achat d'un véhicule de tourisme ?",
      opts:[
        "Oui, à hauteur de 50 %",
        "Oui, intégralement",
        "Oui, si usage professionnel > 50 %",
        "Non, la TVA est totalement exclue"
      ],
      ans:3,
      expl:"La TVA sur les véhicules de tourisme est exclue du droit à déduction, contrairement aux véhicules utilitaires."
    },

    {
      q:"Quel compte mouvementer quand un client 411 devient douteux ?",
      opts:[
        "Débiter le 607 et créditer le 411",
        "Débiter le 491 et créditer le 416",
        "Débiter le 416 et créditer le 411",
        "Débiter le 411 et créditer le 416"
      ],
      ans:2,
      expl:"Quand un client devient douteux, on transfère la créance du compte 411 vers le compte 416."
    },

    {
      q:"Qu'est-ce que le résultat net dans le compte de résultat ?",
      opts:[
        "Le total des immobilisations nettes",
        "La différence entre le total des produits et le total des charges",
        "Le chiffre d'affaires de l'exercice",
        "Le montant des capitaux propres"
      ],
      ans:1,
      expl:"Le résultat net correspond aux produits moins les charges. Positif = bénéfice ; négatif = perte."
    },

    {
      q:"Où classe-t-on les stocks de marchandises dans le bilan ?",
      opts:[
        "Passif – capitaux propres",
        "Actif circulant",
        "Actif immobilisé",
        "Passif – dettes"
      ],
      ans:1,
      expl:"Les stocks sont des éléments destinés à être vendus ou consommés dans le cycle d'exploitation : ils appartiennent à l'actif circulant."
    },

    {
      q:"La balance doit toujours vérifier quelle égalité fondamentale ?",
      opts:[
        "Total des débits = Total des crédits",
        "Total de l'actif = Total du passif",
        "Total des produits = Total des charges",
        "Total des ventes = Total des achats"
      ],
      ans:0,
      expl:"La balance doit toujours être équilibrée : le total des débits doit être égal au total des crédits."
    },

    {
      q:"Comment appelle-t-on la provision constituée pour un client douteux ?",
      opts:[
        "Un amortissement de créance",
        "Une dépréciation de créance client",
        "Une charge financière",
        "Une charge exceptionnelle"
      ],
      ans:1,
      expl:"Lorsqu'une créance devient douteuse, on constate une dépréciation afin de couvrir le risque de non-recouvrement."
    },

    {
      q:"Quelle est la règle d'or du bilan comptable ?",
      opts:[
        "Le total de l'actif est toujours égal au total du passif",
        "Les produits sont toujours supérieurs aux charges",
        "Les dettes sont toujours inférieures aux capitaux propres",
        "L'actif circulant est toujours supérieur aux dettes"
      ],
      ans:0,
      expl:"Le bilan respecte toujours l'équilibre Actif = Passif."
    },

    {
      q:"Quel compte est utilisé pour la TVA collectée sur les ventes ?",
      opts:[
        "44566",
        "44562",
        "44571",
        "44551"
      ],
      ans:2,
      expl:"Le compte 44571 correspond à la TVA collectée sur les ventes."
    },

    {
      q:"Les ventes de marchandises apparaissent dans quel document comptable ?",
      opts:[
        "Au compte de résultat, en charges",
        "Au compte de résultat, en produits",
        "Au bilan, à l'actif",
        "Au bilan, au passif"
      ],
      ans:1,
      expl:"Les ventes de marchandises sont des produits d'exploitation enregistrés dans le compte de résultat."
    }

  ]
},

  {
    id:"boost_15", date:"30/04/2026", icon:"🔬",
    label:"Amortissements & Dépréciations", sub:"VNC, valeur actuelle, dépréciation, comptes 6811/6816/291, calculs",
    color:"#e040fb",
    questions:[
      {q:"Quel compte utiliser pour constater une dotation aux amortissements ?",opts:["6811","6816","281","512"],ans:0,expl:"Le compte 6811 « Dotations aux amortissements des immobilisations corporelles et incorporelles » est débité pour constater la charge d'amortissement de l'exercice. En contrepartie, on crédite le compte 28x correspondant à l'immobilisation concernée."},
      
      {q:"Quand commence l'amortissement d'une immobilisation ?",opts:["À la date de paiement","À la mise en service","À la clôture de l'exercice","À la date de la facture"],ans:1,expl:"L'amortissement comptable débute à la date de mise en service de l'immobilisation, c'est-à-dire lorsqu'elle est prête à être utilisée. Cette date peut être différente de la date d'acquisition ou de facture."},
      
      
      {q:"Quelle est la base amortissable d'un bien ?",opts:["Coût d'achat + frais financiers","Prix de vente - TVA","Valeur brute - amortissements cumulés","Coût d'acquisition - valeur résiduelle"],ans:3,expl:"Base amortissable = Coût d'acquisition (valeur d'entrée HT) – Valeur résiduelle. Le coût d'acquisition comprend le prix d'achat, les frais de livraison, d'installation, etc. La valeur résiduelle n'est déduite que si elle est significative et que la cession est probable."},
      
      
      {q:"Une immobilisation d'une valeur d'entrée de 10 000 € sera utilisée pendant 5 ans. Quelle est la dotation aux amortissements pour une année pleine ?",opts:["2 000 €","20 000 €","1 000 €","5 000 €"],ans:0,expl:"Dotation annuelle linéaire = Valeur d'entrée / Durée = 10 000 / 5 = 2 000 € par an. La réponse est 2 000 (toutes les formulations correctes désignent la même valeur)."},
      
      
      {
  q:"Cette même immobilisation est mise en service le 1er juillet. Quelle est la dotation aux amortissements pour la première année ?",
  opts:["1 000 €","2 000 €","833 €","500 €"],
  ans:0,
  expl:"Prorata temporis : mise en service le 1er juillet → 6 mois d'utilisation sur l'exercice (juillet à décembre). Dotation N1 = 2 000 × 6/12 = 1 000 €."
},
      
      
      {q:"Qu'est-ce que la VNC d'une immobilisation ?",opts:["Son coût d'acquisition","Sa valeur de revente","Sa valeur d'entrée diminuée du cumul des amortissements","La dotation aux amortissements de l'exercice"],ans:2,expl:"VNC (Valeur Nette Comptable) = Valeur d'entrée – Amortissements cumulés. Elle représente la valeur résiduelle de l'immobilisation au bilan après déduction de tous les amortissements pratiqués depuis la mise en service."},
      
      
      {q:"Immobilisation : 8 000 €, amortissement cumulé 3 500 €. VNC ?",opts:["8 000 €","3 500 €","11 500 €","4 500 €"],ans:3,expl:"VNC = Valeur d'entrée – Amortissements cumulés = 8 000 – 3 500 = 4 500 €. C'est la valeur qui apparaît à l'actif du bilan dans la colonne « Net »."},
      {q:"Après 3 ans, un bien de 9 000 € amorti linéairement sur 6 ans vaut combien de VNC ?",opts:["3 000 €","6 000 €","1 500 €","4 500 €"],ans:3,expl:"Annuité = 9 000 / 6 = 1 500 € par an. Après 3 ans : amortissements cumulés = 1 500 × 3 = 4 500 €. VNC = 9 000 – 4 500 = 4 500 €."},
      
      {q:"Quelle est la valeur résiduelle d'une immobilisation ?",opts:["Le montant amorti cumulé","La valeur de revente estimée à la fin d'utilisation","La valeur nette comptable actuelle","Le coût total d'origine"],ans:1,expl:"La valeur résiduelle est la valeur de revente estimée du bien à la fin de sa durée d'utilité, nette des coûts de cession. Elle est déduite de la base amortissable comptable si elle est significative."},
      
      
      
      {q:"Quelle est la valeur actuelle d'un actif ?",opts:[
"Sa valeur après amortissement comptable",
"Son prix d'achat historique",
"Son coût de remplacement uniquement",
"La plus élevée entre sa valeur vénale et sa valeur d'usage"
],ans:3,expl:"La valeur actuelle est la valeur la plus élevée entre la valeur vénale (prix de marché) et la valeur d'usage (valeur des flux de trésorerie attendus). C'est cette valeur actuelle qui est comparée à la VNC pour détecter une dépréciation."},
      
      
      
      {
  q:"Une dépréciation d'immobilisation est constatée lorsque :",
  opts:[
    "Elle est vendue",
    "Sa VNC est supérieure à sa valeur actuelle",
    "Elle est totalement amortie",
    "Sa valeur d'entrée augmente"
  ],
  ans:1,
  expl:"Une dépréciation est constatée lorsque la VNC devient supérieure à la valeur actuelle du bien."
},
      
      {q:"Quel compte utiliser pour constater une dotation aux dépréciations ?",opts:["6811","6816","291","6815"],ans:1,expl:"La dotation aux dépréciations des immobilisations corporelles est enregistrée au débit du compte 6816 « Dotations aux dépréciations des immobilisations corporelles ». En contrepartie, on crédite le compte 291 « Dépréciations des immobilisations corporelles »."},
      
      {q:"Immo : valeur d'entrée 12 000 € — VNC 8 000 € — Valeur actuelle (VA) 7 000 €. Dépréciation ?",opts:["4 000 €","5 000 €","1 000 €","0 €"],ans:2,expl:"Dépréciation = VNC – Valeur actuelle = 8 000 – 7 000 = 1 000 €. La valeur d'entrée (12 000 €) n'intervient pas dans ce calcul. On compare toujours VNC et valeur actuelle."},
      
      {q:"Immo : valeur d'entrée 20 000 € — VNC 14 000 € — Valeur actuelle (VA) 16 000 €. Dépréciation ?",opts:["4 000 €","6 000 €","2 000 €","0 €"],ans:3,expl:"Valeur actuelle (16 000 €) > VNC (14 000 €) → pas de dépréciation ! On ne constate une dépréciation que si VNC > VA. Ici la valeur actuelle est supérieure à la VNC, donc le bien n'est pas déprécié. Dépréciation = 0 €."}
    ]
  },

  {
    id:"boost_14", date:"07/05/2026", icon:"📐",
    label:"Amortissements — Bases & Dérogatoire", sub:"Objectif, comptes 6811/68725/145, base amortissable, unités d'œuvre",
    color:"#7c3aed",
    questions:[
      {q:"Quel est l'objectif principal de l'amortissement comptable ?",opts:["Réduire l'impôt","Répartir le coût d'un actif sur sa durée d'utilisation","Répartir la sortie de trésorerie sur la durée d'utilisation","Constater une charge exceptionnelle"],ans:1,expl:"L'amortissement comptable a pour objectif de répartir le coût d'un actif sur sa durée d'utilisation attendue, conformément au principe de rattachement des charges aux produits. Il ne s'agit pas de la trésorerie décaissée, mais du coût économique de l'usage du bien."},
      
      {q:"Quel compte enregistre la dotation aux amortissements comptables ?",opts:["281 (Amortissement des immobilisations)","6811 (Dotations aux amortissements)","6815 (Dotations aux dépréciations)","6816 (Dotations aux dépréciations financières)"],ans:1,expl:"La dotation aux amortissements comptables est enregistrée au débit du compte 6811 « Dotations aux amortissements des immobilisations corporelles et incorporelles ». En contrepartie, on crédite le compte 28x correspondant à l'immobilisation."},
      
      {
  q:"Existe-t-il un compte spécifique réservé uniquement aux amortissements fiscaux ?",
  opts:[
    "145 (Amortissements dérogatoires)",
    "6811 (Dotations aux amortissements)",
    "68725 (Dotation aux amortissements dérogatoires)",
    "Aucun — il n'y a pas de compte fiscal"
  ],
  ans:3,
  expl:"Il n'existe pas de compte de charge spécifique réservé uniquement aux amortissements fiscaux. L'amortissement fiscal correspond soit à l'amortissement comptable (6811), soit à la partie dérogatoire enregistrée via le compte 68725."
},
      
      {q:"Quel compte enregistre la dotation aux amortissements dérogatoires ?",opts:["145 (Amortissements dérogatoires)","6811 (Dotations aux amortissements)","68725 (Dotation aux amortissements dérogatoires)","Aucun"],ans:2,expl:"La dotation aux amortissements dérogatoires est enregistrée au débit du compte 68725 « Dotation aux amortissements dérogatoires » en contrepartie du crédit du compte 145 « Amortissements dérogatoires » au passif du bilan (provisions réglementées)."},
      
      
      {q:"Dans une écriture d'amortissement, on crédite :",opts:["28 (Amortissement de l'immobilisation)","6811 (Dotations aux amortissements)","512 (Banque)","29 (Dépréciations des immobilisations)"],ans:0,expl:"Dans l'écriture d'amortissement : on débite le 6811 (charge) et on crédite le compte 28x (amortissement cumulé de l'immobilisation). Le compte 28x est un compte de bilan qui vient soustraire la valeur brute pour obtenir la VNC."},
      
      {q:"Quel est le principe du dégressif ?",opts:["Charge constante","Charge plus élevée au début","Charge aléatoire","Charge uniquement en fin de vie"],ans:1,expl:"L'amortissement dégressif génère une charge plus élevée en début de vie, qui décroît chaque année. La dotation = VNC × taux dégressif. La VNC diminuant chaque année, la dotation diminue aussi. Cela reflète la perte de valeur plus rapide en début d'utilisation."},
      
      {q:"En amortissement comptable, quelle est la base amortissable ?",opts:["Le prix d'achat TTC","Le prix d'achat TTC – valeur résiduelle","Le prix d'achat HT – valeur résiduelle","Le prix d'achat HT"],ans:2,expl:"La base amortissable comptable = Prix d'achat HT (coût d'acquisition ou coût de production) – valeur résiduelle. Attention : la base est sur la valeur d'entrée HT (coût d'acquisition = prix d'achat HT + frais de livraison, d'installation…). La valeur résiduelle est déduite seulement si elle est significative et que la cession est probable."},
      
      {q:"La date de début de l'amortissement comptable correspond :",opts:["À la date de facture","À la date de commande","À la date de paiement","À la date de mise en service"],ans:3,expl:"L'amortissement comptable débute à la date de mise en service, c'est-à-dire quand le bien est prêt à être utilisé. Cette date peut être différente de la date d'acquisition ou de facture."},
      
      {q:"En amortissement fiscal, la valeur résiduelle est :",opts:["Toujours déduite","Déduite seulement en linéaire","Jamais déduite","Déduite seulement en dégressif"],ans:2,expl:"En fiscal, la valeur résiduelle n'est JAMAIS déduite de la base amortissable. La base fiscale = valeur d'acquisition HT, sans déduction de valeur résiduelle. C'est une différence fondamentale avec le traitement comptable."},
      
      {q:"En amortissement fiscal dégressif, le point de départ est :",opts:["La mise en service","La fin d'exercice","La date de facture / acquisition","La date de paiement"],ans:2,expl:"En dégressif fiscal, le calcul démarre à la date de facture ou d'acquisition (et non à la mise en service comme en comptable). C'est une règle fiscale spécifique : CGI art. 39 B."},
      
      {q:"L'amortissement en unités d'œuvre est :",opts:["Interdit","Comptable et fiscal","Fiscal uniquement","Comptable uniquement"],ans:3,expl:"L'amortissement par unités d'œuvre (ou d'activité) est une méthode comptable uniquement. Elle n'est pas reconnue fiscalement. Fiscalement, on ne peut utiliser que le linéaire ou le dégressif. La méthode par unités d'œuvre est adaptée aux biens dont l'usage est irrégulier (machines industrielles, véhicules…)."},
      
      {q:"Un bien a une valeur résiduelle significative. Quel impact sur l'amortissement comptable ?",opts:["Supprime l'amortissement","N'a aucun impact","Diminue l'amortissement comptable","Augmente l'amortissement fiscal"],ans:2,expl:"Une valeur résiduelle significative réduit la base amortissable comptable : Base = Valeur d'entrée HT – Valeur résiduelle. Conséquence : la dotation annuelle est plus faible. En fiscal en revanche, la valeur résiduelle n'est jamais déduite."},
      
      {q:"Un amortissement dérogatoire apparaît lorsque :",opts:["Il y a une perte","Comptable > fiscal","Fiscal > comptable","Les deux sont égaux"],ans:2,expl:"L'amortissement dérogatoire (compte 145) est constaté quand l'amortissement fiscal dépasse l'amortissement comptable. On enregistre la différence (fiscal - comptable) au débit du 68725 et au crédit du 145. Quand la situation s'inverse, on reprend l'amortissement dérogatoire (débit 145 / crédit 78725)."},
      {q:"Un amortissement dérogatoire peut apparaître :",opts:["Seulement si fiscal > comptable la première année","Uniquement en linéaire","Seulement en fin de vie","À tout moment"],ans:0,expl:"L'amortissement dérogatoire n'apparaît que lorsque l'amortissement fiscal est supérieur à l'amortissement comptable. En pratique, cela se produit surtout la première année avec le dégressif fiscal (qui part de la date d'acquisition) versus le linéaire comptable (qui part de la mise en service)."},
      {q:"Pourquoi le dégressif est-il avantageux fiscalement ?",opts:["Il accélère les charges au début","Il supprime l'impôt","Il réduit le résultat en fin de période","Il augmente les capitaux propres"],ans:0,expl:"Le dégressif génère des charges plus élevées en début de vie, ce qui réduit le résultat fiscal et donc l'impôt à payer à court terme. C'est un avantage de trésorerie (différé d'imposition), et non une exonération définitive."},
      {q:"Bien à 10 000 € HT, valeur résiduelle 2 000 €, durée 4 ans. Base amortissable comptable ?",opts:["12 000 €","10 000 €","8 000 €","6 000 €"],ans:2,expl:"Base amortissable comptable = Valeur d'entrée HT – Valeur résiduelle = 10 000 – 2 000 = 8 000 €. L'annuité linéaire comptable serait alors de 8 000 / 4 = 2 000 € par an."},
      {q:"Même bien en fiscal linéaire, base amortissable ?",opts:["6 000 €","12 000 €","8 000 €","10 000 €"],ans:3,expl:"En fiscal, la valeur résiduelle n'est JAMAIS déduite. Base fiscale linéaire = Valeur d'entrée HT = 10 000 €. L'annuité fiscale linéaire serait de 10 000 / 4 = 2 500 € par an. D'où un amortissement dérogatoire de 2 500 – 2 000 = 500 € la première année (si même durée)."}
    ]
  },

  {
  id:"boost_18",
  date:"07/05/2026",
  icon:"🧮",
  label:"Journal des achats & Fournisseurs",
  sub:"Lettrage, règlements, TVA déductible, rapprochements",
  color:"#00c2ff",

  questions:[

    {
      q:"Quel risque existe si un avoir fournisseur n'est pas pris en compte ?",
      opts:[
        "Un solde fournisseur erroné",
        "Une hausse automatique du capital",
        "Une suppression du journal des ventes",
        "Un calcul correct de la paie"
      ],
      ans:0,
      expl:"Un avoir réduit la dette fournisseur. S'il est oublié, le compte 401 reste incorrect et peut présenter un solde faux."
    },

    {
      q:"Que faut-il faire si une facture est partiellement réglée ?",
      opts:[
        "Lettrer partiellement la facture et suivre le solde restant",
        "Annuler la facture",
        "La passer en produit exceptionnel",
        "La classer sans traitement"
      ],
      ans:0,
      expl:"En cas de règlement partiel, le lettrage doit tenir compte du montant déjà payé et laisser apparaître le solde restant dû."
    },

    {
      q:"Dans le journal des achats, la TVA déductible est généralement :",
      opts:[
        "Débitée",
        "Créditée",
        "Lettrée",
        "Compensée automatiquement sans écriture"
      ],
      ans:0,
      expl:"La TVA déductible représente une créance sur l'État. Elle est donc enregistrée au débit lorsqu'elle est récupérable."
    },

    {
      q:"Quel élément est essentiel pour rapprocher correctement une facture et un règlement ?",
      opts:[
        "Le montant, la date et la référence",
        "Le logo de l'entreprise",
        "Le nom du comptable uniquement",
        "Le code postal du fournisseur"
      ],
      ans:0,
      expl:"Le rapprochement repose sur plusieurs éléments concordants : montant, date, référence ou numéro de pièce."
    },

    {
      q:"Quel cas peut expliquer un solde fournisseur débiteur ?",
      opts:[
        "Un trop-perçu ou une avance au fournisseur",
        "Une facture de vente non réglée",
        "Un amortissement annuel",
        "Une charge constatée d'avance client"
      ],
      ans:0,
      expl:"Un solde débiteur fournisseur peut apparaître lorsqu'un fournisseur a été payé avant réception de la facture ou suite à un avoir."
    },

    {
      q:"Que signifie le lettrage d'un compte fournisseur ?",
      opts:[
        "Rapprocher les factures et les règlements correspondants",
        "Créer une nouvelle charge",
        "Calculer la TVA collectée",
        "Remplacer le journal des achats"
      ],
      ans:0,
      expl:"Le lettrage associe les factures et leurs règlements afin de suivre les soldes restants dus."
    },

    {
      q:"Quel compte est généralement débité lors du règlement d'un fournisseur par chèque ?",
      opts:[
        "Le compte 401",
        "Le compte 707",
        "Le compte 411",
        "Le compte 44571"
      ],
      ans:0,
      expl:"Lors du paiement d'un fournisseur, la dette diminue : le compte 401 Fournisseurs est donc débité."
    },

    {
      q:"Lors d'une facture avec escompte de règlement, quel point doit être vérifié ?",
      opts:[
        "La condition de paiement pour comptabiliser l'avantage",
        "Le montant du capital social",
        "La date de clôture uniquement",
        "Le taux de change des clients"
      ],
      ans:0,
      expl:"L'escompte dépend d'une condition de paiement anticipé. Il ne doit pas être confondu avec une remise commerciale."
    },

    {
      q:"Quel document est le plus directement à l'origine de l'écriture au journal des achats ?",
      opts:[
        "La facture d'achat",
        "Le relevé bancaire",
        "Le devis",
        "Le bon de livraison seul"
      ],
      ans:0,
      expl:"La facture d'achat est la pièce justificative principale permettant de comptabiliser une dette fournisseur."
    }

  ]
},

  {
    id:"boost_13", date:"12/05/2026", icon:"🏭",
    label:"Amortissements comptable & fiscal", sub:"Linéaire, dégressif, dérogatoire, prorata, comptes 28x / 6811 / 68725",
    color:"#5b4dff",
    questions:[
      {q:"Dans une écriture d'amortissement comptable, on crédite :",opts:["28 (Amortissement de l'immobilisation)","6811 (Dotations aux amortissements)","512 (Banque)","29 (Dépréciations)"],ans:0,expl:"Dans l'écriture comptable d'amortissement, on débite le 6811 « Dotations aux amortissements des immobilisations corporelles » et on crédite le compte 28x « Amortissement de l'immobilisation ». Le compte 28 vient diminuer la valeur brute de l'actif au bilan."},
      
      
      {q:"Quel compte enregistre la dotation aux amortissements dérogatoires ?",opts:["145 (Amortissements dérogatoires — passif)","6811 (Dotations aux amortissements)","68725 (Dotation aux amortissements dérogatoires)","Aucun compte spécifique"],ans:2,expl:"La dotation aux amortissements dérogatoires est enregistrée au débit du compte 68725 « Dotation aux amortissements dérogatoires » en contrepartie du crédit du compte 145 « Amortissements dérogatoires » au passif du bilan."},
      
      
      {q:"La date de début de l'amortissement comptable correspond :",opts:["À la date de facture","À la date de paiement","À la date de commande","À la date de mise en service"],ans:3,expl:"L'amortissement comptable débute à la date de mise en service du bien, c'est-à-dire lorsque l'immobilisation est prête à être utilisée. Cette date peut être postérieure à la date d'acquisition ou de facture."},
      
      
      {q:"En amortissement fiscal dégressif, le point de départ est :",opts:["La mise en service","La fin d'exercice","La date de paiement","La date de facture / acquisition"],ans:3,expl:"En amortissement fiscal dégressif, le point de départ est la date de facture ou d'acquisition (et non la mise en service comme en comptable). C'est une règle fiscale spécifique qui diffère du traitement comptable."},
      
      
      
      {q:"Quel est le principe du dégressif ?",opts:["Charge constante","Charge plus élevée au début","Charge aléatoire","Charge uniquement en fin de vie"],ans:1,expl:"L'amortissement dégressif génère une charge plus élevée en début de vie de l'immobilisation, qui diminue progressivement. Cela traduit l'idée que les biens perdent davantage de valeur en début d'utilisation."},
      
      
      
      {q:"En amortissement fiscal, la valeur résiduelle est :",opts:["Toujours déduite","Déduite seulement en linéaire","Jamais déduite","Déduite seulement en dégressif"],ans:2,expl:"En amortissement fiscal, la valeur résiduelle n'est jamais déduite de la base amortissable. En comptable en revanche, si l'entreprise envisage de céder le bien à une valeur résiduelle significative, celle-ci peut être déduite de la base amortissable."},
      
      
      {q:"En amortissement fiscal dégressif, le point de départ est :",opts:["La mise en service","La fin d'exercice","La date de facture / acquisition","La date de paiement"],ans:2,expl:"Rappel : en dégressif fiscal, le point de départ est toujours la date de facture / acquisition, contrairement à l'amortissement comptable qui débute à la mise en service."},
      
      
      {q:"Un amortissement dérogatoire apparaît lorsque :",opts:["Il y a une perte","Comptable > fiscal","Fiscal > comptable","Les deux sont égaux"],ans:2,expl:"Un amortissement dérogatoire naît lorsque l'amortissement fiscal est supérieur à l'amortissement comptable. La différence (fiscal - comptable) est comptabilisée en amortissement dérogatoire au passif (compte 145). Quand la situation s'inverse, l'amortissement dérogatoire est repris."},
      
      {
  q:"Un amortissement dérogatoire peut apparaître :",
  opts:[
    "Lorsque l'amortissement fiscal devient supérieur au comptable",
    "Uniquement en linéaire",
    "Seulement en fin de vie",
    "Jamais"
  ],
  ans:0,
  expl:"L'amortissement dérogatoire apparaît lorsque l'amortissement fiscal dépasse l'amortissement comptable."
},
      
  {
  q:"Bien acquis le 15/06 et mis en service le 15/07. Prorata temporis de la première dotation en dégressif :",
  opts:["165/360","7/12","6/12","195/360"],
  ans:1,
  expl:"En amortissement dégressif fiscal, le prorata temporis se calcule en mois à partir du mois d'acquisition. Ici, le bien est acquis le 15/06 : la première annuité retient 7 mois sur 12 selon la règle fiscale appliquée en dégressif."
},
      
     
      
      {q:"Quand doit-on basculer du dégressif au linéaire ?",opts:["Quand le linéaire devient supérieur","Jamais","Quand la VNC = 0","À la fin"],ans:0,expl:"En amortissement dégressif, on bascule vers le linéaire calculé sur la durée restante dès que l'annuité linéaire (calculée sur VNC / années restantes) devient supérieure à l'annuité dégressive. C'est une règle obligatoire pour ne jamais avoir de VNC résiduelle."},
      
      
     {
  q:"En dégressif, la base de calcul est :",
  opts:[
    "Toujours la valeur d'entrée",
    "La valeur résiduelle",
    "La valeur nette comptable restante",
    "Le prix TTC"
  ],
  ans:2,
  expl:"En amortissement dégressif, la base de calcul correspond à la valeur nette comptable restante au début de chaque exercice. La dotation diminue progressivement au fil des années."
},
      
      {q:"Deux entreprises ont le même bien. Lequel reflète mieux la réalité si l'usage est irrégulier ?",opts:["Unités d'œuvre","Dégressif fiscal","Aucun des deux","Linéaire comptable"],ans:0,expl:"La méthode des unités d'œuvre (ou d'activité) est la plus pertinente pour un bien dont l'usage est irrégulier, car elle amortit le bien proportionnellement à son utilisation réelle (kilomètres, heures de marche, nombre de pièces produites…)."},
      {q:"Un amortissement fiscal plus rapide entraîne :",opts:["Moins d'impôt à court terme","Interdit","Plus d'impôt","Aucun impact"],ans:0,expl:"Un amortissement fiscal plus rapide (comme le dégressif) génère des charges fiscalement déductibles plus élevées en début de vie, ce qui réduit le résultat fiscal et donc l'impôt à court terme. C'est un avantage de trésorerie pour l'entreprise, même si l'impôt total sur toute la durée reste identique."}
    ]
  },

  {
   id: "boost_17",
  date: "12/05/2026",
  icon: "🌍",
  label: "Morning Boost TVA",
  sub: "TVA, exportations et livraisons intracommunautaires",
  color: "#6c63ff",

  questions: [

    {
      q: "Pour une livraison intracommunautaire à un professionnel, on retient souvent :",
      opts: [
        "Une vente sans facture",
        "Une opération taxable en France",
        "La TVA française est toujours facturée",
        "Une opération exonérée sous conditions"
      ],
      ans: 3,
      expl: "La livraison intracommunautaire peut être exonérée sous certaines conditions."
    },

    {
      q: "Le taux de 10 % s’applique souvent à :",
      opts: [
        "Certaines prestations de restauration",
        "Les exportations",
        "Les salaires",
        "Toutes les livraisons de biens"
      ],
      ans: 0,
      expl: "Le taux réduit de 10 % concerne notamment certaines activités de restauration."
    },

    {
      q: "Une facture d’achat avec TVA peut être déduite si :",
      opts: [
        "Le paiement a été fait en espèces uniquement",
        "L’achat est lié à l’activité taxable",
        "La dépense est personnelle",
        "La facture est au nom d’un salarié"
      ],
      ans: 1,
      expl: "La TVA est déductible lorsque la dépense est engagée pour l’activité professionnelle."
    },

    {
      q: "Une vente de biens vers un pays hors UE est :",
      opts: [
        "Une importation",
        "Une livraison intracommunautaire",
        "Une vente domestique",
        "Une exportation"
      ],
      ans: 3,
      expl: "Une vente vers un pays hors Union Européenne correspond à une exportation."
    },

    {
      q: "Une prestation de services à un client français est en principe soumise :",
      opts: [
        "À la TVA espagnole",
        "À aucune TVA",
        "À la TVA française",
        "À la TVA hors UE"
      ],
      ans: 2,
      expl: "Lorsqu’une prestation est réalisée pour un client français, la TVA française s’applique généralement."
    },

    {
      q: "Pour une prestation de services, la TVA est souvent exigible :",
      opts: [
        "À la fabrication du produit",
        "À la mise en rayon",
        "À l’impression du devis",
        "À l’encaissement"
      ],
      ans: 3,
      expl: "Pour les prestations de services, la TVA est souvent exigible à l’encaissement."
    },

    
    
    
    
    
    {
      q: "Quel document permet souvent de justifier la TVA déductible ?",
      opts: [
        "Le devis",
        "La facture",
        "Le bon de livraison seul",
        "Le ticket de caisse seul, toujours"
      ],
      ans: 1,
      expl: "La facture est le document principal permettant de justifier la TVA déductible."
    },

    {
      q: "La TVA déductible est généralement récupérable quand :",
      opts: [
        "La dépense est un salaire",
        "La dépense est personnelle",
        "La dépense concerne un impôt",
        "La dépense sert l’activité taxable"
      ],
      ans: 3,
      expl: "La TVA est déductible lorsque la dépense est liée à l’activité économique taxable."
    },

    {
      q: "Une exportation correspond à une vente de biens :",
      opts: [
        "Entre deux entreprises françaises",
        "Entre deux pays de l’UE",
        "Vers un pays hors UE",
        "À l’intérieur du même département"
      ],
      ans: 2,
      expl: "Une exportation correspond à un envoi de biens vers un pays hors Union Européenne."
    },

    {
      q: "Pour une vente de biens à un client professionnel dans l’UE, on parle souvent de :",
      opts: [
        "Livraison intracommunautaire",
        "Importation",
        "Exportation",
        "Prestation domestique"
      ],
      ans: 0,
      expl: "Une vente de biens à un professionnel situé dans l’Union Européenne constitue généralement une livraison intracommunautaire."
    }

  ]
},

  {
  id:"boost_19",
  date:"14/05/2026",
  icon:"📚",
  label:"Fiscalité, provisions & dérogatoire",
  sub:"Suramortissement, réintégration fiscale, provisions, relances clients",
  color:"#9b5cff",

  questions:[

    {
      q:"Le dispositif de suramortissement permet de :",
      opts:[
        "Ne pas payer de TVA sur l'achat",
        "Amortir le bien deux fois plus vite au bilan",
        "Amortir des terrains",
        "Déduire plus de 100 % de la valeur du bien du résultat fiscal"
      ],
      ans:3,
      expl:"Le suramortissement permet une déduction fiscale supplémentaire au-delà de la valeur du bien afin d'encourager certains investissements."
    },

    {
      q:"Qu'est-ce qu'un amortissement dérogatoire ?",
      opts:[
        "Un amortissement réservé aux entreprises en déficit",
        "Une erreur de calcul",
        "Un amortissement qui ne passe pas par le résultat",
        "L'excédent de l'amortissement fiscal sur l'amortissement comptable"
      ],
      ans:3,
      expl:"L'amortissement dérogatoire correspond à la part d'amortissement fiscal supérieure à l'amortissement comptable."
    },

    {
      q:"Quelle est la limite fiscale d'amortissement pour un véhicule de tourisme très polluant ?",
      opts:[
        "On peut amortir 100 % du prix quel que soit le CO₂",
        "La base amortissable est plafonnée",
        "Il n'y a pas de limite",
        "L'amortissement est interdit pour les véhicules"
      ],
      ans:1,
      expl:"Les véhicules de tourisme polluants subissent un plafonnement fiscal afin de limiter l'avantage fiscal."
    },

    {
      q:"Dans quel cas doit-on procéder à une réintégration fiscale ?",
      opts:[
        "Quand une charge comptabilisée n'est pas déductible selon la loi",
        "Quand le bénéfice est trop élevé",
        "Quand un produit n'est pas imposable",
        "Quand on achète une nouvelle machine"
      ],
      ans:0,
      expl:"Une réintégration fiscale consiste à ajouter au résultat fiscal des charges non admises fiscalement."
    },

    {
      q:"Une provision pour amendes et pénalités est-elle déductible fiscalement ?",
      opts:[
        "Oui, si elle est bien comptabilisée",
        "Non, les amendes ne sont jamais déductibles",
        "Uniquement si l'amende est liée à un retard de TVA",
        "Seulement si le montant est inférieur à 1 000 €"
      ],
      ans:1,
      expl:"Les sanctions pénales ou administratives ne sont jamais déductibles fiscalement."
    },

    {
      q:"Si une provision pour litige de 10 000 € n'a plus d'objet, quelle opération effectue-t-on ?",
      opts:[
        "Une reprise sur provision",
        "On laisse le solde tel quel au bilan",
        "Une dotation complémentaire",
        "On débite le compte de capital"
      ],
      ans:0,
      expl:"Quand le risque disparaît, la provision doit être reprise, généralement via un compte de produits (78)."
    },

    {
      q:"Quelle est la différence majeure entre une dépréciation et une provision pour risques et charges ?",
      opts:[
        "Il n'y a aucune différence comptable",
        "La provision est définitive, la dépréciation est temporaire",
        "La dépréciation concerne l'actif, la provision concerne le passif",
        "La dépréciation est toujours déductible, pas la provision"
      ],
      ans:2,
      expl:"La dépréciation corrige la valeur d'un actif tandis que la provision constate un risque ou une dette probable."
    },

    {
      q:"Parmi les conditions de déductibilité fiscale d'une provision, laquelle est correcte ?",
      opts:[
        "La provision doit être constatée en comptabilité",
        "Le risque doit être éventuel et non précisé",
        "La provision peut être calculée de façon forfaitaire",
        "Le risque peut survenir dans plus de 20 ans"
      ],
      ans:0,
      expl:"Pour être déductible fiscalement, une provision doit notamment être correctement comptabilisée et correspondre à un risque précis et probable."
    },

    {
      q:"Quel élément fait partie des conditions de paiement sur une facture ?",
      opts:[
        "Le numéro de TVA intracommunautaire du client",
        "Le taux de remise commerciale",
        "Le délai de règlement",
        "Le numéro du bon de commande interne"
      ],
      ans:2,
      expl:"Les conditions de règlement doivent obligatoirement préciser le délai de paiement."
    },

    {
      q:"Quel est l'objectif principal du suivi des relances clients ?",
      opts:[
        "Réduire les impayés et accélérer les encaissements",
        "Vérifier les stocks",
        "Augmenter le chiffre d'affaires",
        "Calculer la marge commerciale"
      ],
      ans:0,
      expl:"Les relances clients permettent de sécuriser la trésorerie et de limiter les retards de paiement."
    }

  ]
}

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

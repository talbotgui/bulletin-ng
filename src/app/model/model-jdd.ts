import { Annee } from './model';

export class Jdd {

  static JDD_DEUX_COMPETENCES = {
    competences: [
      {
        id: 'idCompetence1',
        text: 'maCompetence1',
        parent: '#'
      }, {
        id: 'idCompetence2',
        text: 'maCompetence2',
        parent: 'idCompetence1'
      }
    ]
  };

  // Jeu de données simpliste
  static JDD_SIMPLISTE = {
    enseignant: 'M. Toto'
  };

  // Jeu de données riche
  static JDD_RICHE = {
    enteteEdition: 'Académie X<br/>Département X<br/>Circonscription X<br/>École : X<br/>Adresse : X<br/>Téléphone : 0<br/>Courriel : x@x.x',
    enseignant: 'M. Toto',
    cycleNiveau: '2 / CE1',
    anneeScolaire: '2016-2017',
    periodes: [
      {
        id: 1,
        nom: 'Période 1',
        debut: '2016-09-01T00:00:00.000Z',
        fin: '2016-10-19T00:00:00.000Z'
      },
      {
        id: 2,
        nom: 'Période 2',
        debut: '2016-11-03T00:00:00.000Z',
        fin: '2016-12-17T00:00:00.000Z'
      },
      {
        id: 3,
        nom: 'Période 3',
        debut: '2017-01-03T00:00:00.000Z',
        fin: '2017-02-11T00:00:00.000Z'
      },
      {
        id: 4,
        nom: 'Période 4',
        debut: '2017-02-27T00:00:00.000Z',
        fin: '2017-04-08T00:00:00.000Z'
      },
      {
        id: 5,
        nom: 'Période 5',
        debut: '2017-04-24T00:00:00.000Z',
        fin: '2017-07-08T00:00:00.000Z'
      }
    ],
    mapLibelleNotes: {
      0: 'non atteint',
      1: 'atteint partiellement',
      2: 'atteint',
      3: 'dépassé',
      n: 'non évalué',
      a: 'absent'
    },
    mapLibelleStatutEleve: {
      0: 'hors établissement',
      1: 'dans l\'établissement',
      2: 'dans la classe'
    },
    libellesTypeTempsJournal: [
      'Apprentissage',
      'Entraînement',
      'Réinvestissement',
      'Evaluation'
    ],
    eleves: [
      {
        id: 'hfys3v9z',
        nom: 'NOM0',
        prenom: 'TOTO_HORS_ECOLE',
        dateNaissance: '2009-01-01T00:00:00.000Z',
        pere: 'M. NOM0 PAPA',
        mere: 'Mme NOM0 MAMAN',
        fratrie: 'Frere1 NOM0, Soeur1 NOM0',
        adresses: '1 rue de la boulangerie',
        telephones: '01 01 01 01 01',
        statut: '0',
        bilans: 'bla bla bla',
        cursus: [
          {
            annee: '2012',
            niveau: 'PS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2013',
            niveau: 'MS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2014',
            niveau: 'GS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2015',
            niveau: 'CP',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2016',
            niveau: 'CE1',
            etablissement: '',
            accompagnement: ''
          }
        ],
        dateAdmission: '2015-09-01T00:00:00.000Z',
        accueil: '',
        datesPPA: '',
        datesPAP: '',
        datesESS: ''
      },
      {
        id: 'evnr1v6a',
        nom: 'NOM1',
        prenom: 'PRENOM1',
        dateNaissance: '2009-01-01T00:00:00.000Z',
        pere: 'M. NOM1 PAPA',
        mere: 'Mme NOM1 MAMAN',
        fratrie: 'Frere1 NOM1, Soeur1 NOM1',
        adresses: '1 rue de l\'éqlise',
        telephones: '01 01 01 01 01',
        statut: '2',
        bilans: 'bla bla bla',
        cursus: [
          {
            annee: '2012',
            niveau: 'PS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2013',
            niveau: 'MS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2014',
            niveau: 'GS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2015',
            niveau: 'CP',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2016',
            niveau: 'CE1',
            etablissement: '',
            accompagnement: ''
          }
        ],
        dateAdmission: '2015-09-01T00:00:00.000Z',
        accueil: '',
        datesPPA: '',
        datesPAP: '',
        datesESS: ''
      },
      {
        id: 'rvns1q6a',
        nom: 'NOM2',
        prenom: 'PRENOM2',
        dateNaissance: '2009-01-01T00:00:00.000Z',
        pere: 'M. NOM2 PAPA',
        mere: 'Mme NOM2 MAMAN',
        fratrie: 'Frere1 NOM2, Soeur1 NOM2',
        adresses: '1 rue de la mairie',
        telephones: '01 01 01 01 01',
        statut: '2',
        bilans: 'bla bla bla',
        cursus: [
          {
            annee: '2012',
            niveau: 'PS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2013',
            niveau: 'MS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2014',
            niveau: 'GS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2015',
            niveau: 'CP',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2016',
            niveau: 'CE1',
            etablissement: '',
            accompagnement: ''
          }
        ],
        dateAdmission: '2015-09-01T00:00:00.000Z',
        accueil: '',
        datesPPA: '',
        datesPAP: '',
        datesESS: ''
      },
      {
        id: 'lkjsf2d3',
        nom: 'NOM3',
        prenom: 'PRENOM3',
        dateNaissance: '2009-01-01T00:00:00.000Z',
        pere: 'M. NOM3 PAPA',
        mere: 'Mme NOM3 MAMAN',
        fratrie: 'Frere1 NOM3, Soeur1 NOM3',
        adresses: '1 rue de l\'étang',
        telephones: '01 01 01 01 01',
        statut: '2',
        bilans: 'bla bla bla',
        cursus: [
          {
            annee: '2012',
            niveau: 'PS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2013',
            niveau: 'MS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2014',
            niveau: 'GS',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2015',
            niveau: 'CP',
            etablissement: '',
            accompagnement: ''
          },
          {
            annee: '2016',
            niveau: 'CE1',
            etablissement: '',
            accompagnement: ''
          }
        ],
        dateAdmission: '2015-09-01T00:00:00.000Z',
        accueil: '',
        datesPPA: '',
        datesPAP: '',
        datesESS: ''
      }
    ],
    competences: [
      {
        id: 'compAsso',
        text: 'Compétences associées',
        parent: '#'
      },
      {
        id: 'niveau1',
        text: 'CYCLE 2 (CP-CE2)',
        parent: 'compAsso'
      },
      {
        id: 'j1_1',
        text: 'Français',
        parent: 'niveau1'
      },
      {
        id: 'j1_2',
        text: 'Comprendre et s\'exprimer à l\'oral',
        parent: 'j1_1'
      },
      {
        id: 'j1_3',
        text: 'Ecouter pour comprendre des messages oraux (adressés par un adulte ou un pairs) ou des textes lus par un adulte',
        parent: 'j1_2'
      },
      {
        id: 'j1_263',
        text: 'maintien d\'une attention orientée en fonction d\'un but',
        parent: 'j1_3'
      },
      {
        id: 'j1_264',
        text: 'repérage et mémorisation des informations importantes, enchainement mental de ces informations',
        parent: 'j1_3'
      },
      {
        id: 'j1_265',
        text: 'mobilisation des références culturelles nécessaires pour comprendre le message ou le texte',
        parent: 'j1_3'
      },
      {
        id: 'j1_266',
        text: 'attention portée au vocabulaire et à la mémorisation',
        parent: 'j1_3'
      },
      {
        id: 'j1_267',
        text: 'repérage d\'éventuelles difficultés de compréhension',
        parent: 'j1_3'
      },
      {
        id: 'j1_4',
        text: 'Dire pour être entendu et compris en situation d\'adresse à un auditoire ou de présentation de texte',
        parent: 'j1_2'
      },
      {
        id: 'j1_268',
        text: 'prise en compte des récepteurs ou des interlocuteurs',
        parent: 'j1_4'
      },
      {
        id: 'j1_269',
        text: 'mobilisation de techniques qui font qu\'on est écouté (articulation, débit, volume, intonation...)',
        parent: 'j1_4'
      },
      {
        id: 'j1_270',
        text: 'organisation du discours',
        parent: 'j1_4'
      },
      {
        id: 'j1_271',
        text: 'mémorisation des textes en situation de récitation et d\'interprétation',
        parent: 'j1_4'
      },
      {
        id: 'j1_272',
        text: 'lecture en situation de mise en voix d\'un texte',
        parent: 'j1_4'
      },
      {
        id: 'j1_15',
        text: 'Participer à des échanges dans des situations diversifiées',
        parent: 'j1_2'
      },
      {
        id: 'j1_273',
        text: 'respect des règles régulant les échanges',
        parent: 'j1_15'
      },
      {
        id: 'j1_274',
        text: 'conscience et prise en compte des enjeux',
        parent: 'j1_15'
      },
      {
        id: 'j1_275',
        text: 'organisation du propos',
        parent: 'j1_15'
      },
      {
        id: 'j1_276',
        text: 'moyen de l\'expression (vocabulaire, syntaxe...)',
        parent: 'j1_15'
      },
      {
        id: 'j1_277',
        text: 'Adopter une distance critique par rapport au langage produit',
        parent: 'j1_2'
      },
      {
        id: 'j1_278',
        text: 'règles régulant les échanges, repérage du respect ou non de ces règles dans les propos d\'un pair, aide à la reformulation',
        parent: 'j1_277'
      },
      {
        id: 'j1_279',
        text: 'prise en compte de règles explicites établies collectivement',
        parent: 'j1_277'
      },
      {
        id: 'j1_280',
        text: 'autocorrection après écoute (reformulations)',
        parent: 'j1_277'
      },
      {
        id: 'j1_8',
        text: 'Lire',
        parent: 'j1_1'
      },
      {
        id: 'j1_9',
        text: 'Identifier des mots de manière de plus en plus aisée',
        parent: 'j1_8'
      },
      {
        id: 'j1_281',
        text: 'discrimination auditive fine et analyse des constituants des mots (conscience phonologique)',
        parent: 'j1_9'
      },
      {
        id: 'j1_282',
        text: 'discrimination visuelle et connaissance des lettres',
        parent: 'j1_9'
      },
      {
        id: 'j1_283',
        text: 'correspondances graphophonologiques, combinatoire (construction des syllabes simples et complexes)',
        parent: 'j1_9'
      },
      {
        id: 'j1_284',
        text: 'mémorisation des composantes du code',
        parent: 'j1_9'
      },
      {
        id: 'j1_285',
        text: 'mémorisation de mots fréquents et irréguliers',
        parent: 'j1_9'
      },
      {
        id: 'j1_16',
        text: 'Comprendre un texte',
        parent: 'j1_8'
      },
      {
        id: 'j1_286',
        text: 'mobilisation de la compétence de décodage',
        parent: 'j1_16'
      },
      {
        id: 'j1_287',
        text: 'mise en oeuvre (guidée puis autonome) d\'une démarche pour décourir et comprendre un texte',
        parent: 'j1_16'
      },
      {
        id: 'j1_288',
        text: 'mobilisation des expériences antérieures de lecture et des connaissances qui en sont issues (sur des univers, des personnages types...)',
        parent: 'j1_16'
      },
      {
        id: 'j1_289',
        text: 'mobilisation de connaissances lexicales et de connaissances portant sur l\'univers évoqué par les textes ',
        parent: 'j1_16'
      },
      {
        id: 'j1_17',
        text: 'Pratiquer différentes formes de lecture',
        parent: 'j1_8'
      },
      {
        id: 'j1_290',
        text: 'mobilisation de la démarche permettant de comprendre',
        parent: 'j1_17'
      },
      {
        id: 'j1_291',
        text: 'prise en compte des enjeux de la lecture notamment : lire pour réaliser quelque chose, pour s\'informer, pour comprendre une histoire...',
        parent: 'j1_17'
      },
      {
        id: 'j1_292',
        text: 'mobilisation des connaissances lexicales en lien avec le texte lu',
        parent: 'j1_17'
      },
      {
        id: 'j1_293',
        text: 'repérage des lieux de lecture',
        parent: 'j1_17'
      },
      {
        id: 'j1_294',
        text: 'prise de repères dans les manuels, dans les ouvrages documentaires',
        parent: 'j1_17'
      },
      {
        id: 'j1_18',
        text: 'Lire à voix haute',
        parent: 'j1_8'
      },
      {
        id: 'j1_295',
        text: 'mobilisation de la compétence de décodage et de la compréhension du texte',
        parent: 'j1_18'
      },
      {
        id: 'j1_296',
        text: 'identification et prise en compte des marques de ponctuation',
        parent: 'j1_18'
      },
      {
        id: 'j1_297',
        text: 'recherche d\'effets à produire sur l\'auditoire en lien avec la compréhension (expressivité)',
        parent: 'j1_18'
      },
      {
        id: 'j1_19',
        text: 'Contrôler sa compréhension',
        parent: 'j1_8'
      },
      {
        id: 'j1_298',
        text: 'justifications possibles de son interprétation ou de ses réponses avec appui sur le texte et sur les autres connaissances mobilisées',
        parent: 'j1_19'
      },
      {
        id: 'j1_299',
        text: 'repérage de ses difficultés, tentatives pour les expliquer',
        parent: 'j1_19'
      },
      {
        id: 'j1_300',
        text: 'maintien d\'une attitude active et réflexive: vigilance relative à l\'objectif, demande d\'aide, mise en oeuvre de stratégies pour résoudre ses difficultés',
        parent: 'j1_19'
      },
      {
        id: 'j1_10',
        text: 'Ecrire',
        parent: 'j1_1'
      },
      {
        id: 'j1_21',
        text: 'Copier de manière experte',
        parent: 'j1_10'
      },
      {
        id: 'j1_301',
        text: 'maîtrise des gestes de l\'écriture cursive éxécutés avec une vitesse et une sureté croissante',
        parent: 'j1_21'
      },
      {
        id: 'j1_302',
        text: 'correspondances entre diverses écritures des lettres pour transcrire un texte',
        parent: 'j1_21'
      },
      {
        id: 'j1_303',
        text: 'stratégie de copie pour dépasser la copie lettre à lettre: prise d\'indices, mémorisation de mots puis de groupe de mots',
        parent: 'j1_21'
      },
      {
        id: 'j1_304',
        text: 'lecture : relire pour vérifier la conformité',
        parent: 'j1_21'
      },
      {
        id: 'j1_305',
        text: 'maniement du traitement de texte pour la mise en page de courts textes',
        parent: 'j1_21'
      },
      {
        id: 'j1_22',
        text: 'Produire des écrits en commençant à s\'approprier une démarche',
        parent: 'j1_10'
      },
      {
        id: 'j1_306',
        text: 'identification de caractéristiques propres à différents genres de texte',
        parent: 'j1_22'
      },
      {
        id: 'j1_307',
        text: 'mise en oeuvre (guidée puis autonome) d\'une démarche de production de texte:  trouver et organiser ses idées, élaborer et écrire des phrases ',
        parent: 'j1_22'
      },
      {
        id: 'j1_308',
        text: 'connaissances sur la langue (mémoire orthographique, règles d\'accord, ponctuation...)',
        parent: 'j1_22'
      },
      {
        id: 'j1_309',
        text: 'mobilisation des outils à disposition dans la classe liés à l\'étude de la langue',
        parent: 'j1_22'
      },
      {
        id: 'j1_23',
        text: 'Réviser et améliorer l\'écrit qu\'on a produit',
        parent: 'j1_10'
      },
      {
        id: 'j1_310',
        text: 'repérage de dysfonctionnements dans les textes produits (omissions, incohérences, redites...)',
        parent: 'j1_23'
      },
      {
        id: 'j1_311',
        text: 'mobilisation des connaissances portant sur le genre d\'écrit à produire et sur la langue',
        parent: 'j1_23'
      },
      {
        id: 'j1_312',
        text: 'vigilance orthographique, exercée d\'abord sur les points désignés par le professeur puis progressivement étendue',
        parent: 'j1_23'
      },
      {
        id: 'j1_313',
        text: 'utilisation d\'outils aidant à la correction: outils élaborés en classe, correcteur orthographique, guide de relecture...',
        parent: 'j1_23'
      },
      {
        id: 'j1_11',
        text: 'Comprendre le fonctionnement de la langue',
        parent: 'j1_1'
      },
      {
        id: 'j1_12',
        text: 'Maitriser les relations entre oral et écrit',
        parent: 'j1_11'
      },
      {
        id: 'j1_28',
        text: 'correspondances graphophonologiques',
        parent: 'j1_12'
      },
      {
        id: 'j1_29',
        text: 'valeur sonore de certaines lettres selon le contexte',
        parent: 'j1_12'
      },
      {
        id: 'j1_30',
        text: 'composition de certains graphèmes selon la lettre qui suit',
        parent: 'j1_12'
      },
      {
        id: 'j1_24',
        text: 'Mémoriser et se remémorer l\'orthographe de mots fréquents et de mots irréguliers dont le sens est connu',
        parent: 'j1_11'
      },
      {
        id: 'j1_31',
        text: 'vocabulaire des activités scolaires, vocabulaire spécialisé lié aux apprentissages disciplinaires',
        parent: 'j1_24'
      },
      {
        id: 'j1_32',
        text: 'séries de mots relevant d\'un même champ lexical, correspondant à une famille de mots, ayant une analogie morphologique... ',
        parent: 'j1_24'
      },
      {
        id: 'j1_33',
        text: 'mots invariables',
        parent: 'j1_24'
      },
      {
        id: 'j1_25',
        text: 'Identifier les principaux constituants d\'une phrase simple en relation avec sa cohérence sémantique',
        parent: 'j1_11'
      },
      {
        id: 'j1_34',
        text: 'identification d\'un groupe nominal',
        parent: 'j1_25'
      },
      {
        id: 'j1_35',
        text: 'identification du verbe (connaissance des propriétés permettant de l\'identifer)',
        parent: 'j1_25'
      },
      {
        id: 'j1_36',
        text: 'classes de mots : noms, verbes, déterminants, adjectifs, pronoms, mots invariables',
        parent: 'j1_25'
      },
      {
        id: 'j1_237',
        text: 'phrases affirmatives et négatives (notamment les transformations liées à l\'identification du verbe)',
        parent: 'j1_25'
      },
      {
        id: 'j1_238',
        text: 'ponctuation de fin de phrases et signes du discours rapporté',
        parent: 'j1_25'
      },
      {
        id: 'j1_26',
        text: 'Raisonner pour résoudre des problèmes orthographiques, d\'accord essentiellement',
        parent: 'j1_11'
      },
      {
        id: 'j1_239',
        text: 'compréhension : des éléments de la phrase fonctionnent ensemble, la notion de chaîne d\'accord pour déterminant-nom-adjectif (nombre et genre)',
        parent: 'j1_26'
      },
      {
        id: 'j1_240',
        text: 'compréhension : écrire ne consiste pas seulement à coder les sons',
        parent: 'j1_26'
      },
      {
        id: 'j1_241',
        text: 'la relation sujet-verbe (identification dans des situations simples)',
        parent: 'j1_26'
      },
      {
        id: 'j1_248',
        text: 'notion de nombre et de genre',
        parent: 'j1_26'
      },
      {
        id: 'j1_249',
        text: 'marques d\'accord pour les noms et les adjectifs (nombre et genre)',
        parent: 'j1_26'
      },
      {
        id: 'j1_250',
        text: 'découverte, en lien avec les activités d\'oral et de lexique, d\'autres formes de pluriel et de genre (féminin pour certain noms et adjectifs)',
        parent: 'j1_26'
      },
      {
        id: 'j1_251',
        text: 'marque de pluriel pour les verbes de la 3ème personne (ent)',
        parent: 'j1_26'
      },
      {
        id: 'j1_27',
        text: 'Comprendre comment se forment les verbes et orthographier les formes verbales les plus fréquentes',
        parent: 'j1_11'
      },
      {
        id: 'j1_252',
        text: 'familiarisation avec l\'indicatif présent, imparfait, futur, des verbes être, avoir, aller, faire, dire, venir, pouvoir, voir, vouloir, prendre',
        parent: 'j1_27'
      },
      {
        id: 'j1_253',
        text: 'familiarisation avec l\'indicatif présent, imparfait, futur, des verbes dont l\'infinitif se termine en -ER',
        parent: 'j1_27'
      },
      {
        id: 'j1_255',
        text: 'mémorisation des formes les plus fréquentes (3ème personne du singulier et du pluriel)',
        parent: 'j1_27'
      },
      {
        id: 'j1_257',
        text: 'compréhension de la construction de la forme conjuguée du verbe (radical-terminaison) ',
        parent: 'j1_27'
      },
      {
        id: 'j1_258',
        text: 'mémorisation des marques régulières liées à des personnes (-ons, -ez, -nt)',
        parent: 'j1_27'
      },
      {
        id: 'j1_314',
        text: 'familiarisation avec l\'infinitif, le participe passé',
        parent: 'j1_27'
      },
      {
        id: 'j1_315',
        text: 'notions de temps simples et de temps composés, formation du passé composé',
        parent: 'j1_27'
      },
      {
        id: 'j1_316',
        text: 'notions de marques liées au temps (imparfait et futur en particulier)',
        parent: 'j1_27'
      },
      {
        id: 'j1_317',
        text: 'mémorisation des verbes être et avoir au présent, à l\'imparfait et au futur',
        parent: 'j1_27'
      },
      {
        id: 'j1_318',
        text: 'homophones: les formes verbales a/à, est/et, ont/on, sont/son',
        parent: 'j1_27'
      },
      {
        id: 'j1_13',
        text: 'Identifier les relations entre les mots, entre les mots et leur contexte d\'utilisation et s\'en servir pour mieux comprendre ',
        parent: 'j1_11'
      },
      {
        id: 'j1_319',
        text: 'familles de mots, dérivation (préfixes et suffixes)',
        parent: 'j1_13'
      },
      {
        id: 'j1_320',
        text: 'catégorisation et relations entre termes génériques et termes spécifiques',
        parent: 'j1_13'
      },
      {
        id: 'j1_321',
        text: 'synonymie, antonymie pour les adjectifs et les verbes',
        parent: 'j1_13'
      },
      {
        id: 'j1_322',
        text: 'polysémie et relation avec les contextes d\'emploi',
        parent: 'j1_13'
      },
      {
        id: 'j1_323',
        text: 'sens propre et sens figuré',
        parent: 'j1_13'
      },
      {
        id: 'j1_324',
        text: 'registres (familier, courant, soutenu)',
        parent: 'j1_13'
      },
      {
        id: 'j1_14',
        text: 'Etendre ses connaissances lexicales, mémoriser et réutiliser des mots nouvellement appris',
        parent: 'j1_11'
      },
      {
        id: 'j1_325',
        text: 'définition d\'un mot, compréhension d\'un article du dictionnaire',
        parent: 'j1_14'
      },
      {
        id: 'j1_326',
        text: 'mobilisation des mots nouveaux en situation d\'écriture avec appui éventuel sur des outils',
        parent: 'j1_14'
      },
      {
        id: 'j1_5',
        text: 'Langues vivantes',
        parent: 'niveau1'
      },
      {
        id: 'j1_331',
        text: 'Approches culturelles',
        parent: 'j1_5'
      },
      {
        id: 'j1_340',
        text: 'découvrir quelques aspects culturels d\'une langue vivante étrangère et régionale',
        parent: 'j1_331'
      },
      {
        id: 'j1_341',
        text: 'identifier quelques grands repères culturels de l\'environnement quotidien des élèves du même âge dans les pays ou les régions étudiés ',
        parent: 'j1_340'
      },
      {
        id: 'j1_359',
        text: 'familiarisation avec la thématique de l\'enfant',
        parent: 'j1_340'
      },
      {
        id: 'j1_360',
        text: 'familiarisation avec la thématique de la classe',
        parent: 'j1_340'
      },
      {
        id: 'j1_361',
        text: 'familiarisation avec a thématique de l\'univers enfantin',
        parent: 'j1_340'
      },
      {
        id: 'j1_332',
        text: 'Activités langagières',
        parent: 'j1_5'
      },
      {
        id: 'j1_333',
        text: 'Comprendre l\'oral',
        parent: 'j1_332'
      },
      {
        id: 'j1_337',
        text: 'comprendre les consignes de la classe',
        parent: 'j1_333'
      },
      {
        id: 'j1_362',
        text: 'utiliser quelques mots familiers et expressions très courantes',
        parent: 'j1_333'
      },
      {
        id: 'j1_363',
        text: 'suivre le fil d\'une histoire très courte',
        parent: 'j1_333'
      },
      {
        id: 'j1_364',
        text: 'suivre des instructions très courtes et très simples',
        parent: 'j1_333'
      },
      {
        id: 'j1_365',
        text: 'répertoire élèmentaire de mots et d\'expressions simples relatifs à des situations concrètes particulières',
        parent: 'j1_333'
      },
      {
        id: 'j1_334',
        text: 'S\'exprimer oralement en continu',
        parent: 'j1_332'
      },
      {
        id: 'j1_338',
        text: 'reproduire un modèle oral',
        parent: 'j1_334'
      },
      {
        id: 'j1_366',
        text: 'utiliser des expressions courtes ou phrases proches des modèles rencontrés lors des apprentissages pour se décrire',
        parent: 'j1_334'
      },
      {
        id: 'j1_367',
        text: 'lire à haute voix de manière expressive un texte bref',
        parent: 'j1_334'
      },
      {
        id: 'j1_368',
        text: 'raconter une histoire courte à partir d\'images ou de modèles déjà rencontrés',
        parent: 'j1_334'
      },
      {
        id: 'j1_369',
        text: 'répertoire élèmentaire de mots sur les lieux d\'habitation et les personnes de l\'entourage de l\'enfant',
        parent: 'j1_334'
      },
      {
        id: 'j1_370',
        text: 'syntaxe de la description simple',
        parent: 'j1_334'
      },
      {
        id: 'j1_335',
        text: 'Prendre part à une conversation',
        parent: 'j1_332'
      },
      {
        id: 'j1_339',
        text: 'saluer, se présenter',
        parent: 'j1_335'
      },
      {
        id: 'j1_371',
        text: 'demander à quelqu\'un de ses nouvelles, réagir, et donner de ses nouvelles',
        parent: 'j1_335'
      },
      {
        id: 'j1_372',
        text: 'formuler des souhaits basiques',
        parent: 'j1_335'
      },
      {
        id: 'j1_373',
        text: 'utiliser des formules de politesse',
        parent: 'j1_335'
      },
      {
        id: 'j1_374',
        text: 'répondre à des questions sur des sujets familiers',
        parent: 'j1_335'
      },
      {
        id: 'j1_375',
        text: 'épeler des mots et des noms familiers',
        parent: 'j1_335'
      },
      {
        id: 'j1_376',
        text: 'répertoire élèmentaire de mots sur des sujets familiers',
        parent: 'j1_335'
      },
      {
        id: 'j1_377',
        text: 'syntaxe de conversation simple (question-réponse)',
        parent: 'j1_335'
      },
      {
        id: 'j1_378',
        text: 'situations de communication',
        parent: 'j1_335'
      },
      {
        id: 'j1_7',
        text: 'Enseignements artistiques',
        parent: 'niveau1'
      },
      {
        id: 'j1_62',
        text: 'Arts plastiques',
        parent: 'j1_7'
      },
      {
        id: 'j1_64',
        text: 'La représentation du monde',
        parent: 'j1_62'
      },
      {
        id: 'j1_345',
        text: 'utiliser le dessin dans toute sa diversité comme moyen d\'expression',
        parent: 'j1_64'
      },
      {
        id: 'j1_346',
        text: 'employer divers outils dont ceux numériques pour représenter',
        parent: 'j1_64'
      },
      {
        id: 'j1_347',
        text: 'prendre en compte l\'influence de ces outils, supports, matériaux, gestes sur la représetnations en 2D et 3D',
        parent: 'j1_64'
      },
      {
        id: 'j1_348',
        text: 'connaître diverses formes artistiques de représentation du mon de (oeuvres contemporaines, du passé, occidentales, extra-occidentales...)',
        parent: 'j1_64'
      },
      {
        id: 'j1_336',
        text: 'L\'expression des émotions',
        parent: 'j1_62'
      },
      {
        id: 'j1_342',
        text: 'exprimer sa sensibilité et son imagination en s\'emparant des élèments de langage plastique',
        parent: 'j1_336'
      },
      {
        id: 'j1_349',
        text: 'expérimenter les effets des couleurs, des matériaux... en explorant l\'organisation et la composition plastique',
        parent: 'j1_336'
      },
      {
        id: 'j1_350',
        text: 'exprimer ses émotions et sa sensibilité en confrontant sa perception à celle d\'autres élèves',
        parent: 'j1_336'
      },
      {
        id: 'j1_343',
        text: 'La narration et le témoignage par les images',
        parent: 'j1_62'
      },
      {
        id: 'j1_352',
        text: 'réaliser des productions plastiques pour raconter, témoigner',
        parent: 'j1_343'
      },
      {
        id: 'j1_353',
        text: 'transformer ou restructurer des images ou des objets',
        parent: 'j1_343'
      },
      {
        id: 'j1_354',
        text: 'articuler le texte et l\'image à des fins d\'illustration et de création',
        parent: 'j1_343'
      },
      {
        id: 'j1_63',
        text: 'Education musicale',
        parent: 'j1_7'
      },
      {
        id: 'j1_65',
        text: 'Chanter',
        parent: 'j1_63'
      },
      {
        id: 'j1_381',
        text: 'reproduire un modèle mélodique, rythmique',
        parent: 'j1_65'
      },
      {
        id: 'j1_382',
        text: 'chanter une mélodie simple avec une intonation juste ',
        parent: 'j1_65'
      },
      {
        id: 'j1_383',
        text: 'chanter une comptine, un chant par imitation',
        parent: 'j1_65'
      },
      {
        id: 'j1_384',
        text: 'interpréter un chant avec expressivité en respectant ses phrases musicales',
        parent: 'j1_65'
      },
      {
        id: 'j1_385',
        text: 'mobiliser son corps pour interpréter',
        parent: 'j1_65'
      },
      {
        id: 'j1_386',
        text: 'les principaux registres vocaux',
        parent: 'j1_65'
      },
      {
        id: 'j1_387',
        text: 'éléments constitutifs d\'une production vocale ',
        parent: 'j1_65'
      },
      {
        id: 'j1_388',
        text: 'répertoire varié de chansons et de comptines',
        parent: 'j1_65'
      },
      {
        id: 'j1_389',
        text: 'éléments de vocabulaire concernant l\'usage musicale de la voix',
        parent: 'j1_65'
      },
      {
        id: 'j1_66',
        text: 'Ecouter, comparer',
        parent: 'j1_63'
      },
      {
        id: 'j1_390',
        text: 'décrire et comparer les éléments sonores, identifier des élèments communs et contrastés',
        parent: 'j1_66'
      },
      {
        id: 'j1_391',
        text: 'repérer une organisation simple : récurrence d\'une mélodie, d\'un motif rythmique, d\'un thème...',
        parent: 'j1_66'
      },
      {
        id: 'j1_392',
        text: 'comparer des musiques et identifier des ressemblances et des différences',
        parent: 'j1_66'
      },
      {
        id: 'j1_393',
        text: 'lexique élémentaire pour décrire la musique (timbre, hauteur, intensité, tempo...)',
        parent: 'j1_66'
      },
      {
        id: 'j1_394',
        text: 'quelques grandes oeuvres du patrimoine ',
        parent: 'j1_66'
      },
      {
        id: 'j1_395',
        text: 'repères simples dans l\'espace et le temps',
        parent: 'j1_66'
      },
      {
        id: 'j1_67',
        text: 'Explorer, imaginer',
        parent: 'j1_63'
      },
      {
        id: 'j1_396',
        text: 'expérimenter les paramètres du son  (intensité, hauteur, timbre, durée...)',
        parent: 'j1_67'
      },
      {
        id: 'j1_397',
        text: 'imaginer des représentations graphiques ou corporelles de la musique',
        parent: 'j1_67'
      },
      {
        id: 'j1_398',
        text: 'inventer une organisation simple à partir d\'élèments sonores travaillés',
        parent: 'j1_67'
      },
      {
        id: 'j1_399',
        text: 'éléments de vocabulaire liés au son (intensité, hauteur, timbre, durée...)',
        parent: 'j1_67'
      },
      {
        id: 'j1_400',
        text: 'posture du musicien (écouter, respecter l\'autre, jouer ensemble)',
        parent: 'j1_67'
      },
      {
        id: 'j1_401',
        text: 'diversité des matériaux sonores',
        parent: 'j1_67'
      },
      {
        id: 'j1_380',
        text: 'Echanger, partager',
        parent: 'j1_63'
      },
      {
        id: 'j1_402',
        text: 'exprimer ses émotions, ses sentiments et ses préférences artistiques',
        parent: 'j1_380'
      },
      {
        id: 'j1_403',
        text: 'écouter et respecter l\'avis des autres et l\'expression de leur sensibilité',
        parent: 'j1_380'
      },
      {
        id: 'j1_404',
        text: 'respecter les règles et les exigences d\'une production musicale collective',
        parent: 'j1_380'
      },
      {
        id: 'j1_405',
        text: 'vocabulaire adapté à l\'expression de son avis',
        parent: 'j1_380'
      },
      {
        id: 'j1_406',
        text: 'conditions d\'un travail collectif (concentration, écoute, respect...)',
        parent: 'j1_380'
      },
      {
        id: 'j1_407',
        text: 'règles et contraintes d\'un travail collectif',
        parent: 'j1_380'
      },
      {
        id: 'j1_261',
        text: 'Education physique et sportive',
        parent: 'niveau1'
      },
      {
        id: 'j1_408',
        text: 'Produire une performance maximale, mesurée à une échéance donnée ',
        parent: 'j1_261'
      },
      {
        id: 'j1_20',
        text: 'transformer sa motricité spontanée pour maîtriser des actions motrices : courir, sauter, lancer',
        parent: 'j1_408'
      },
      {
        id: 'j1_37',
        text: 'utiliser sa main d\'adresse et son pied d\'appel, construire une adresse gestuelle et corporelle bilatérale',
        parent: 'j1_408'
      },
      {
        id: 'j1_38',
        text: 'mobiliser de façon optimale ses ressources pour produire des efforts à des intensités variables',
        parent: 'j1_408'
      },
      {
        id: 'j1_39',
        text: 'pendant l\'action, prendre des repères extèrieurs à son corps pour percevoir : espace, temps, durée, effort',
        parent: 'j1_408'
      },
      {
        id: 'j1_40',
        text: 'respecter les règles de sécurité édictées par le professeur',
        parent: 'j1_408'
      },
      {
        id: 'j1_409',
        text: 'Adapter ses déplacements à des environnements variés (activités de natation, de roule, de glisse, d\'équitation, d\'orientation, d\'escalade...)',
        parent: 'j1_261'
      },
      {
        id: 'j1_41',
        text: 'transformer sa motricité spontanée pour maitriser des actions motrices',
        parent: 'j1_409'
      },
      {
        id: 'j1_42',
        text: 's\'engager sans appréhension pour se déplacer dans différents environnements',
        parent: 'j1_409'
      },
      {
        id: 'j1_43',
        text: 'lire le milieu et adaper ses déplacements à ses contraintes',
        parent: 'j1_409'
      },
      {
        id: 'j1_44',
        text: 'respecter les règles essentielles de sécurité',
        parent: 'j1_409'
      },
      {
        id: 'j1_45',
        text: 'reconnaître une situation à risque',
        parent: 'j1_409'
      },
      {
        id: 'j1_410',
        text: 'S\'exprimer devant les autres par une prestation artistique et/ou acrobatique',
        parent: 'j1_261'
      },
      {
        id: 'j1_46',
        text: 's\'exposer aux autres : s\'engager avec facilité dans des situations d\'expression personnelle sans crainte de se montrer',
        parent: 'j1_410'
      },
      {
        id: 'j1_47',
        text: 'exploiter le pouvoir expressif du corps en transformant sa motricité et en construisant un répertoire d\'actions nouvelles à visée esthétique',
        parent: 'j1_410'
      },
      {
        id: 'j1_48',
        text: 's\'engager en sécurité dans des situations acrobatiques en constuisant de nouveaux pouvoirs moteurs',
        parent: 'j1_410'
      },
      {
        id: 'j1_49',
        text: 'synchroniser ses actions avec celles de ses partenaires',
        parent: 'j1_410'
      },
      {
        id: 'j1_411',
        text: 'Conduire et maîtriser un affrontement collectif ou interindividuel',
        parent: 'j1_261'
      },
      {
        id: 'j1_50',
        text: 'rechercher le gain du jeu ou  de la rencontre',
        parent: 'j1_411'
      },
      {
        id: 'j1_51',
        text: 'comprendre le but du jeu et orienter ses actions vers la cible',
        parent: 'j1_411'
      },
      {
        id: 'j1_52',
        text: 'accepter l\'opposition et la coopération',
        parent: 'j1_411'
      },
      {
        id: 'j1_53',
        text: 's\'adapter aux actions d\'un adversaire',
        parent: 'j1_411'
      },
      {
        id: 'j1_54',
        text: 'coordonner des actions motrices simples',
        parent: 'j1_411'
      },
      {
        id: 'j1_55',
        text: 's\'informer, prendre des repères pour agir seul ou avec les autres',
        parent: 'j1_411'
      },
      {
        id: 'j1_56',
        text: 'respecter les règles essentielles de jeu et de sécurité',
        parent: 'j1_411'
      },
      {
        id: 'j1_262',
        text: 'Enseignement moral et civique',
        parent: 'niveau1'
      },
      {
        id: 'j1_57',
        text: 'La sensibilité : soi et les autres',
        parent: 'j1_262'
      },
      {
        id: 'j1_102',
        text: 'Identifier et partager des émotions, des sentiments, dans des situations et à propos d\'objets diversifiés',
        parent: 'j1_57'
      },
      {
        id: 'j1_215',
        text: 'connaissance et reconnaissance des émotions de base',
        parent: 'j1_102'
      },
      {
        id: 'j1_216',
        text: 'connaissance et structuration du vocabulaire des sentiments et des émotions',
        parent: 'j1_102'
      },
      {
        id: 'j1_219',
        text: 'expérience de la diversité des expressions des émotions et des sentiments',
        parent: 'j1_102'
      },
      {
        id: 'j1_232',
        text: 'Se situer et exprimer en respectant les codes de la communication orale, les règles de l\'échange, et le statut de l\'interlocuteur',
        parent: 'j1_57'
      },
      {
        id: 'j1_234',
        text: 'Prendre soin de soi et des autres',
        parent: 'j1_57'
      },
      {
        id: 'j1_235',
        text: 'le soin du langage : la politesse',
        parent: 'j1_234'
      },
      {
        id: 'j1_236',
        text: 'le soin du corps, de l\'environnement immédiat et plus lointain',
        parent: 'j1_234'
      },
      {
        id: 'j1_242',
        text: 'le soin des biens personnels et collectifs',
        parent: 'j1_234'
      },
      {
        id: 'j1_243',
        text: 'l\'intégrité de la personne',
        parent: 'j1_234'
      },
      {
        id: 'j1_244',
        text: 'Accepter les différences',
        parent: 'j1_57'
      },
      {
        id: 'j1_245',
        text: 'le respect des pairs et des adultes',
        parent: 'j1_244'
      },
      {
        id: 'j1_246',
        text: 'les atteintes à la personne d\'autrui',
        parent: 'j1_244'
      },
      {
        id: 'j1_247',
        text: 'le respect des différences, interconnaissance et tolérance',
        parent: 'j1_244'
      },
      {
        id: 'j1_254',
        text: 'la conscience de la diversité des croyances et des convictions',
        parent: 'j1_244'
      },
      {
        id: 'j1_256',
        text: 'Identifier les symboles de la République : le drapeau, l\'hymne national, les monuments, la fête nationale',
        parent: 'j1_57'
      },
      {
        id: 'j1_259',
        text: 'Apprendre à coopérer',
        parent: 'j1_57'
      },
      {
        id: 'j1_58',
        text: 'Le droit à la règle : des principes pour vivre avec les autres',
        parent: 'j1_262'
      },
      {
        id: 'j1_260',
        text: 'Adapter sa tenue, son langage et son comportement aux différents contextes de vie et aux différents interlocuteurs',
        parent: 'j1_58'
      },
      {
        id: 'j1_327',
        text: 'initiation aux différents registres de langue',
        parent: 'j1_260'
      },
      {
        id: 'j1_328',
        text: 'Respecter les autres et les règles de la vie collective, participer à la définition de règles communes dans le cadre adéquat',
        parent: 'j1_58'
      },
      {
        id: 'j1_344',
        text: 'les règles de vie de la classe, de l\'école',
        parent: 'j1_328'
      },
      {
        id: 'j1_351',
        text: 'les droits et devoirs de l\'enfant, de l\'élève',
        parent: 'j1_328'
      },
      {
        id: 'j1_356',
        text: 'Comprendre que la règle commune peut autoriser, interdire, obliger (APER)',
        parent: 'j1_58'
      },
      {
        id: 'j1_357',
        text: 'Connaître ses droits et les moyens de les faire valoir',
        parent: 'j1_58'
      },
      {
        id: 'j1_358',
        text: 'Comprendre qu\'il existe une certaine gradation des sanctions et que celle-ci est éducative (accompagnement, réparation...)',
        parent: 'j1_58'
      },
      {
        id: 'j1_379',
        text: 'Connaître quelques principes et valeurs d\'une société démocratique',
        parent: 'j1_58'
      },
      {
        id: 'j1_412',
        text: 'les valeurs : liberté, égalité, laicité',
        parent: 'j1_379'
      },
      {
        id: 'j1_413',
        text: 'l\'égalité de droit entre les femmes et les hommes',
        parent: 'j1_379'
      },
      {
        id: 'j1_414',
        text: 'les droits et les devoirs de la personne, de l\'élève, du citoyen',
        parent: 'j1_379'
      },
      {
        id: 'j1_59',
        text: 'Le jugement : penser par soi-même et avec les autres',
        parent: 'j1_262'
      },
      {
        id: 'j1_415',
        text: 'Exposer une courte argumentation pour exprimer et justifier un point de vue et un choix personnels',
        parent: 'j1_59'
      },
      {
        id: 'j1_416',
        text: 'le choix et sa justification',
        parent: 'j1_415'
      },
      {
        id: 'j1_417',
        text: 'connaissance de quelques structures simples de l\'argumentation (connecteurs logiques et lexique)',
        parent: 'j1_415'
      },
      {
        id: 'j1_418',
        text: 'les raisons qui font juger une action bonne ou mauvaise',
        parent: 'j1_415'
      },
      {
        id: 'j1_419',
        text: 'S\'affirmer dans un débat sans imposer son point de vue aux autres et accepter le point de vue des autres',
        parent: 'j1_59'
      },
      {
        id: 'j1_420',
        text: 'les règles de la discussion en groupe',
        parent: 'j1_419'
      },
      {
        id: 'j1_421',
        text: 'initation aux règles du débat',
        parent: 'j1_419'
      },
      {
        id: 'j1_422',
        text: 'initiation à l\'argumentation',
        parent: 'j1_419'
      },
      {
        id: 'j1_423',
        text: 'les préjugés et les stéréotypes',
        parent: 'j1_419'
      },
      {
        id: 'j1_424',
        text: 'Aborder la laicité comme liberté de penser et de croire/ne pas croire',
        parent: 'j1_59'
      },
      {
        id: 'j1_425',
        text: 'initiation aux différences entre penser, croire, savoir',
        parent: 'j1_424'
      },
      {
        id: 'j1_426',
        text: 'Différencier son intérêt particulier de l\'intérêt général',
        parent: 'j1_59'
      },
      {
        id: 'j1_427',
        text: 'la notion de bien commun dans la classe, dans l\'école',
        parent: 'j1_426'
      },
      {
        id: 'j1_428',
        text: 'les valeurs personnelles et collectives',
        parent: 'j1_426'
      },
      {
        id: 'j1_60',
        text: 'L\'engagement : agir individuellement et collectivement',
        parent: 'j1_262'
      },
      {
        id: 'j1_429',
        text: 'Respecter les engagements pris envers soi-même et envers les autres',
        parent: 'j1_60'
      },
      {
        id: 'j1_430',
        text: 's\'impliquer dans la vie scolaire',
        parent: 'j1_429'
      },
      {
        id: 'j1_431',
        text: 'l\'engagement moral : loyauté, promesse, confiance',
        parent: 'j1_429'
      },
      {
        id: 'j1_432',
        text: 'Réaliser un projet collectif',
        parent: 'j1_60'
      },
      {
        id: 'j1_433',
        text: 'Coopérer en vue d\'un objectif commun',
        parent: 'j1_60'
      },
      {
        id: 'j1_434',
        text: 'Expliquer en mots simple la fraternité et la solidarité',
        parent: 'j1_60'
      },
      {
        id: 'j1_435',
        text: 'Prendre des responsabilités dans la classe et dans l\'école',
        parent: 'j1_60'
      },
      {
        id: 'j1_437',
        text: 'la participation démocratique',
        parent: 'j1_435'
      },
      {
        id: 'j1_438',
        text: 'la responsabilité',
        parent: 'j1_435'
      },
      {
        id: 'j1_439',
        text: 'le développement durable',
        parent: 'j1_435'
      },
      {
        id: 'j1_441',
        text: 'S\'impliquer dans la vie collective à différents niveaux (APS)',
        parent: 'j1_60'
      },
      {
        id: 'j1_329',
        text: 'Questionner le monde',
        parent: 'niveau1'
      },
      {
        id: 'j1_442',
        text: 'Questionner le monde du vivant, de la matière et des objets',
        parent: 'j1_329'
      },
      {
        id: 'j1_443',
        text: 'Qu\'est-ce que la matière?',
        parent: 'j1_442'
      },
      {
        id: 'j1_450',
        text: 'Identifier les trois états de la matière et observer des changements d\'états',
        parent: 'j1_443'
      },
      {
        id: 'j1_451',
        text: 'Identifier un changement d\'état de l\'eau dans un phénomène de la vie quotidienne',
        parent: 'j1_443'
      },
      {
        id: 'j1_444',
        text: 'Comment reconnaître le monde vivant?',
        parent: 'j1_442'
      },
      {
        id: 'j1_452',
        text: 'Connaître des caractéristiques du monde vivant, ses intéractions, sa diversité',
        parent: 'j1_444'
      },
      {
        id: 'j1_453',
        text: 'Reconnaître des comportements favorables à sa santé',
        parent: 'j1_444'
      },
      {
        id: 'j1_445',
        text: 'Les objets techniques',
        parent: 'j1_442'
      },
      {
        id: 'j1_454',
        text: 'Comprendre la fonction et le fonctionnement d\'objets fabriqués',
        parent: 'j1_445'
      },
      {
        id: 'j1_455',
        text: 'Réaliser quelques objets et circuits électriques simples, en respectant les règles élémentaires de sécurité',
        parent: 'j1_445'
      },
      {
        id: 'j1_456',
        text: 'Commencer à s\'approprier un environnement numérique',
        parent: 'j1_445'
      },
      {
        id: 'j1_446',
        text: 'Questionner l\'espace et le temps',
        parent: 'j1_329'
      },
      {
        id: 'j1_447',
        text: 'Se situer dans l\'espace',
        parent: 'j1_446'
      },
      {
        id: 'j1_457',
        text: 'Se repérer dans l\'espace et le représenter',
        parent: 'j1_447'
      },
      {
        id: 'j1_458',
        text: 'Situer un lieu sur une carte, un globe ou un écran informatique',
        parent: 'j1_447'
      },
      {
        id: 'j1_448',
        text: 'Se situer dans le temps',
        parent: 'j1_446'
      },
      {
        id: 'j1_459',
        text: 'Se repérer dans l\'espace et le représenter',
        parent: 'j1_448'
      },
      {
        id: 'j1_460',
        text: 'Repérer et situer quelques évènements dans un temps long',
        parent: 'j1_448'
      },
      {
        id: 'j1_449',
        text: 'Explorer les organisations du monde',
        parent: 'j1_329'
      },
      {
        id: 'j1_461',
        text: 'Comparer les modes de vie',
        parent: 'j1_449'
      },
      {
        id: 'j1_464',
        text: 'comparer des modes de vie à différentes époques ou de différentes cultures',
        parent: 'j1_461'
      },
      {
        id: 'j1_465',
        text: 'quelques éléments tels que l\'alimentation, l\'habitat, les outils, la guerre...',
        parent: 'j1_461'
      },
      {
        id: 'j1_466',
        text: 'quelques représentations du monde à travers le temps historique',
        parent: 'j1_461'
      },
      {
        id: 'j1_467',
        text: 'les modes de vie caractéristiques dans quelques espaces emblématiques',
        parent: 'j1_461'
      },
      {
        id: 'j1_462',
        text: 'Comprendre qu\'un espace est organisé',
        parent: 'j1_449'
      },
      {
        id: 'j1_468',
        text: 'découvrir le quartier, le village, la ville : ses principaux espaces et ses principales fonctions',
        parent: 'j1_462'
      },
      {
        id: 'j1_469',
        text: 'reconnaître différents paysages : le slittoraux, les massifs montagneux, les campagnes, les villes, les déserts',
        parent: 'j1_462'
      },
      {
        id: 'j1_463',
        text: 'Identifier des paysages',
        parent: 'j1_449'
      },
      {
        id: 'j1_330',
        text: 'Mathématiques',
        parent: 'niveau1'
      },
      {
        id: 'j1_233',
        text: 'Nombres et calculs',
        parent: 'j1_330'
      },
      {
        id: 'j1_355',
        text: 'Comprendre et utiliser des nombres entiers pour dénombrer, ordonner, repérer, comparer',
        parent: 'j1_233'
      },
      {
        id: 'j1_436',
        text: 'dénombrer, constituer et comparer des collections',
        parent: 'j1_355'
      },
      {
        id: 'j1_440',
        text: 'utiliser diverses stratégies de dénombrement : décomposition, recomposition, unités intermédiaires...',
        parent: 'j1_355'
      },
      {
        id: 'j1_470',
        text: 'repérer un rang ou une position dans une file ou sur une piste',
        parent: 'j1_355'
      },
      {
        id: 'j1_471',
        text: 'faire le lien entre le rang dans une liste et le nombre d\'élèments qui le précèdent (ordinaux et cardinaux)',
        parent: 'j1_355'
      },
      {
        id: 'j1_472',
        text: 'comparer, ranger, encadrer, intercaler des nombres entiers en utilisant les symboles (&lt;,&gt;,=)',
        parent: 'j1_355'
      },
      {
        id: 'j1_474',
        text: 'Nommer, lire, écire, représenter des nombres entiers',
        parent: 'j1_233'
      },
      {
        id: 'j1_475',
        text: 'utiliser diverses représentations des nombres',
        parent: 'j1_474'
      },
      {
        id: 'j1_476',
        text: 'passer d\'une représentation à l\'autre, en particulier associer les noms des nombres à leur écritures chiffrées',
        parent: 'j1_474'
      },
      {
        id: 'j1_477',
        text: 'interpréter les noms des nombres à l\'aide des unités de numération et des écritures arithmétiques',
        parent: 'j1_474'
      },
      {
        id: 'j1_478',
        text: 'associer un nombre enier à une position sur une demi droite graduée, ainsi qu\'à la distance de ce point à l\'origine',
        parent: 'j1_474'
      },
      {
        id: 'j1_479',
        text: 'associer un nombre ou un encadrement à une grandeuren mesurant celle-ci à l\'aide d\'une unité',
        parent: 'j1_474'
      },
      {
        id: 'j1_480',
        text: 'Résoudre des problèmes en utilisant des nombres entiers et le calcul',
        parent: 'j1_233'
      },
      {
        id: 'j1_481',
        text: 'résoudre des problèmes issus de situations de la vie quotidienne ou adapté de jeux conduisant à utiliser les 4 opérations',
        parent: 'j1_480'
      },
      {
        id: 'j1_482',
        text: 'problèmes relevant des structures additives (+/-)',
        parent: 'j1_480'
      },
      {
        id: 'j1_483',
        text: 'problèmes relevant des structures multiplicatives (x/:)',
        parent: 'j1_480'
      },
      {
        id: 'j1_484',
        text: 'modéliser ces problèmes à l\'aide d\'écritures mathématiques',
        parent: 'j1_480'
      },
      {
        id: 'j1_485',
        text: 'sens des symboles (+/-/x/:)',
        parent: 'j1_480'
      },
      {
        id: 'j1_486',
        text: 'Organisation et gestion de données',
        parent: 'j1_233'
      },
      {
        id: 'j1_487',
        text: 'exploiter des données numériques pour répondre à des questions',
        parent: 'j1_486'
      },
      {
        id: 'j1_488',
        text: 'pésenter et organiser des mesures sous forme de tableaux',
        parent: 'j1_486'
      },
      {
        id: 'j1_489',
        text: 'modes de représentation de données numériques : tableaux, graphiques...',
        parent: 'j1_486'
      },
      {
        id: 'j1_490',
        text: 'Calculer avec des nombres entiers',
        parent: 'j1_233'
      },
      {
        id: 'j1_491',
        text: 'mémoriser des faits numériques et des procédures',
        parent: 'j1_490'
      },
      {
        id: 'j1_492',
        text: 'mémoriser la table d\'addition',
        parent: 'j1_490'
      },
      {
        id: 'j1_493',
        text: 'mémoriser la table de multiplication',
        parent: 'j1_490'
      },
      {
        id: 'j1_494',
        text: 'utiliser la décomposition additive et multiplicative (de 10, de 100), compléments à la dizaine supérieure, doubles et moitiés...',
        parent: 'j1_490'
      },
      {
        id: 'j1_495',
        text: 'élaborer ou choisir des stratégies de calcul à l\'oral ou à l\'écrit',
        parent: 'j1_490'
      },
      {
        id: 'j1_473',
        text: 'vérifier la vraisemblance d\'un résultat, notamment en estimant un ordre de grandeur',
        parent: 'j1_490'
      },
      {
        id: 'j1_497',
        text: 'Calculer mentalement pour obtenir un résultat exact ou évaluer un ordre de grandeur',
        parent: 'j1_233'
      },
      {
        id: 'j1_498',
        text: 'Calculer en utilisant des écritures en ligne additives, soustractives, multiplicatives, mixtes',
        parent: 'j1_233'
      },
      {
        id: 'j1_499',
        text: 'Mettre en oeuvre un algorithme de calcul posé pour l\'addition, la soustraction, la multiplication',
        parent: 'j1_233'
      },
      {
        id: 'j1_496',
        text: 'Grandeurs et mesures',
        parent: 'j1_330'
      },
      {
        id: 'j1_500',
        text: 'Comparer, estimer, mesurer des longueurs, des masses, des contenances, des durées',
        parent: 'j1_496'
      },
      {
        id: 'j1_501',
        text: 'comparer des objets selon plusieurs grandeurs et identifier quand il s\'agit d\'une longueur, d\'une masse, d\'une contenance, d\'une durée',
        parent: 'j1_500'
      },
      {
        id: 'j1_502',
        text: 'comparer des masses, des longueurs et des contenances, directement, en introduisant la comparaison à un objet intermédiaire ou par mesurage',
        parent: 'j1_500'
      },
      {
        id: 'j1_503',
        text: 'estimer les ordres de grandeurs de quelques longueurs, masses, contenances en relation avec les unités métriques. Vérifier éventuellement avec un instrument',
        parent: 'j1_500'
      },
      {
        id: 'j1_504',
        text: 'mesurer des longueurs avec un instrument adapté, notamment en reportant une unité',
        parent: 'j1_500'
      },
      {
        id: 'j1_505',
        text: 'mesurer des contenances et des masses avec des instruments adpatés',
        parent: 'j1_500'
      },
      {
        id: 'j1_506',
        text: 'encadrer une grandeur par deux nombres entiers d\'unités',
        parent: 'j1_500'
      },
      {
        id: 'j1_507',
        text: 'exprimer une mesure dans une ou plusieurs unités choisies ou imposées',
        parent: 'j1_500'
      },
      {
        id: 'j1_508',
        text: 'comparer, estimer, mesurer des durées (minute, heure, jour, semaine, mois, année, siècle, millénaire) ',
        parent: 'j1_500'
      },
      {
        id: 'j1_509',
        text: 'dans des cas simples, représenter une grandeur par une longueur, notamment une demi-droite graduée',
        parent: 'j1_500'
      },
      {
        id: 'j1_510',
        text: 'Résoudre des problèmes impliquant des longueurs, des masses, des contenances, des prix',
        parent: 'j1_496'
      },
      {
        id: 'j1_511',
        text: 'résoudre des problèmes, notamment de mesurage et de comparaison, en utilisant les opérations sur les grandeurs ou sur les nombres',
        parent: 'j1_510'
      },
      {
        id: 'j1_512',
        text: 'résoudre des problèmes impliquant des conversions simples d\'une unité usuelle à une autre',
        parent: 'j1_510'
      },
      {
        id: 'j1_513',
        text: 'Espace et géométrie',
        parent: 'j1_330'
      },
      {
        id: 'j1_514',
        text: 'Se repérer et se déplacer en utilisant des repères',
        parent: 'j1_513'
      },
      {
        id: 'j1_515',
        text: 'se repérer dans son environnement proche',
        parent: 'j1_514'
      },
      {
        id: 'j1_516',
        text: 'situer des objets ou des personnes les uns par rapport aux autres ou par rapport à  d\'autres repères',
        parent: 'j1_514'
      },
      {
        id: 'j1_517',
        text: 'produire des représentations des espaces familiers et moins familiers',
        parent: 'j1_514'
      },
      {
        id: 'j1_518',
        text: 's\'orienter et se déplacer en utilisant des repères',
        parent: 'j1_514'
      },
      {
        id: 'j1_519',
        text: 'coder et décoder pour prévoir, représenter et réaliser des déplacements dans des espaces familiers, sur un quadrillage, sur un écran',
        parent: 'j1_514'
      },
      {
        id: 'j1_520',
        text: 'Reconnaître, nommer, décrire, reproduire quelques solides',
        parent: 'j1_513'
      },
      {
        id: 'j1_521',
        text: 'reconnaître et trier les solides usuels parmi des solides variés',
        parent: 'j1_520'
      },
      {
        id: 'j1_522',
        text: 'décrire et comparer des solides en utilisant le vocabulaire approprié',
        parent: 'j1_520'
      },
      {
        id: 'j1_523',
        text: 'reproduire des solides',
        parent: 'j1_520'
      },
      {
        id: 'j1_524',
        text: 'fabriquer un cube à partir d\'un patron fourni',
        parent: 'j1_520'
      },
      {
        id: 'j1_525',
        text: 'Reconnaître, nommer, décrire, reproduire, construire quelques figures géométriques',
        parent: 'j1_513'
      },
      {
        id: 'j1_527',
        text: 'décrire, reproduire des figures ou des assemblages de figures planes sur papier quadrillé ou uni',
        parent: 'j1_525'
      },
      {
        id: 'j1_528',
        text: 'utiliser la règle, le compas ou l\'équerre comme instrument de tracé',
        parent: 'j1_525'
      },
      {
        id: 'j1_529',
        text: 'reconnaître et nommer les figures usuelles',
        parent: 'j1_525'
      },
      {
        id: 'j1_530',
        text: 'reconnaître et décrire à partir des côtés et des angles droits : carré, rectangle, triangle rectangle',
        parent: 'j1_525'
      },
      {
        id: 'j1_531',
        text: 'construire carré, rectangle, triangle rectangle sur un support uni  connaissant la longueur des côtés',
        parent: 'j1_525'
      },
      {
        id: 'j1_532',
        text: 'construire un cercle connaissant son centre et un point, ou son centre et son rayon',
        parent: 'j1_525'
      },
      {
        id: 'j1_526',
        text: 'Reconnaître et utiliser les notions d\'alignement, d\'angle droit, d\'égalité de longueurs, de milieu et de symétrie',
        parent: 'j1_513'
      },
      {
        id: 'j1_533',
        text: 'utiliser la règle pour repérer et produire des alignements',
        parent: 'j1_526'
      },
      {
        id: 'j1_534',
        text: 'repérer et produire des angles droits à l\'aide d\'un gabarit, d\'une équerre',
        parent: 'j1_526'
      },
      {
        id: 'j1_535',
        text: 'reporter une longueur sur une droite déjà tracée',
        parent: 'j1_526'
      },
      {
        id: 'j1_536',
        text: 'repérer ou trouver le milieu d\'un segment',
        parent: 'j1_526'
      },
      {
        id: 'j1_537',
        text: 'reconnaître si une figure présente un axe de symétrie (à trouver)',
        parent: 'j1_526'
      },
      {
        id: 'j1_538',
        text: 'compléter une figure pour qu\'elle soit symétrique par rapport à un axe donné',
        parent: 'j1_526'
      },
      {
        id: 'niveau2',
        text: 'CYCLE 3 (CM1-6ème)',
        parent: 'compAsso'
      },
      {
        id: 'j1_68',
        text: 'Français',
        parent: 'niveau2'
      },
      {
        id: 'j1_69',
        text: 'Langage oral',
        parent: 'j1_68'
      },
      {
        id: 'j1_70',
        text: 'Ecouter pour comprendre un message oral, un propos, un discours, un texte lu',
        parent: 'j1_69'
      },
      {
        id: 'j1_542',
        text: 'maintien d\'une attention orientée en fonction du but',
        parent: 'j1_70'
      },
      {
        id: 'j1_543',
        text: 'identification et mémorisation des informations importantes, enchainements et mise en relation de ces informations ainsi que des informations implicites',
        parent: 'j1_70'
      },
      {
        id: 'j1_544',
        text: 'repérage et prise en compte des différents genres de discours, du lexique et des références culturelles liées au domaine du message ou du texte entendu ',
        parent: 'j1_70'
      },
      {
        id: 'j1_545',
        text: 'repérage d\'éventuelles difficultés de compréhension, verbalisation de ces difficultés et des moyens d\'y répondre ',
        parent: 'j1_70'
      },
      {
        id: 'j1_546',
        text: 'vigilance critique par rapport au langage écouté',
        parent: 'j1_70'
      },
      {
        id: 'j1_71',
        text: 'Parler en prenant en compte son auditoire pour partager un point de vue personnel, pour oraliser une oeuvre de la littérature orale, pour tenir un propos élaboré et continu relevant d\'un genre de l\'oral',
        parent: 'j1_69'
      },
      {
        id: 'j1_539',
        text: 'mobilisation des ressources de la voix et du corps pour être entendu et compris',
        parent: 'j1_71'
      },
      {
        id: 'j1_540',
        text: 'organisation et structuration du propos selon le genre de discours, mobilisation des formes, des tournures et du lexique appropriés',
        parent: 'j1_71'
      },
      {
        id: 'j1_541',
        text: 'technique de mise en voix des textes littéaires',
        parent: 'j1_71'
      },
      {
        id: 'j1_549',
        text: 'technique de mémorisation des textes présentés ou interprétés',
        parent: 'j1_71'
      },
      {
        id: 'j1_72',
        text: 'Participer à des échanges dans des situations de communication diversifiées',
        parent: 'j1_69'
      },
      {
        id: 'j1_547',
        text: 'prise en compte de la parole des différents interlocuteurs dans un débat et identification des points de vue exprimés',
        parent: 'j1_72'
      },
      {
        id: 'j1_548',
        text: 'présentation d\'une idée, d\'un point de vue en tenant compte des autres points de vue exprimés',
        parent: 'j1_72'
      },
      {
        id: 'j1_550',
        text: 'mobilisation de stratégie argumentative',
        parent: 'j1_72'
      },
      {
        id: 'j1_551',
        text: 'respect des règles conversationnelles',
        parent: 'j1_72'
      },
      {
        id: 'j1_552',
        text: 'organisation du propos',
        parent: 'j1_72'
      },
      {
        id: 'j1_553',
        text: 'construction et mobilisation de moyens d\'expression',
        parent: 'j1_72'
      },
      {
        id: 'j1_554',
        text: 'mise à distance de l\'expérience et mobilisation des connaissances ',
        parent: 'j1_72'
      },
      {
        id: 'j1_555',
        text: 'identification et vérification de ce qui relève du singulier, de l\'exemple, du général...',
        parent: 'j1_72'
      },
      {
        id: 'j1_556',
        text: 'lexique des enseignements et des disciplines',
        parent: 'j1_72'
      },
      {
        id: 'j1_101',
        text: 'Adopter une attitude critique par rapport au langage produit',
        parent: 'j1_69'
      },
      {
        id: 'j1_557',
        text: 'règles régulant les échanges, repérage du respect ou non de ces règles dans les propos d\'un pair et aide à la reformulation ',
        parent: 'j1_101'
      },
      {
        id: 'j1_558',
        text: 'prise en compte de critères d\'évaluation explicites élaborés collectivement pour les présentations orales',
        parent: 'j1_101'
      },
      {
        id: 'j1_559',
        text: 'autocorrection après écoute (reformulation)',
        parent: 'j1_101'
      },
      {
        id: 'j1_560',
        text: 'fonctionnement de la syntaxe de la langue orale et comparaison avec l\'écrit',
        parent: 'j1_101'
      },
      {
        id: 'j1_561',
        text: 'relevé et emploi de mots, d\'expressions et de formulations',
        parent: 'j1_101'
      },
      {
        id: 'j1_73',
        text: 'Lecture et compréhension de l\'écrit',
        parent: 'j1_68'
      },
      {
        id: 'j1_74',
        text: 'Renforcer la fluidité de la lecture',
        parent: 'j1_73'
      },
      {
        id: 'j1_566',
        text: 'mémoriser des mots fréquents et irréguliers',
        parent: 'j1_74'
      },
      {
        id: 'j1_567',
        text: 'mettre en oeuvre de manière efficace et rapide le décodage',
        parent: 'j1_74'
      },
      {
        id: 'j1_568',
        text: 'prendre en compte des groupes syntaxiques, des marques de ponctuation',
        parent: 'j1_74'
      },
      {
        id: 'j1_76',
        text: 'Comprendre un texte littéraire et l\'interpréter',
        parent: 'j1_73'
      },
      {
        id: 'j1_564',
        text: 'mise en oeuvre d\'une démarche de compréhension à partir d\'un texte entendu ou lu (personnages, actions, chronologie, informations explicites...)',
        parent: 'j1_76'
      },
      {
        id: 'j1_565',
        text: 'identification du genre et de ses enjeux',
        parent: 'j1_76'
      },
      {
        id: 'j1_569',
        text: 'mobilisation des expériences antérieures de lecture et des connaissances qui en sont issues',
        parent: 'j1_76'
      },
      {
        id: 'j1_77',
        text: 'Comprendre des textes, des documents, des images et les interpréter',
        parent: 'j1_73'
      },
      {
        id: 'j1_78',
        text: 'Contrôler sa compréhension et adopter un comportement de lecteur autonome',
        parent: 'j1_73'
      },
      {
        id: 'j1_80',
        text: 'Ecriture',
        parent: 'j1_68'
      },
      {
        id: 'j1_81',
        text: 'Copier un texte d\'au moins quinze lignes sans erreur avec une présentation soignée et adaptée',
        parent: 'j1_80'
      },
      {
        id: 'j1_82',
        text: 'Utiliser ses connaissances pour mieux réfléchir, mieux écrire un texte',
        parent: 'j1_80'
      },
      {
        id: 'j1_83',
        text: 'Répondre à une question par une phrase complète à l\'écrit',
        parent: 'j1_80'
      },
      {
        id: 'j1_108',
        text: 'Rédiger un texte d\'une quinzaine de lignes en utilisant ses connaissances en vocabulaire et en grammaire (récit, description, dialogue, texte poétique, compte-rendu...)',
        parent: 'j1_80'
      },
      {
        id: 'j1_84',
        text: 'Etude de la langue: Vocabulaire',
        parent: 'j1_68'
      },
      {
        id: 'j1_85',
        text: 'Comprendre des mots nouveaux et les utiliser à bon escient',
        parent: 'j1_84'
      },
      {
        id: 'j1_86',
        text: 'Maitriser quelques relations de sens entre les mots',
        parent: 'j1_84'
      },
      {
        id: 'j1_87',
        text: 'Maitriser quelques relations concernant la forme et le sens des mots',
        parent: 'j1_84'
      },
      {
        id: 'j1_88',
        text: 'Savoir utiliser un dictionnaire (papier et/ou numérique)',
        parent: 'j1_84'
      },
      {
        id: 'j1_90',
        text: 'Etude de la langue: Grammaire',
        parent: 'j1_68'
      },
      {
        id: 'j1_91',
        text: 'Distinguer les mots selon leur nature',
        parent: 'j1_90'
      },
      {
        id: 'j1_92',
        text: 'Identifier les fonctions des mots dans la phrase',
        parent: 'j1_90'
      },
      {
        id: 'j1_93',
        text: 'Conjuguer les vebes et utiliser les temps à bon escient',
        parent: 'j1_90'
      },
      {
        id: 'j1_94',
        text: 'Maitriser l\'orthographe grammaticale',
        parent: 'j1_90'
      },
      {
        id: 'j1_95',
        text: 'Maitriser l\'orthographe lexicale',
        parent: 'j1_90'
      },
      {
        id: 'j1_96',
        text: 'Etude de la langue: Orthographe',
        parent: 'j1_68'
      },
      {
        id: 'j1_99',
        text: 'Orthographier correctement un texte simple de dix lignes (rédaction ou dictée) en se référant aux règles connues d\'ortographe et de grammaire ainsi qu\'à la connaissance du vocabulaire',
        parent: 'j1_96'
      },
      {
        id: 'JF1',
        text: 'Langues vivantes (ÉTRANGÈRES OU RÉGIONALES)',
        parent: 'niveau2'
      },
      {
        id: 'JF11',
        text: 'Activités langagières',
        parent: 'JF1'
      },
      {
        id: 'JF111',
        text: 'Écouter et comprendre',
        parent: 'JF11'
      },
      {
        id: 'JF1111',
        text: 'Comprendre l’ensemble des consignes utilisées en classe.',
        parent: 'JF111'
      },
      {
        id: 'JF1112',
        text: 'Suivre les instructions données.',
        parent: 'JF111'
      },
      {
        id: 'JF1113',
        text: 'Comprendre des mots familiers et des expressions courantes.',
        parent: 'JF111'
      },
      {
        id: 'JF1114',
        text: 'Suivre le fil d’une histoire simple (conte, légende...).',
        parent: 'JF111'
      },
      {
        id: 'JF1115',
        text: 'Identifier le sujet d’un message oral de courte durée.',
        parent: 'JF111'
      },
      {
        id: 'JF1116',
        text: 'Comprendre et extraire l’information essentielle d’un message oral de courte durée.',
        parent: 'JF111'
      },
      {
        id: 'JF112',
        text: 'Lire et comprendre',
        parent: 'JF11'
      },
      {
        id: 'JF1121',
        text: 'Comprendre des textes courts et simples (consignes, correspondance, poésie, recette, texte informatif, texte de fiction…) accompagnés d’un document visuel, en s’appuyant sur des éléments connus.',
        parent: 'JF112'
      },
      {
        id: 'JF113',
        text: 'Parler en continu',
        parent: 'JF11'
      },
      {
        id: 'JF1131',
        text: 'Reproduire un modèle oral (répéter, réciter...).',
        parent: 'JF113'
      },
      {
        id: 'JF1132',
        text: 'Lire à haute voix et de manière expressive un texte bref.',
        parent: 'JF113'
      },
      {
        id: 'JF1133',
        text: 'Se présenter oralement et présenter les autres.',
        parent: 'JF113'
      },
      {
        id: 'JF1134',
        text: 'Décrire son environnement quotidien, des personnes et/ou des activités culturellement connotées.',
        parent: 'JF113'
      },
      {
        id: 'JF1135',
        text: 'Raconter une histoire courte à l’aide de supports visuels.',
        parent: 'JF113'
      },
      {
        id: 'JF1136',
        text: 'Faire une brève annonce (date, anniversaire, invitation...) en situant l’évènement dans le temps et l’espace.',
        parent: 'JF113'
      },
      {
        id: 'JF114',
        text: 'Écrire',
        parent: 'JF11'
      },
      {
        id: 'JF1141',
        text: 'Copier des mots isolés et des textes courts ;',
        parent: 'JF114'
      },
      {
        id: 'JF1142',
        text: 'Écrire sous la dictée des expressions connues ;',
        parent: 'JF114'
      },
      {
        id: 'JF1143',
        text: 'Renseigner un questionnaire.',
        parent: 'JF114'
      },
      {
        id: 'JF1144',
        text: 'Produire de manière autonome quelques phrases sur soi-même, les autres, des personnages réels ou imaginaires.',
        parent: 'JF114'
      },
      {
        id: 'JF1145',
        text: 'Décrire des objets, des lieux.',
        parent: 'JF114'
      },
      {
        id: 'JF1146',
        text: 'Raconter succinctement des expériences vécues ou imaginées.',
        parent: 'JF114'
      },
      {
        id: 'JF1147',
        text: 'Rédiger un courrier court et simple, en référence à des modèles (message électronique, carte postale, lettre).',
        parent: 'JF114'
      },
      {
        id: 'JF115',
        text: 'Réagir et dialoguer',
        parent: 'JF11'
      },
      {
        id: 'JF1151',
        text: 'Établir un contact social (saluer, se présenter, présenter quelqu’un...).',
        parent: 'JF115'
      },
      {
        id: 'JF1152',
        text: 'Demander à quelqu’un de ses nouvelles et réagir en utilisant des formules de politesse.',
        parent: 'JF115'
      },
      {
        id: 'JF1153',
        text: 'Dialoguer pour échanger / obtenir des renseignements (itinéraire, horaire, prix...).',
        parent: 'JF115'
      },
      {
        id: 'JF1154',
        text: 'Dialoguer sur des sujets familiers (école, loisirs, maison...).',
        parent: 'JF115'
      },
      {
        id: 'JF1155',
        text: 'Réagir à des propositions, dans des situations de la vie courante (remercier, féliciter, présenter des excuses, accepter, refuser...).',
        parent: 'JF115'
      },
      {
        id: 'JF12',
        text: 'Activités culturelles et linguistiques',
        parent: 'JF1'
      },
      {
        id: 'JF121',
        text: 'Lexique',
        parent: 'JF12'
      },
      {
        id: 'JF1211',
        text: 'La personne et la vie quotidienne',
        parent: 'JF121'
      },
      {
        id: 'JF12111',
        text: 'Le corps humain, les vêtements, les modes de vie.',
        parent: 'JF1211'
      },
      {
        id: 'JF12112',
        text: 'Le portrait physique et moral.',
        parent: 'JF1211'
      },
      {
        id: 'JF12113',
        text: 'L’environnement urbain.',
        parent: 'JF1211'
      },
      {
        id: 'JF1212',
        text: 'Des repères géographiques, historiques et culturels des villes, pays et régions dont on étudie la langue',
        parent: 'JF121'
      },
      {
        id: 'JF12121',
        text: 'Leur situation géographique.',
        parent: 'JF1212'
      },
      {
        id: 'JF12122',
        text: 'Les caractéristiques physiques et repères culturels.',
        parent: 'JF1212'
      },
      {
        id: 'JF12123',
        text: 'Quelques figures historiques, contemporaines.',
        parent: 'JF1212'
      },
      {
        id: 'JF12124',
        text: 'Quelques grandes pages d’histoire spécifiques de l’aire étudiée.',
        parent: 'JF1212'
      },
      {
        id: 'JF1213',
        text: 'L’imaginaire',
        parent: 'JF121'
      },
      {
        id: 'JF12131',
        text: 'Littérature de jeunesse.',
        parent: 'JF1213'
      },
      {
        id: 'JF12132',
        text: 'Contes, mythes et légendes du pays ou de la région.',
        parent: 'JF1213'
      },
      {
        id: 'JF12133',
        text: 'Héros/héroïnes et personnages de fiction, de BD, de séries et de cinéma.',
        parent: 'JF1213'
      },
      {
        id: 'JF122',
        text: 'Grammaire',
        parent: 'JF12'
      },
      {
        id: 'JF1221',
        text: 'Le groupe verbal',
        parent: 'JF122'
      },
      {
        id: 'JF1222',
        text: 'Le groupe nominal',
        parent: 'JF122'
      },
      {
        id: 'JF1223',
        text: 'La phrase',
        parent: 'JF122'
      },
      {
        id: 'JF12231',
        text: 'type et forme de phrase : déclarative, interrogative, exclamative, impérative, affirmative, négative ;',
        parent: 'JF1223'
      },
      {
        id: 'JF12232',
        text: 'La syntaxe élémentaire de la phrase simple : ordre des mots, quelques mots de liaison (et, ou...) ;',
        parent: 'JF1223'
      },
      {
        id: 'JF12233',
        text: 'Quelques subordonnants dans des énoncés dits « complexes » (parce que...).',
        parent: 'JF1223'
      },
      {
        id: 'JF123',
        text: 'Phonologie',
        parent: 'JF12'
      },
      {
        id: 'JF1231',
        text: 'Phonèmes - percevoir et reproduire les phonèmes spécifiques à chaque langue.',
        parent: 'JF123'
      },
      {
        id: 'JF1232',
        text: 'Accents et rythme - percevoir et restituer le',
        parent: 'JF123'
      },
      {
        id: 'JF1233',
        text: 'Intonation - percevoir et restituer les schémas intonatifs : l’intonation caractéristique des différents types d’énoncés.',
        parent: 'JF123'
      },
      {
        id: 'JF1234',
        text: 'Lien phonie/graphie - l’alphabet (selon les langues).',
        parent: 'JF123'
      },
      {
        id: 'JF2',
        text: 'ARTS PLASTIQUES',
        parent: 'niveau2'
      },
      {
        id: 'JF21',
        text: 'La représentation plastique et les dispositifs de présentation',
        parent: 'JF2'
      },
      {
        id: 'JF211',
        text: 'La ressemblance ',
        parent: 'JF21'
      },
      {
        id: 'JF212',
        text: 'L’autonomie du geste graphique, pictural, sculptural ',
        parent: 'JF21'
      },
      {
        id: 'JF213',
        text: 'Les différentes catégories d’images, leurs procédés de fabrication, leurs transformations ',
        parent: 'JF21'
      },
      {
        id: 'JF214',
        text: 'La narration visuelle ',
        parent: 'JF21'
      },
      {
        id: 'JF215',
        text: 'La mise en regard et en espace ',
        parent: 'JF21'
      },
      {
        id: 'JF216',
        text: 'La prise en compte du spectateur, de l’effet recherché',
        parent: 'JF21'
      },
      {
        id: 'JF22',
        text: 'Les fabrications et la relation entre l’objet et l’espace',
        parent: 'JF2'
      },
      {
        id: 'JF221',
        text: 'L’hétérogénéité et la cohérence plastiques ',
        parent: 'JF22'
      },
      {
        id: 'JF222',
        text: 'L’invention, la fabrication, les détournements, les mises en scène des objets',
        parent: 'JF22'
      },
      {
        id: 'JF223',
        text: 'L’espace en trois dimensions ',
        parent: 'JF22'
      },
      {
        id: 'JF23',
        text: 'La matérialité de la production plastique et la sensibilité aux constituants de l’oeuvre',
        parent: 'JF2'
      },
      {
        id: 'JF231',
        text: 'La réalité concrète d’une production ou d’une oeuvre ',
        parent: 'JF23'
      },
      {
        id: 'JF232',
        text: 'Les qualités physiques des matériaux ',
        parent: 'JF23'
      },
      {
        id: 'JF233',
        text: 'Les effets du geste et de l’instrument',
        parent: 'JF23'
      },
      {
        id: 'JF234',
        text: 'La matérialité et la qualité de la couleur ',
        parent: 'JF23'
      },
      {
        id: 'JF3',
        text: 'Éducation musicale',
        parent: 'niveau2'
      },
      {
        id: 'JF31',
        text: 'Chanter et interpréter',
        parent: 'JF3'
      },
      {
        id: 'JF311',
        text: 'Reproduire et interpréter un modèle mélodique et rythmique.',
        parent: 'JF31'
      },
      {
        id: 'JF312',
        text: 'Chanter une mélodie simple avec une intonation juste et une intention expressive.',
        parent: 'JF31'
      },
      {
        id: 'JF313',
        text: 'Mémoriser et chanter par coeur un chant appris par imitation, soutenir un bref moment de chant en solo.',
        parent: 'JF31'
      },
      {
        id: 'JF314',
        text: 'Interpréter un chant avec expressivité en respectant plusieurs choix et contraintes précédemment indiqués.',
        parent: 'JF31'
      },
      {
        id: 'JF315',
        text: 'Tenir sa partie dans un bref moment de polyphonie.',
        parent: 'JF31'
      },
      {
        id: 'JF316',
        text: 'Mobiliser son corps pour interpréter, le cas échéant avec des instruments.',
        parent: 'JF31'
      },
      {
        id: 'JF317',
        text: 'Identifier les difficultés rencontrées dans l’interprétation d’un chant.',
        parent: 'JF31'
      },
      {
        id: 'JF3171',
        text: 'Répertoire de chansons diverses.',
        parent: 'JF317'
      },
      {
        id: 'JF3172',
        text: 'Paramètres du son et techniques vocales pour en jouer de façon expressive.',
        parent: 'JF317'
      },
      {
        id: 'JF3173',
        text: 'Vocabulaire de l’expression : quelques nuances simples, tempo, caractère, etc.',
        parent: 'JF317'
      },
      {
        id: 'JF3174',
        text: 'Polyphonie : rôle complémentaire des parties simultanées.',
        parent: 'JF317'
      },
      {
        id: 'JF3175',
        text: 'Interprétation d’une musique : compréhension du terme et usage approprié à propos d’une oeuvre écoutée et d’une musique produite en classe.',
        parent: 'JF317'
      },
      {
        id: 'JF32',
        text: 'Écouter, comparer et commenter',
        parent: 'JF3'
      },
      {
        id: 'JF321',
        text: 'Décrire et comparer des éléments sonores issus de contextes musicaux, d’aires géographiques ou culturelles différents et dans un temps historique, contemporain, proche ou lointain.',
        parent: 'JF32'
      },
      {
        id: 'JF322',
        text: 'Identifier et nommer ressemblances et différences dans deux extraits musicaux.',
        parent: 'JF32'
      },
      {
        id: 'JF323',
        text: 'Repérer et nommer une organisation simple dans un extrait musical : répétition d’une mélodie, d’un motif rythmique, d’un thème, d’une partie caractéristique, etc. ; en déduire une forme simple (couplet/refrain, ABA par exemple).',
        parent: 'JF32'
      },
      {
        id: 'JF324',
        text: 'Associer la découverte d’une oeuvre à des connaissances construites dans d’autres domaines enseignés.',
        parent: 'JF32'
      },
      {
        id: 'JF3241',
        text: 'Vocabulaire simple pour décrire la musique.',
        parent: 'JF324'
      },
      {
        id: 'JF3242',
        text: 'Méthodes pour comparer des musiques.',
        parent: 'JF324'
      },
      {
        id: 'JF3243',
        text: 'Repères simples dans le temps et dans l’espace.',
        parent: 'JF324'
      },
      {
        id: 'JF3244',
        text: 'Quelques grandes oeuvres du patrimoine.',
        parent: 'JF324'
      },
      {
        id: 'JF3245',
        text: 'Principales caractéristiques de l’orchestre symphonique.',
        parent: 'JF324'
      },
      {
        id: 'JF3246',
        text: 'Formes de production variées : vocales, instrumentales, solistes.',
        parent: 'JF324'
      },
      {
        id: 'JF33',
        text: 'Explorer, imaginer et créer',
        parent: 'JF3'
      },
      {
        id: 'JF331',
        text: 'Expérimenter les paramètres du son et en imaginer en conséquence des utilisations possibles.',
        parent: 'JF33'
      },
      {
        id: 'JF332',
        text: 'Imaginer des représentations graphiques pour organiser une succession de sons et d’événements sonores.',
        parent: 'JF33'
      },
      {
        id: 'JF333',
        text: 'Inventer une organisation simple à partir de sources sonores sélectionnées (dont la voix) et l’interpréter.',
        parent: 'JF33'
      },
      {
        id: 'JF3331',
        text: 'Développement du lexique pour décrire le son instrumental, le son vocal et les objets sonores dans les domaines de la hauteur, du timbre, de la durée, de l’intensité.',
        parent: 'JF333'
      },
      {
        id: 'JF3332',
        text: 'Diversité des matériaux sonores et catégories classées par caractéristiques dominantes.',
        parent: 'JF333'
      },
      {
        id: 'JF3333',
        text: 'Les postures de l’explorateur du son puis du compositeur : produire, écouter, trier, choisir, organiser, composer. ',
        parent: 'JF333'
      },
      {
        id: 'JF3334',
        text: 'Le projet graphique (partition adaptée pour organiser la mémoire) et sa traduction sonore.',
        parent: 'JF333'
      },
      {
        id: 'JF3335',
        text: 'Les exigences de la musique collective : écoute de l’autre, respect de ses propositions.',
        parent: 'JF333'
      },
      {
        id: 'JF34',
        text: 'Échanger, partager et argumenter',
        parent: 'JF3'
      },
      {
        id: 'JF341',
        text: 'Exprimer ses gouts au-delà de son ressenti immédiat.',
        parent: 'JF34'
      },
      {
        id: 'JF342',
        text: 'Écouter et respecter le point de vue des autres et l’expression de leur sensibilité.',
        parent: 'JF34'
      },
      {
        id: 'JF343',
        text: 'Argumenter un jugement sur une musique tout en respectant celui des autres.',
        parent: 'JF34'
      },
      {
        id: 'JF344',
        text: 'Argumenter un choix dans la perspective d’une interprétation collective.',
        parent: 'JF34'
      },
      {
        id: 'JF3441',
        text: 'Notions de respect, de bienveillance, de tolérance.',
        parent: 'JF344'
      },
      {
        id: 'JF3442',
        text: 'Vocabulaire adapté à l’expression et l’argumentation de son point de vue personnel sur la musique.',
        parent: 'JF344'
      },
      {
        id: 'JF3443',
        text: 'Conditions d’un travail collectif : concentration, écoute, respect, autoévaluation, etc.',
        parent: 'JF344'
      },
      {
        id: 'JF3444',
        text: 'Règles et contraintes du travail musical collectif visant l’expression d’un avis partagé comme une production sonore de qualité.',
        parent: 'JF344'
      },
      {
        id: 'JF4',
        text: 'Histoire des arts',
        parent: 'niveau2'
      },
      {
        id: 'JF41',
        text: 'Donner un avis argumenté sur ce que représente ou exprime une oeuvre d’art',
        parent: 'JF4'
      },
      {
        id: 'JF411',
        text: 'Identifier des personnages mythologiques ou religieux, des objets, des types d’espaces, des éclairages.',
        parent: 'JF41'
      },
      {
        id: 'JF412',
        text: 'Résumer une action représentée en image, déroulée sur scène ou sur un écran, et en caractériser les personnages.',
        parent: 'JF41'
      },
      {
        id: 'JF413',
        text: 'Caractériser un morceau de musique en termes simples.',
        parent: 'JF41'
      },
      {
        id: 'JF4131',
        text: 'Connaissance de mythes antiques et récits fondateurs, notamment bibliques.',
        parent: 'JF413'
      },
      {
        id: 'JF4132',
        text: 'Caractéristiques et spécificités des discours (raconter, décrire, expliquer, argumenter, résumer, etc.).',
        parent: 'JF413'
      },
      {
        id: 'JF4133',
        text: 'Lexique des émotions',
        parent: 'JF413'
      },
      {
        id: 'JF42',
        text: 'Dégager d’une oeuvre d’art, par l’observation ou l’écoute, ses principales caractéristiques techniques et formelles',
        parent: 'JF4'
      },
      {
        id: 'JF421',
        text: 'Identifier des matériaux, y compris sonores, et la manière dont l’artiste leur a donné forme.',
        parent: 'JF42'
      },
      {
        id: 'JF422',
        text: 'Retrouver des formes géométriques et comprendre leur agencement dans une façade, un tableau, un pavement, un tapis.',
        parent: 'JF42'
      },
      {
        id: 'JF423',
        text: 'Dégager d’une forme artistique des éléments de sens.',
        parent: 'JF42'
      },
      {
        id: 'JF4231',
        text: 'Caractéristiques des familles de matériaux.',
        parent: 'JF423'
      },
      {
        id: 'JF4232',
        text: 'Caractéristiques etspécificités des champs artistiques et éléments de lexique correspondants.',
        parent: 'JF423'
      },
      {
        id: 'JF43',
        text: 'Relier des caractéristiques d’une oeuvre d’art à des usages, ainsi qu’au contexte historique et culturel de sa création',
        parent: 'JF4'
      },
      {
        id: 'JF431',
        text: 'Mettre en relation une ou plusieurs oeuvres contemporaines entre elles et un fait historique, une époque, une aire géographique ou un texte, étudiés en histoire, en géographie ou en français.',
        parent: 'JF43'
      },
      {
        id: 'JF432',
        text: 'Mettre en relation un texte connu (récit, fable, poésie, texte religieux ou mythologique) et plusieurs de ses illustrations ou transpositions visuelles, musicales, scéniques, chorégraphiques ou filmiques, issues de diverses époques, en soulignant le propre du langage de chacune.',
        parent: 'JF43'
      },
      {
        id: 'JF433',
        text: 'Mettre en relation des oeuvres et objets mobiliers et des usages et modes de vie.',
        parent: 'JF43'
      },
      {
        id: 'JF4331',
        text: 'Constitution d’un premier « musée imaginaire » classé par époques.',
        parent: 'JF433'
      },
      {
        id: 'JF4332',
        text: 'Fiche signalétique/cartel pour identifier une oeuvre d’art.',
        parent: 'JF433'
      },
      {
        id: 'JF4333',
        text: 'Premiers éléments de lexique stylistique.',
        parent: 'JF433'
      },
      {
        id: 'JF44',
        text: 'Se repérer dans un musée, un lieu d’art, un site patrimonial',
        parent: 'JF4'
      },
      {
        id: 'JF441',
        text: 'Effectuer une recherche (dans le cadre d’un exercice collectif et sur la base de consignes précises) en vue de préparer une sortie culturelle.',
        parent: 'JF44'
      },
      {
        id: 'JF4411',
        text: 'Se repérer dans un musée ou un lieu d’art par la lecture et la compréhension des plans et indications.',
        parent: 'JF441'
      },
      {
        id: 'JF4412',
        text: 'Être sensibilisé à la vulnérabilité du patrimoine.',
        parent: 'JF441'
      },
      {
        id: 'JF44121',
        text: 'Premiers grands principes d’organisation muséale.',
        parent: 'JF4412'
      },
      {
        id: 'JF44122',
        text: 'Métiers de la conservation, de la restauration et de la diffusion.',
        parent: 'JF4412'
      },
      {
        id: 'JF44123',
        text: 'Identification et localisation d’une oeuvre ou d’une salle.',
        parent: 'JF4412'
      },
      {
        id: 'JF5',
        text: 'Education physique et sportive',
        parent: 'niveau2'
      },
      {
        id: 'JF51',
        text: 'Produire une performance maximale, mesurable à une échéance donnée',
        parent: 'JF5'
      },
      {
        id: 'JF511',
        text: 'Combiner des actions simples : courir-lancer ; courir-sauter.',
        parent: 'JF51'
      },
      {
        id: 'JF5111',
        text: 'Mobiliser ses ressources pour réaliser la meilleure performance possible dans des activités athlétiques variées (courses, sauts, lancers).',
        parent: 'JF511'
      },
      {
        id: 'JF5112',
        text: 'Appliquer des principes simples pour améliorer la performance dans des activités athlétiques et/ ou nautiques.',
        parent: 'JF511'
      },
      {
        id: 'JF5113',
        text: 'Utiliser sa vitesse pour aller plus loin, ou plus haut.',
        parent: 'JF511'
      },
      {
        id: 'JF5114',
        text: 'Rester horizontalement et sans appui en équilibre dans l’eau.',
        parent: 'JF511'
      },
      {
        id: 'JF5115',
        text: 'Pendant la pratique, prendre des repères extérieurs et des repères sur son corps pour contrôler son déplacement et son effort.',
        parent: 'JF511'
      },
      {
        id: 'JF5116',
        text: 'Utiliser des outils de mesures simples pour évaluer sa performance.',
        parent: 'JF511'
      },
      {
        id: 'JF5117',
        text: 'Respecter les règles des activités.',
        parent: 'JF511'
      },
      {
        id: 'JF5118',
        text: 'Passer par les différents rôles sociaux.',
        parent: 'JF511'
      },
      {
        id: 'JF512',
        text: 'Adapter ses déplacements à des environnements variés',
        parent: 'JF51'
      },
      {
        id: 'JF5121',
        text: 'Conduire un déplacement sans appréhension et en toute sécurité.',
        parent: 'JF512'
      },
      {
        id: 'JF5122',
        text: 'Adapter son déplacement aux différents milieux.',
        parent: 'JF512'
      },
      {
        id: 'JF5123',
        text: 'Tenir compte du milieu et de ses évolutions (vent, eau, végétation etc.).',
        parent: 'JF512'
      },
      {
        id: 'JF5124',
        text: 'Gérer son effort pour pouvoir revenir au point de départ.',
        parent: 'JF512'
      },
      {
        id: 'JF5125',
        text: 'Aider l’autre.',
        parent: 'JF512'
      },
      {
        id: 'JF513',
        text: 'S’exprimer devant les autres par une prestation artistique et/ou acrobatique',
        parent: 'JF51'
      },
      {
        id: 'JF5131',
        text: 'Utiliser le pouvoir expressif du corps de différentes façons.',
        parent: 'JF513'
      },
      {
        id: 'JF5132',
        text: 'Enrichir son répertoire d’actions afin de communiquer une intention ou une émotion.',
        parent: 'JF513'
      },
      {
        id: 'JF5133',
        text: 'S’engager dans des actions artistiques ou acrobatiques destinées à être présentées aux autres en maitrisant les risques et ses émotions.',
        parent: 'JF513'
      },
      {
        id: 'JF5134',
        text: 'Mobiliser son imaginaire pour créer du sens et de l’émotion, dans des prestations collectives.',
        parent: 'JF513'
      },
      {
        id: 'JF514',
        text: 'Conduire et maitriser un affrontement collectif ou interindividuel',
        parent: 'JF51'
      },
      {
        id: 'JF5141',
        text: 'Rechercher le gain de l’affrontement par des choix tactiques simples.',
        parent: 'JF514'
      },
      {
        id: 'JF5142',
        text: 'Adapter son jeu et ses actions aux adversaires et à ses partenaires.',
        parent: 'JF514'
      },
      {
        id: 'JF5143',
        text: 'Coordonner des actions motrices simples.',
        parent: 'JF514'
      },
      {
        id: 'JF5144',
        text: 'Se reconnaitre attaquant / défenseur.',
        parent: 'JF514'
      },
      {
        id: 'JF5145',
        text: 'Coopérer pour attaquer et défendre.',
        parent: 'JF514'
      },
      {
        id: 'JF5146',
        text: 'Accepter de tenir des rôles simples d’arbitre et d’observateur.',
        parent: 'JF514'
      },
      {
        id: 'JF5147',
        text: 'S’informer pour agir.',
        parent: 'JF514'
      },
      {
        id: 'JF6',
        text: 'Enseignement moral et civique',
        parent: 'niveau2'
      },
      {
        id: 'JF61',
        text: 'La sensibilité : soi et les autres',
        parent: 'JF6'
      },
      {
        id: 'JF611',
        text: 'Partager et réguler des émotions, des sentiments dans des situations et à propos d’objets diversifiés : textes littéraires, oeuvres d’art, documents d’actualité, débats portant sur la vie de la classe.',
        parent: 'JF61'
      },
      {
        id: 'JF6111',
        text: 'Diversité des expressions des sentiments et des émotions dans différentes oeuvres (textes, oeuvres musicales, plastiques...)',
        parent: 'JF611'
      },
      {
        id: 'JF6112',
        text: 'Maitrise des règles de la communication.',
        parent: 'JF611'
      },
      {
        id: 'JF612',
        text: 'Mobiliser le vocabulaire adapté à leur expression.',
        parent: 'JF61'
      },
      {
        id: 'JF6121',
        text: 'Connaissance et structuration du vocabulaire des sentiments et des émotions.',
        parent: 'JF612'
      },
      {
        id: 'JF613',
        text: 'Respecter autrui et accepter les différences.',
        parent: 'JF61'
      },
      {
        id: 'JF6131',
        text: 'Respect des autres dans leur diversité : les atteintes à la personne d’autrui (racisme, antisémitisme, sexisme, xénophobie, homophobie, harcèlement...).',
        parent: 'JF613'
      },
      {
        id: 'JF6132',
        text: 'Respect des différences, tolérance.',
        parent: 'JF613'
      },
      {
        id: 'JF6133',
        text: 'Respect de la diversité des croyances et des convictions.',
        parent: 'JF613'
      },
      {
        id: 'JF6134',
        text: 'Le secours à autrui.',
        parent: 'JF613'
      },
      {
        id: 'JF614',
        text: 'Manifester le respect des autres dans son langage et son attitude.',
        parent: 'JF61'
      },
      {
        id: 'JF6141',
        text: 'Le soin du langage : le souci d’autrui dans le langage, notamment la politesse.',
        parent: 'JF614'
      },
      {
        id: 'JF6142',
        text: 'Le soin du corps, de l’environnement immédiat et plus lointain.',
        parent: 'JF614'
      },
      {
        id: 'JF6143',
        text: 'Le soin des biens personnels et collectifs.',
        parent: 'JF614'
      },
      {
        id: 'JF6144',
        text: 'L’intégrité de la personne.',
        parent: 'JF614'
      },
      {
        id: 'JF615',
        text: 'Comprendre le sens des symboles de la République.',
        parent: 'JF61'
      },
      {
        id: 'JF6151',
        text: 'Valeurs et symboles de la République française et de l’Union européenne. ',
        parent: 'JF615'
      },
      {
        id: 'JF616',
        text: 'Coopérer.',
        parent: 'JF61'
      },
      {
        id: 'JF6161',
        text: 'Savoir travailler en respectant les règles de la coopération.',
        parent: 'JF616'
      },
      {
        id: 'JF62',
        text: 'Le droit et la règle : des principes pour vivre avec les autres',
        parent: 'JF6'
      },
      {
        id: 'JF621',
        text: 'Comprendre les notions de droits et devoirs, les accepter et les appliquer.',
        parent: 'JF62'
      },
      {
        id: 'JF6211',
        text: 'Les droits et les devoirs : de la personne, de l’enfant, de l’élève, du citoyen.',
        parent: 'JF621'
      },
      {
        id: 'JF6212',
        text: 'Le code de la route : initiation au code de la route et aux règles de prudence, en lien avec l’attestation de première éducation à la route (Aper).',
        parent: 'JF621'
      },
      {
        id: 'JF6213',
        text: 'Le vocabulaire de la règle et du droit (droit, devoir, règle, règlement, loi).',
        parent: 'JF621'
      },
      {
        id: 'JF6214',
        text: 'Les différents contextes d’obéissance aux règles, le règlement intérieur, les sanctions.',
        parent: 'JF621'
      },
      {
        id: 'JF622',
        text: 'Respecter tous les autres et notamment appliquer les principes de l’égalité des femmes et des hommes.',
        parent: 'JF62'
      },
      {
        id: 'JF6221',
        text: 'L’égalité entre les filles et les garçons.',
        parent: 'JF622'
      },
      {
        id: 'JF6222',
        text: 'La mixité à l’école.',
        parent: 'JF622'
      },
      {
        id: 'JF6223',
        text: 'L’égalité des droits et la notion de discrimination.',
        parent: 'JF622'
      },
      {
        id: 'JF623',
        text: 'Reconnaitre les principes et les valeurs de la République et de l’Union européenne.',
        parent: 'JF62'
      },
      {
        id: 'JF6231',
        text: 'Les principes de la démocratie représentative en France et en Europe.',
        parent: 'JF623'
      },
      {
        id: 'JF6232',
        text: 'Les valeurs : la liberté, l’égalité, la laïcité.',
        parent: 'JF623'
      },
      {
        id: 'JF624',
        text: 'Reconnaitre les traits constitutifs de la République française.',
        parent: 'JF62'
      },
      {
        id: 'JF6241',
        text: 'Le vocabulaire des institutions.',
        parent: 'JF624'
      },
      {
        id: 'JF6242',
        text: 'Le fondement de la loi et les grandes déclarations des droits.',
        parent: 'JF624'
      },
      {
        id: 'JF6243',
        text: 'La notion de citoyenneté nationale et européenne (l’identité juridique d’une personne).',
        parent: 'JF624'
      },
      {
        id: 'JF63',
        text: 'Le jugement : penser par soi-même et avec les autres',
        parent: 'JF6'
      },
      {
        id: 'JF631',
        text: 'Prendre part à une discussion, un débat ou un dialogue : prendre la parole devant les autres, écouter autrui, formuler et apprendre à justifier un point de vue.',
        parent: 'JF63'
      },
      {
        id: 'JF6311',
        text: 'Le choix, sa justification.',
        parent: 'JF631'
      },
      {
        id: 'JF6312',
        text: 'Connaissance et reconnaissance de différents types d’expression (récit, reportage, témoignage).',
        parent: 'JF631'
      },
      {
        id: 'JF6313',
        text: 'Les règles de la discussion en groupe (écoute, respect du point de vue de l’autre, recherche d’un accord...).',
        parent: 'JF631'
      },
      {
        id: 'JF6314',
        text: 'Approche de l’argumentation.',
        parent: 'JF631'
      },
      {
        id: 'JF6315',
        text: 'Le débat argumenté.',
        parent: 'JF631'
      },
      {
        id: 'JF6316',
        text: 'Initiation au débat démocratique.',
        parent: 'JF631'
      },
      {
        id: 'JF6317',
        text: 'Les critères du jugement moral : le bien et le mal, le juste et l’injuste.',
        parent: 'JF631'
      },
      {
        id: 'JF632',
        text: 'Nuancer son point de vue en tenant compte du point de vue des autres.',
        parent: 'JF63'
      },
      {
        id: 'JF6321',
        text: 'Les préjugés et les stéréotypes (racisme, antisémitisme, sexisme, homophobie).',
        parent: 'JF632'
      },
      {
        id: 'JF633',
        text: 'Comprendre que la laïcité accorde à chacun un droit égal à exercer librement son jugement et exige le respect de ce droit chez autrui.',
        parent: 'JF63'
      },
      {
        id: 'JF6331',
        text: 'La laïcité comme liberté de penser et de croire ou de ne pas croire à travers la Charte de la laïcité à l’école.',
        parent: 'JF633'
      },
      {
        id: 'JF6332',
        text: 'La distinction entre croyances et opinions.',
        parent: 'JF633'
      },
      {
        id: 'JF634',
        text: 'Prendre conscience des enjeux civiques de l’usage de l’informatique et de l’Internet et adopter une attitude critique face aux résultats obtenus.',
        parent: 'JF63'
      },
      {
        id: 'JF6341',
        text: 'Le jugement critique : traitement de l’information et éducation aux médias',
        parent: 'JF634'
      },
      {
        id: 'JF6342',
        text: 'Responsabilisation à l’usage du numérique en lien avec la charte d’usage des Tuic.',
        parent: 'JF634'
      },
      {
        id: 'JF635',
        text: 'Distinguer son intérêt personnel de l’intérêt collectif.',
        parent: 'JF63'
      },
      {
        id: 'JF6351',
        text: 'La notion de bien commun dans la classe, l’école et la société.',
        parent: 'JF635'
      },
      {
        id: 'JF6352',
        text: 'Les valeurs personnelles et collectives.',
        parent: 'JF635'
      },
      {
        id: 'JF6353',
        text: 'Valeurs et institutions : la devise de la République (Liberté, Égalité, Fraternité).',
        parent: 'JF635'
      },
      {
        id: 'JF6354',
        text: 'Le sens républicain de la nation.',
        parent: 'JF635'
      },
      {
        id: 'JF6355',
        text: 'Les libertés fondamentales.',
        parent: 'JF635'
      },
      {
        id: 'JF6356',
        text: 'La laïcité.',
        parent: 'JF635'
      },
      {
        id: 'JF6357',
        text: 'Les valeurs de l’Union européenne.',
        parent: 'JF635'
      },
      {
        id: 'JF64',
        text: 'L’engagement : agir individuellement et collectivement',
        parent: 'JF6'
      },
      {
        id: 'JF641',
        text: 'S’engager dans la réalisation d’un projet collectif (projet de classe, d’école, communal, national...).',
        parent: 'JF64'
      },
      {
        id: 'JF6411',
        text: 'L’engagement moral (la confiance, la promesse, la loyauté, l’entraide, la solidarité).',
        parent: 'JF641'
      },
      {
        id: 'JF6412',
        text: 'Le secours à autrui : prendre des initiatives, en lien avec le dispositif et l’attestation « apprendre à porter secours » (APS).',
        parent: 'JF641'
      },
      {
        id: 'JF6413',
        text: 'Le code de la route : sensibilisation à la responsabilité en lien avec l’attestation de première éducation à la route (Aper).',
        parent: 'JF641'
      },
      {
        id: 'JF642',
        text: 'Pouvoir expliquer ses choix et ses actes.',
        parent: 'JF64'
      },
      {
        id: 'JF6421',
        text: 'La responsabilité de l’individu et du citoyen dans le domaine de l’environnement, de la santé.',
        parent: 'JF642'
      },
      {
        id: 'JF643',
        text: 'Savoir participer et prendre sa place dans un groupe.',
        parent: 'JF64'
      },
      {
        id: 'JF6431',
        text: 'La participation démocratique.',
        parent: 'JF643'
      },
      {
        id: 'JF6432',
        text: 'Le vote.',
        parent: 'JF643'
      },
      {
        id: 'JF6433',
        text: 'Les acteurs locaux et la citoyenneté.',
        parent: 'JF643'
      },
      {
        id: 'JF644',
        text: 'Expliquer en mots simples la fraternité et la solidarité.',
        parent: 'JF64'
      },
      {
        id: 'JF6441',
        text: 'La solidarité individuelle et collective.',
        parent: 'JF644'
      },
      {
        id: 'JF6442',
        text: 'La fraternité dans la devise républicaine.',
        parent: 'JF644'
      },
      {
        id: 'JF7',
        text: 'Histoire et Géographie',
        parent: 'niveau2'
      },
      {
        id: 'JF71',
        text: 'Histoire',
        parent: 'JF7'
      },
      {
        id: 'JF711',
        text: 'Classe de CM1',
        parent: 'JF71'
      },
      {
        id: 'JF7111',
        text: 'Thème 1 Et avant la France ?',
        parent: 'JF711'
      },
      {
        id: 'JF71111',
        text: 'Quelles traces d’une occupation ancienne du territoire français ?',
        parent: 'JF7111'
      },
      {
        id: 'JF71112',
        text: 'Celtes, Gaulois, Grecs et Romains : quels héritages des mondes anciens ?',
        parent: 'JF7111'
      },
      {
        id: 'JF71113',
        text: 'Les grands mouvements et déplacements de populations (IV-Xe siècles).',
        parent: 'JF7111'
      },
      {
        id: 'JF71114',
        text: 'Clovis et Charlemagne, Mérovingiens et Carolingiens dans la continuité de l’empire romain',
        parent: 'JF7111'
      },
      {
        id: 'JF7112',
        text: 'Thème 2 Le temps des rois',
        parent: 'JF711'
      },
      {
        id: 'JF71121',
        text: 'Louis IX, le « roi chrétien » au XIIIe siècle',
        parent: 'JF7112'
      },
      {
        id: 'JF71122',
        text: 'François Ier, un protecteur des Arts et des Lettres à la Renaissance.',
        parent: 'JF7112'
      },
      {
        id: 'JF71123',
        text: 'Henri IV et l’édit de Nantes.',
        parent: 'JF7112'
      },
      {
        id: 'JF71124',
        text: 'Louis XIV, le roi Soleil à Versailles',
        parent: 'JF7112'
      },
      {
        id: 'JF7113',
        text: 'Thème 3 Le temps de la Révolution et de l’Empire',
        parent: 'JF711'
      },
      {
        id: 'JF71131',
        text: 'De l’année 1789 à l’exécution du roi : Louis XVI, la Révolution, la Nation.',
        parent: 'JF7113'
      },
      {
        id: 'JF71132',
        text: 'Napoléon Bonaparte, du général à l’Empereur, de la Révolution à l’Empire',
        parent: 'JF7113'
      },
      {
        id: 'JF712',
        text: 'Classe de CM2',
        parent: 'JF71'
      },
      {
        id: 'JF7121',
        text: 'Thème 1 Le temps de la République',
        parent: 'JF712'
      },
      {
        id: 'JF71211',
        text: '1892 : la République fête ses cent ans',
        parent: 'JF7121'
      },
      {
        id: 'JF71212',
        text: 'L’école primaire au temps de Jules Ferry',
        parent: 'JF7121'
      },
      {
        id: 'JF71213',
        text: 'Des républiques, une démocratie : des libertés, des droits et des devoirs',
        parent: 'JF7121'
      },
      {
        id: 'JF7122',
        text: 'Thème 2 L’âge industriel en France',
        parent: 'JF712'
      },
      {
        id: 'JF71221',
        text: 'Énergies et machines',
        parent: 'JF7122'
      },
      {
        id: 'JF71222',
        text: 'Le travail à la mine, à l’usine, à l’atelier, au grand magasin',
        parent: 'JF7122'
      },
      {
        id: 'JF71223',
        text: 'La ville industrielle',
        parent: 'JF7122'
      },
      {
        id: 'JF71224',
        text: 'Le monde rural',
        parent: 'JF7122'
      },
      {
        id: 'JF7123',
        text: 'Thème 3 La France, des guerres mondiales à l’Union européenne',
        parent: 'JF712'
      },
      {
        id: 'JF71231',
        text: 'Deux guerres mondiales au vingtième siècle',
        parent: 'JF7123'
      },
      {
        id: 'JF71232',
        text: 'La construction européenne',
        parent: 'JF7123'
      },
      {
        id: 'JF713',
        text: 'Classe de sixième',
        parent: 'JF71'
      },
      {
        id: 'JF7131',
        text: 'Thème 1 La longue histoire de l’humanité et des migrations',
        parent: 'JF713'
      },
      {
        id: 'JF71311',
        text: 'Les débuts de l’humanité',
        parent: 'JF7131'
      },
      {
        id: 'JF71312',
        text: 'La « révolution » néolithique',
        parent: 'JF7131'
      },
      {
        id: 'JF71313',
        text: 'Premiers États, premières écritures',
        parent: 'JF7131'
      },
      {
        id: 'JF7132',
        text: 'Thème 2 Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire avant J.-C.',
        parent: 'JF713'
      },
      {
        id: 'JF71321',
        text: 'Le monde des cités grecques',
        parent: 'JF7132'
      },
      {
        id: 'JF71322',
        text: 'Rome du mythe à l’histoire',
        parent: 'JF7132'
      },
      {
        id: 'JF71323',
        text: 'La naissance du monothéisme juif dans un monde polythéiste',
        parent: 'JF7132'
      },
      {
        id: 'JF7133',
        text: 'Thème 3 L’empire romain dans le monde antique',
        parent: 'JF713'
      },
      {
        id: 'JF71331',
        text: 'Conquêtes, paix romaine et romanisation',
        parent: 'JF7133'
      },
      {
        id: 'JF71332',
        text: 'Des chrétiens dans l’Empire',
        parent: 'JF7133'
      },
      {
        id: 'JF71333',
        text: 'Les relations de l’empire romain avec les autres mondes anciens : l’ancienne route de la soie et la Chine des Han',
        parent: 'JF7133'
      },
      {
        id: 'JF72',
        text: 'Géographie',
        parent: 'JF7'
      },
      {
        id: 'JF721',
        text: 'Classe de CM1',
        parent: 'JF72'
      },
      {
        id: 'JF7211',
        text: 'Thème 1 Découvrir le(s) lieu(x) où j’habite',
        parent: 'JF721'
      },
      {
        id: 'JF72111',
        text: 'Identifier les caractéristiques de mon(mes) lieu(x) de vie.',
        parent: 'JF7211'
      },
      {
        id: 'JF72112',
        text: 'Localiser mon (mes) lieu(x) de vie et le(s) situer à différentes échelles.',
        parent: 'JF7211'
      },
      {
        id: 'JF7212',
        text: 'Thème 2 Se loger, travailler, se cultiver, avoir des loisirs en France',
        parent: 'JF721'
      },
      {
        id: 'JF72121',
        text: 'Dans des espaces urbains.',
        parent: 'JF7212'
      },
      {
        id: 'JF72122',
        text: 'Dans un espace touristique.',
        parent: 'JF7212'
      },
      {
        id: 'JF7213',
        text: 'Thème 3 Consommer en France',
        parent: 'JF721'
      },
      {
        id: 'JF72131',
        text: 'Satisfaire les besoins en énergie, en eau.',
        parent: 'JF7213'
      },
      {
        id: 'JF72132',
        text: 'Satisfaire les besoins alimentaires.',
        parent: 'JF7213'
      },
      {
        id: 'JF722',
        text: 'Classe de CM2',
        parent: 'JF72'
      },
      {
        id: 'JF7221',
        text: 'Thème 1 Se déplacer',
        parent: 'JF722'
      },
      {
        id: 'JF72211',
        text: 'Se déplacer au quotidien en France.',
        parent: 'JF7221'
      },
      {
        id: 'JF72212',
        text: 'Se déplacer au quotidien dans un autre lieu du monde.',
        parent: 'JF7221'
      },
      {
        id: 'JF72213',
        text: 'Se déplacer de ville en ville, en France, en Europe et dans le monde.',
        parent: 'JF7221'
      },
      {
        id: 'JF7222',
        text: 'Thème 2 Communiquer d’un bout à l’autre du monde grâce à l’Internet',
        parent: 'JF722'
      },
      {
        id: 'JF72221',
        text: 'Un monde de réseaux.',
        parent: 'JF7222'
      },
      {
        id: 'JF72222',
        text: 'Un habitant connecté au monde.',
        parent: 'JF7222'
      },
      {
        id: 'JF72223',
        text: 'Des habitants inégalement connectés dans le monde.',
        parent: 'JF7222'
      },
      {
        id: 'JF7223',
        text: 'Thème 3 Mieux habiter',
        parent: 'JF722'
      },
      {
        id: 'JF72231',
        text: 'Favoriser la place de la « nature » en ville.',
        parent: 'JF7223'
      },
      {
        id: 'JF72232',
        text: 'Recycler.',
        parent: 'JF7223'
      },
      {
        id: 'JF72233',
        text: 'Habiter un écoquartier .',
        parent: 'JF7223'
      },
      {
        id: 'JF723',
        text: 'Classe de sixième',
        parent: 'JF72'
      },
      {
        id: 'JF7231',
        text: 'Thème 1 Habiter une métropole',
        parent: 'JF723'
      },
      {
        id: 'JF72311',
        text: 'Les métropoles et leurs habitants.',
        parent: 'JF7231'
      },
      {
        id: 'JF72312',
        text: 'La ville de demain.',
        parent: 'JF7231'
      },
      {
        id: 'JF7232',
        text: 'Thème 2 Habiter un espace de faible densité',
        parent: 'JF723'
      },
      {
        id: 'JF72321',
        text: 'Habiter un espace à forte(s) contrainte(s) naturelle(s) ou/et de grande biodiversité.',
        parent: 'JF7232'
      },
      {
        id: 'JF72322',
        text: 'Habiter un espace de faible densité à vocation agricole.',
        parent: 'JF7232'
      },
      {
        id: 'JF7233',
        text: 'Thème 3 Habiter les littoraux',
        parent: 'JF723'
      },
      {
        id: 'JF72331',
        text: 'Littoral industrialoportuaire, littoral touristique.',
        parent: 'JF7233'
      },
      {
        id: 'JF8',
        text: 'Sciences et Technologie',
        parent: 'niveau2'
      },
      {
        id: 'JF81',
        text: 'Matière, mouvement, énergie, information',
        parent: 'JF8'
      },
      {
        id: 'JF811',
        text: 'Décrire les états et la constitution de la matière à l’échelle macroscopique',
        parent: 'JF81'
      },
      {
        id: 'JF8111',
        text: 'Mettre en oeuvre des observations et des expériences pour caractériser un échantillon de matière.',
        parent: 'JF811'
      },
      {
        id: 'JF81111',
        text: 'Diversité de la matière : métaux, minéraux, verres, plastiques, matière organique sous différentes formes…',
        parent: 'JF8111'
      },
      {
        id: 'JF81112',
        text: 'L’état physique d’un échantillon de matière dépend de conditions externes, notamment de sa température.',
        parent: 'JF8111'
      },
      {
        id: 'JF81113',
        text: 'Quelques propriétés de la matière solide ou liquide (par exemple : densité, solubilité, élasticité…).',
        parent: 'JF8111'
      },
      {
        id: 'JF81114',
        text: 'La matière à grande échelle : Terre, planètes, Univers.',
        parent: 'JF8111'
      },
      {
        id: 'JF81115',
        text: 'La masse est une grandeur physique qui caractérise un échantillon de matière.',
        parent: 'JF8111'
      },
      {
        id: 'JF8112',
        text: 'Identifier à partir de ressources documentaires les différents constituants d’un mélange.',
        parent: 'JF811'
      },
      {
        id: 'JF8113',
        text: 'Mettre en oeuvre un protocole de séparation de constituants d’un mélange.',
        parent: 'JF811'
      },
      {
        id: 'JF81131',
        text: 'Réaliser des mélanges peut provoquer des transformations de la matière (dissolution, réaction).',
        parent: 'JF8113'
      },
      {
        id: 'JF81132',
        text: 'La matière qui nous entoure (à l’état solide, liquide ou gazeux), résultat d’un mélange de différents constituants.',
        parent: 'JF8113'
      },
      {
        id: 'JF812',
        text: 'Observer et décrire différents types de mouvements',
        parent: 'JF81'
      },
      {
        id: 'JF8121',
        text: 'Décrire un mouvement et identifier les différences entre mouvements circulaire ou rectiligne.',
        parent: 'JF812'
      },
      {
        id: 'JF81211',
        text: 'Mouvement d’un objet (trajectoire et vitesse : unités et ordres de grandeur).',
        parent: 'JF8121'
      },
      {
        id: 'JF81212',
        text: 'Exemples de mouvements simples : rectiligne, circulaire.',
        parent: 'JF8121'
      },
      {
        id: 'JF8122',
        text: 'Élaborer et mettre en oeuvre un protocole pour appréhender la notion de mouvement et de mesure de la valeur de la vitesse d’un objet.',
        parent: 'JF812'
      },
      {
        id: 'JF81221',
        text: 'Mouvements dont la valeur de la vitesse (module) est constante ou variable (accélération, décélération) dans un mouvement rectiligne.',
        parent: 'JF8122'
      },
      {
        id: 'JF813',
        text: 'Identifier différentes sources et connaitre quelques conversions d’énergie',
        parent: 'JF81'
      },
      {
        id: 'JF8131',
        text: 'Identifier des sources d’énergie et des formes.',
        parent: 'JF813'
      },
      {
        id: 'JF81311',
        text: 'L’énergie existe sous différentes formes (énergie associée à un objet en mouvement, énergie thermique, électrique…).',
        parent: 'JF8131'
      },
      {
        id: 'JF8132',
        text: 'Prendre conscience que l’être humain a besoin d’énergie pour vivre, se chauffer, se déplacer, s’éclairer…',
        parent: 'JF813'
      },
      {
        id: 'JF8133',
        text: 'Reconnaitre les situations où l’énergie est stockée, transformée, utilisée. La fabrication et le fonctionnement d’un objet technique nécessitent de l’énergie.',
        parent: 'JF813'
      },
      {
        id: 'JF81331',
        text: 'Exemples de sources d’énergie utilisées par les êtres humains : charbon, pétrole, bois, uranium, aliments, vent, Soleil, eau et barrage, pile…',
        parent: 'JF8133'
      },
      {
        id: 'JF81332',
        text: 'Notion d’énergie renouvelable.',
        parent: 'JF8133'
      },
      {
        id: 'JF81333',
        text: 'Identifier quelques éléments d’une chaine d’énergie domestique simple.',
        parent: 'JF8133'
      },
      {
        id: 'JF81334',
        text: 'Quelques dispositifs visant à économiser la consommation d’énergie.',
        parent: 'JF8133'
      },
      {
        id: 'JF814',
        text: 'Identifier un signal et une information',
        parent: 'JF81'
      },
      {
        id: 'JF8141',
        text: 'Identifier différentes formes de signaux (sonores, lumineux, radio…).',
        parent: 'JF814'
      },
      {
        id: 'JF81411',
        text: 'Nature d’un signal, nature d’une information, dans une application simple de la vie courante.',
        parent: 'JF8141'
      },
      {
        id: 'JF82',
        text: 'Le vivant, sa diversité et les fonctions qui le caractérisent',
        parent: 'JF8'
      },
      {
        id: 'JF821',
        text: 'Classer les organismes, exploiter les liens de parenté pour comprendre et expliquer l’évolution des organismes',
        parent: 'JF82'
      },
      {
        id: 'JF8211',
        text: 'Reconnaitre une cellule',
        parent: 'JF821'
      },
      {
        id: 'JF82111',
        text: 'La cellule, unité structurelle du vivant',
        parent: 'JF8211'
      },
      {
        id: 'JF8212',
        text: 'Utiliser différents critères pour classer les êtres vivants ; identifier des liens de parenté entre des organismes.',
        parent: 'JF821'
      },
      {
        id: 'JF8213',
        text: 'Identifier les changements des peuplements de la Terre au cours du temps.',
        parent: 'JF821'
      },
      {
        id: 'JF82131',
        text: 'Diversités actuelle et passée des espèces.',
        parent: 'JF8213'
      },
      {
        id: 'JF82132',
        text: 'Évolution des espèces vivantes.',
        parent: 'JF8213'
      },
      {
        id: 'JF822',
        text: 'Expliquer les besoins variables en aliments de l’être humain ; l’origine et les techniques mises en oeuvre pour transformer et conserver les aliments',
        parent: 'JF82'
      },
      {
        id: 'JF8221',
        text: 'Établir une relation entre l’activité, l’âge, les conditions de l’environnement et les besoins de l’organisme.',
        parent: 'JF822'
      },
      {
        id: 'JF82211',
        text: 'Apports alimentaires : qualité et quantité.',
        parent: 'JF8221'
      },
      {
        id: 'JF82212',
        text: 'Origine des aliments consommés : un exemple d’élevage, un exemple de culture',
        parent: 'JF8221'
      },
      {
        id: 'JF8222',
        text: 'Relier l’approvisionnement des organes aux fonctions de nutrition.',
        parent: 'JF822'
      },
      {
        id: 'JF82221',
        text: 'Apports discontinus (repas) et besoins continus',
        parent: 'JF8222'
      },
      {
        id: 'JF8223',
        text: 'Mettre en évidence la place des microorganismes dans la production et la conservation des aliments.',
        parent: 'JF822'
      },
      {
        id: 'JF8224',
        text: 'Mettre en relation les paramètres physicochimiques lors de la conservation des aliments et la limitation de la prolifération de microorganismes pathogènes.',
        parent: 'JF822'
      },
      {
        id: 'JF82241',
        text: 'Quelques techniques permettant d’éviter la prolifération des microorganismes.',
        parent: 'JF8224'
      },
      {
        id: 'JF82242',
        text: 'Hygiène alimentaire.',
        parent: 'JF8224'
      },
      {
        id: 'JF823',
        text: 'Décrire comment les êtres vivants se développent et deviennent aptes à se reproduire',
        parent: 'JF82'
      },
      {
        id: 'JF8231',
        text: 'Identifier et caractériser les modifications subies par un organisme vivant (naissance, croissance, capacité à se reproduire, vieillissement, mort) au cours de sa vie.',
        parent: 'JF823'
      },
      {
        id: 'JF82311',
        text: 'Modifications de l’organisation et du fonctionnement d’une plante ou d’un animal au cours du temps, en lien avec sa nutrition et sa reproduction.',
        parent: 'JF8231'
      },
      {
        id: 'JF82312',
        text: 'Différences morphologiques homme, femme, garçon, fille.',
        parent: 'JF8231'
      },
      {
        id: 'JF82313',
        text: 'Stades de développement (grainesgermination- fleur-pollinisation, oeuf-larveadulte, oeuf-foetus-bébé-jeune-adulte).',
        parent: 'JF8231'
      },
      {
        id: 'JF8232',
        text: 'Décrire et identifier les changements du corps au moment de la puberté.',
        parent: 'JF823'
      },
      {
        id: 'JF82321',
        text: 'Modifications morphologiques, comportementales et physiologiques lors de la puberté.',
        parent: 'JF8232'
      },
      {
        id: 'JF82322',
        text: 'Rôle respectif des deux sexes dans la reproduction.',
        parent: 'JF8232'
      },
      {
        id: 'JF824',
        text: 'Expliquer l’origine de la matière organique des êtres vivants et son devenir',
        parent: 'JF82'
      },
      {
        id: 'JF8241',
        text: 'Relier les besoins des plantes vertes et leur place particulière dans les réseaux trophiques.',
        parent: 'JF824'
      },
      {
        id: 'JF82411',
        text: 'Besoins des plantes vertes.',
        parent: 'JF8241'
      },
      {
        id: 'JF8242',
        text: 'Identifier les matières échangées entre un être vivant et son milieu de vie.',
        parent: 'JF824'
      },
      {
        id: 'JF82421',
        text: 'Besoins alimentaires des animaux.',
        parent: 'JF8242'
      },
      {
        id: 'JF82422',
        text: 'Devenir de la matière organique n’appartenant plus à un organisme vivant.',
        parent: 'JF8242'
      },
      {
        id: 'JF82423',
        text: 'Décomposeurs.',
        parent: 'JF8242'
      },
      {
        id: 'JF83',
        text: 'Matériaux et objets techniques',
        parent: 'JF8'
      },
      {
        id: 'JF831',
        text: 'Identifier les principales évolutions du besoin et des objets.',
        parent: 'JF83'
      },
      {
        id: 'JF8311',
        text: 'Repérer les évolutions d’un objet dans différents contextes (historique, économique, culturel).',
        parent: 'JF831'
      },
      {
        id: 'JF83111',
        text: 'L’évolution technologique (innovation, invention, principe technique).',
        parent: 'JF8311'
      },
      {
        id: 'JF83112',
        text: 'L’évolution des besoins.',
        parent: 'JF8311'
      },
      {
        id: 'JF832',
        text: 'Décrire le fonctionnement d’objets techniques, leurs fonctions et leurs constitutions',
        parent: 'JF83'
      },
      {
        id: 'JF8321',
        text: 'Besoin, fonction d’usage et d’estime.',
        parent: 'JF832'
      },
      {
        id: 'JF8322',
        text: 'Fonction technique, solutions techniques.',
        parent: 'JF832'
      },
      {
        id: 'JF8323',
        text: 'Représentation du fonctionnement d’un objet technique.',
        parent: 'JF832'
      },
      {
        id: 'JF8324',
        text: 'Comparaison de solutions techniques : constitutions, fonctions, organes.',
        parent: 'JF832'
      },
      {
        id: 'JF833',
        text: 'Identifier les principales familles de matériaux',
        parent: 'JF83'
      },
      {
        id: 'JF8331',
        text: 'Familles de matériaux (distinction des matériaux selon les relations entre formes, fonctions et procédés).',
        parent: 'JF833'
      },
      {
        id: 'JF8332',
        text: 'Caractéristiques et propriétés (aptitude au façonnage, valorisation).',
        parent: 'JF833'
      },
      {
        id: 'JF8333',
        text: 'Impact environnemental.',
        parent: 'JF833'
      },
      {
        id: 'JF834',
        text: 'Concevoir et produire tout ou partie d’un objet technique en équipe pour traduire une solution technologique répondant à un besoin.',
        parent: 'JF83'
      },
      {
        id: 'JF8341',
        text: 'Notion de contrainte.',
        parent: 'JF834'
      },
      {
        id: 'JF8342',
        text: 'Recherche d’idées (schémas, croquis…).',
        parent: 'JF834'
      },
      {
        id: 'JF8343',
        text: 'Modélisation du réel (maquette, modèles géométrique et numérique), représentation en conception assistée par ordinateur.',
        parent: 'JF834'
      },
      {
        id: 'JF8344',
        text: 'Processus, planning, protocoles, procédés de réalisation (outils, machines).',
        parent: 'JF834'
      },
      {
        id: 'JF8345',
        text: 'Choix de matériaux.',
        parent: 'JF834'
      },
      {
        id: 'JF8346',
        text: 'Maquette, prototype.',
        parent: 'JF834'
      },
      {
        id: 'JF8347',
        text: 'Vérification et contrôles (dimensions, fonctionnement).',
        parent: 'JF834'
      },
      {
        id: 'JF835',
        text: 'Repérer et comprendre la communication et la gestion de l’information',
        parent: 'JF83'
      },
      {
        id: 'JF8351',
        text: 'Environnement numérique de travail.',
        parent: 'JF835'
      },
      {
        id: 'JF8352',
        text: 'Le stockage des données, notions d’algorithmes, les objets programmables.',
        parent: 'JF835'
      },
      {
        id: 'JF8353',
        text: 'Usage des moyens numériques dans un réseau.',
        parent: 'JF835'
      },
      {
        id: 'JF8354',
        text: 'Usage de logiciels usuels.',
        parent: 'JF835'
      },
      {
        id: 'JF84',
        text: 'La planète Terre. Les êtres vivants dans leur environnement',
        parent: 'JF8'
      },
      {
        id: 'JF841',
        text: 'Situer la Terre dans le système solaire et caractériser les conditions de la vie terrestre',
        parent: 'JF84'
      },
      {
        id: 'JF8411',
        text: 'Caractériser les conditions de vie sur Terre (température, présence d’eau liquide).',
        parent: 'JF841'
      },
      {
        id: 'JF84111',
        text: 'Le Soleil, les planètes.',
        parent: 'JF8411'
      },
      {
        id: 'JF84112',
        text: 'Position de la Terre dans le système solaire.',
        parent: 'JF8411'
      },
      {
        id: 'JF84113',
        text: 'Histoire de la Terre et développement de la vie.',
        parent: 'JF8411'
      },
      {
        id: 'JF8412',
        text: 'Décrire les mouvements de la Terre (rotation sur elle-même et alternance jour-nuit, autour du Soleil et cycle des saisons).',
        parent: 'JF841'
      },
      {
        id: 'JF84121',
        text: 'Les mouvements de la Terre sur elle-même et autour du Soleil.',
        parent: 'JF8412'
      },
      {
        id: 'JF84122',
        text: 'Représentations géométriques de l’espace et des astres (cercle, sphère).',
        parent: 'JF8412'
      },
      {
        id: 'JF8413',
        text: 'Identifier les composantes biologiques et géologiques d’un paysage.',
        parent: 'JF841'
      },
      {
        id: 'JF84131',
        text: 'Paysages, géologie locale, interactions avec l’environnement et le peuplement.',
        parent: 'JF8413'
      },
      {
        id: 'JF8414',
        text: 'Relier certains phénomènes naturels (tempêtes, inondations, tremblements de terre) à des risques pour les populations.',
        parent: 'JF841'
      },
      {
        id: 'JF84141',
        text: 'Phénomènes géologiques traduisant activité interne de la terre (volcanisme, tremblements de terre…).',
        parent: 'JF8414'
      },
      {
        id: 'JF84142',
        text: 'Phénomènes traduisant l’activité externe de la Terre : phénomènes météorologiques et climatiques ; évènements extrêmes (tempêtes, cyclones, inondations et sècheresses…).',
        parent: 'JF8414'
      },
      {
        id: 'JF842',
        text: 'Identifier des enjeux liés à l’environnement',
        parent: 'JF84'
      },
      {
        id: 'JF8421',
        text: 'Décrire un milieu de vie dans ses diverses composantes.',
        parent: 'JF842'
      },
      {
        id: 'JF84211',
        text: 'Interactions des organismes vivants entre eux et avec leur environnement.',
        parent: 'JF8421'
      },
      {
        id: 'JF8422',
        text: 'Relier le peuplement d’un milieu et les conditions de vie.',
        parent: 'JF842'
      },
      {
        id: 'JF84221',
        text: 'Modification du peuplement en fonction des conditions physicochimiques du milieu et des saisons.',
        parent: 'JF8422'
      },
      {
        id: 'JF84222',
        text: 'Écosystèmes (milieu de vie avec ses caractéristiques et son peuplement) ; conséquences de la modification d’un facteur physique ou biologique sur l’écosystème.',
        parent: 'JF8422'
      },
      {
        id: 'JF84223',
        text: 'La biodiversité, un réseau dynamique.',
        parent: 'JF8422'
      },
      {
        id: 'JF8423',
        text: 'Identifier la nature des interactions entre les êtres vivants et leur importance dans le peuplement des milieux.',
        parent: 'JF842'
      },
      {
        id: 'JF8424',
        text: 'Identifier quelques impacts humains dans un environnement (aménagement, impact technologique...).',
        parent: 'JF842'
      },
      {
        id: 'JF84241',
        text: 'Aménagements de de l’espace par les humains et contraintes naturelles ; impacts technologiques positifs et négatifs sur l’environnement.',
        parent: 'JF8424'
      },
      {
        id: 'JF8425',
        text: 'Suivre et décrire le devenir de quelques matériaux de l’environnement proche.',
        parent: 'JF842'
      },
      {
        id: 'JF8426',
        text: 'Relier les besoins de l’être humain, l’exploitation des ressources naturelles et les impacts à prévoir et gérer (risques, rejets, valorisations, épuisement des stocks).',
        parent: 'JF842'
      },
      {
        id: 'JF8427',
        text: 'Exploitation raisonnée et utilisation des ressources (eau, pétrole, charbon, minerais, biodiversité, sols, bois, roches à des fins de construction…).',
        parent: 'JF842'
      },
      {
        id: 'JF9',
        text: 'Mathématiques',
        parent: 'niveau2'
      },
      {
        id: 'JF91',
        text: 'Nombres et calculs',
        parent: 'JF9'
      },
      {
        id: 'JF911',
        text: 'Utiliser et représenter les grands nombres entiers, des fractions simples, les nombres décimaux',
        parent: 'JF91'
      },
      {
        id: 'JF9111',
        text: 'Composer, décomposer les grands nombres entiers, en utilisant des regroupements par milliers.',
        parent: 'JF911'
      },
      {
        id: 'JF91111',
        text: 'Unités de numération (unités simples, dizaines, centaines, milliers, millions, milliards) et leurs relations.',
        parent: 'JF9111'
      },
      {
        id: 'JF9112',
        text: 'Comprendre et appliquer les règles de la numération aux grands nombres (jusqu’à 12 chiffres).',
        parent: 'JF911'
      },
      {
        id: 'JF9113',
        text: 'Comparer, ranger, encadrer des grands nombres entiers, les repérer et les placer sur une demidroite graduée adaptée.',
        parent: 'JF911'
      },
      {
        id: 'JF9114',
        text: 'Comprendre et utiliser la notion de fractions simples.',
        parent: 'JF911'
      },
      {
        id: 'JF91141',
        text: 'Écritures fractionnaires.',
        parent: 'JF9114'
      },
      {
        id: 'JF91142',
        text: 'Diverses désignations des fractions (orales, écrites et décompositions).',
        parent: 'JF9114'
      },
      {
        id: 'JF9115',
        text: 'Repérer et placer des fractions sur une demidroite graduée adaptée.',
        parent: 'JF911'
      },
      {
        id: 'JF91151',
        text: 'Une première extension de la relation d’ordre.',
        parent: 'JF9115'
      },
      {
        id: 'JF9116',
        text: 'Encadrer une fraction par deux nombres entiers consécutifs.',
        parent: 'JF911'
      },
      {
        id: 'JF9117',
        text: 'Établir des égalités entre des fractions simples.',
        parent: 'JF911'
      },
      {
        id: 'JF9118',
        text: 'Comprendre et utiliser la notion de nombre décimal.',
        parent: 'JF911'
      },
      {
        id: 'JF91181',
        text: 'Spécificités des nombres décimaux.',
        parent: 'JF9118'
      },
      {
        id: 'JF9119',
        text: 'Associer diverses désignations d’un nombre décimal (fractions décimales, écritures à virgule et décompositions).',
        parent: 'JF911'
      },
      {
        id: 'JF91191',
        text: 'Règles et fonctionnement des systèmes de numération dans le champ des nombres décimaux, relations entre unités de numération (point de vue décimal), valeurs des chiffres en fonction de leur rang dans l’écriture à virgule d’un nombre décimal (point de vue positionnel).',
        parent: 'JF9119'
      },
      {
        id: 'JF911A',
        text: 'Repérer et placer des décimaux sur une demidroite graduée adaptée.',
        parent: 'JF911'
      },
      {
        id: 'JF911B',
        text: 'Comparer, ranger, encadrer, intercaler des nombres décimaux.',
        parent: 'JF911'
      },
      {
        id: 'JF911B1',
        text: 'Ordre sur les nombres décimaux.',
        parent: 'JF911B'
      },
      {
        id: 'JF912',
        text: 'Calculer avec des nombres entiers et des nombres décimaux',
        parent: 'JF91'
      },
      {
        id: 'JF9121',
        text: 'Mémoriser des faits numériques et des procédures élémentaires de calcul.',
        parent: 'JF912'
      },
      {
        id: 'JF9122',
        text: 'Élaborer ou choisir des stratégies de calcul à l’oral et à l’écrit.',
        parent: 'JF912'
      },
      {
        id: 'JF9123',
        text: 'Vérifier la vraisemblance d’un résultat, notamment en estimant son ordre de grandeur.',
        parent: 'JF912'
      },
      {
        id: 'JF91231',
        text: 'Addition, soustraction, multiplication, division.',
        parent: 'JF9123'
      },
      {
        id: 'JF91232',
        text: 'Propriétés des opérations :',
        parent: 'JF9123'
      },
      {
        id: 'JF912321',
        text: '2+9 = 9+2',
        parent: 'JF91232'
      },
      {
        id: 'JF912322',
        text: '3×5×2 = 3×10',
        parent: 'JF91232'
      },
      {
        id: 'JF912323',
        text: '5×12 = 5×10 + 5×2',
        parent: 'JF91232'
      },
      {
        id: 'JF91233',
        text: 'Faits et procédures numériques additifs et multiplicatifs.',
        parent: 'JF9123'
      },
      {
        id: 'JF91234',
        text: 'Multiples et diviseurs des nombres d’usage courant.',
        parent: 'JF9123'
      },
      {
        id: 'JF91235',
        text: 'Critères de divisibilité (2, 3, 4, 5, 9, 10).',
        parent: 'JF9123'
      },
      {
        id: 'JF9124',
        text: 'Calcul mental : calculer mentalement pour obtenir un résultat exact ou évaluer un ordre de grandeur.',
        parent: 'JF912'
      },
      {
        id: 'JF9125',
        text: 'Calcul en ligne : utiliser des parenthèses dans des situations très simples.',
        parent: 'JF912'
      },
      {
        id: 'JF91251',
        text: 'Règles d’usage des parenthèses.',
        parent: 'JF9125'
      },
      {
        id: 'JF9126',
        text: 'Calcul posé : mettre en oeuvre un algorithme de calcul posé pour l’addition, la soustraction, la multiplication, la division.',
        parent: 'JF912'
      },
      {
        id: 'JF91261',
        text: 'Techniques opératoires de calcul (dans le cas de la division, on se limite à diviser par un entier).',
        parent: 'JF9126'
      },
      {
        id: 'JF9127',
        text: 'Calcul instrumenté : utiliser une calculatrice pour trouver ou vérifier un résultat.',
        parent: 'JF912'
      },
      {
        id: 'JF91271',
        text: 'Fonctions de base d’une calculatrice.',
        parent: 'JF9127'
      },
      {
        id: 'JF913',
        text: 'Résoudre des problèmes en utilisant des fractions simples, les nombres décimaux et le calcul',
        parent: 'JF91'
      },
      {
        id: 'JF9131',
        text: 'Résoudre des problèmes mettant en jeu les quatre opérations.',
        parent: 'JF913'
      },
      {
        id: 'JF91311',
        text: 'Sens des opérations.',
        parent: 'JF9131'
      },
      {
        id: 'JF91312',
        text: 'Problèmes relevant :',
        parent: 'JF9131'
      },
      {
        id: 'JF913121',
        text: 'des structures additives ;',
        parent: 'JF91312'
      },
      {
        id: 'JF913122',
        text: 'des structures multiplicatives.',
        parent: 'JF91312'
      },
      {
        id: 'JF9132',
        text: 'Organisation et gestion de données',
        parent: 'JF913'
      },
      {
        id: 'JF9133',
        text: 'Prélever des données numériques à partir de supports variés. Produire des tableaux, diagrammes et graphiques organisant des données numériques.',
        parent: 'JF913'
      },
      {
        id: 'JF9134',
        text: 'Exploiter et communiquer des résultats de mesures.',
        parent: 'JF913'
      },
      {
        id: 'JF91341',
        text: 'Représentations usuelles :',
        parent: 'JF9134'
      },
      {
        id: 'JF913411',
        text: 'tableaux (en deux ou plusieurs colonnes, à double entrée) ;',
        parent: 'JF91341'
      },
      {
        id: 'JF913412',
        text: 'diagrammes en bâtons, circulaires ou semicirculaires',
        parent: 'JF91341'
      },
      {
        id: 'JF913413',
        text: 'graphiques cartésiens.',
        parent: 'JF91341'
      },
      {
        id: 'JF9135',
        text: 'Proportionnalité',
        parent: 'JF913'
      },
      {
        id: 'JF91351',
        text: 'Reconnaitre et résoudre des problèmes relevant de la proportionnalité en utilisant une procédure adaptée.',
        parent: 'JF9135'
      },
      {
        id: 'JF92',
        text: 'Grandeurs et mesures',
        parent: 'JF9'
      },
      {
        id: 'JF921',
        text: 'Comparer, estimer, mesurer des grandeurs géométriques avec des nombres entiers et des nombres décimaux : longueur (périmètre), aire, volume, angle. Utiliser le lexique, les unités, les instruments de mesures spécifiques de ces grandeurs.',
        parent: 'JF92'
      },
      {
        id: 'JF9211',
        text: 'Comparer des périmètres avec ou sans recours à la mesure.',
        parent: 'JF921'
      },
      {
        id: 'JF9212',
        text: 'Mesurer des périmètres en reportant des unités et des fractions d’unités, ou en utilisant une formule.',
        parent: 'JF921'
      },
      {
        id: 'JF92121',
        text: 'Notion de longueur : cas particulier du périmètre.',
        parent: 'JF9212'
      },
      {
        id: 'JF92122',
        text: 'Formule du périmètre d’un carré, d’un rectangle.',
        parent: 'JF9212'
      },
      {
        id: 'JF92123',
        text: 'Formule de la longueur d’un cercle.',
        parent: 'JF9212'
      },
      {
        id: 'JF92124',
        text: 'Unités relatives aux longueurs : relations entre les unités de longueur et les unités de numération (grands nombres, nombres décimaux).',
        parent: 'JF9212'
      },
      {
        id: 'JF9213',
        text: 'Comparer, classer et ranger des surfaces selon leurs aires sans avoir recours à la mesure.',
        parent: 'JF921'
      },
      {
        id: 'JF9214',
        text: 'Différencier aire et périmètre d’une surface.',
        parent: 'JF921'
      },
      {
        id: 'JF9215',
        text: 'Déterminer la mesure de l’aire d’une surface à partir d’un pavage simple ou en utilisant une formule.',
        parent: 'JF921'
      },
      {
        id: 'JF9216',
        text: 'Estimer la mesure d’une aire par différentes procédures.',
        parent: 'JF921'
      },
      {
        id: 'JF92161',
        text: 'Unités usuelles d’aire : multiples et sousmultiples du m² et leurs relations, are et hectare.',
        parent: 'JF9216'
      },
      {
        id: 'JF92162',
        text: 'Formules de l’aire d’un carré, d’un rectangle, d’un triangle, d’un disque.',
        parent: 'JF9216'
      },
      {
        id: 'JF9217',
        text: 'Relier les unités de volume et de contenance.',
        parent: 'JF921'
      },
      {
        id: 'JF9218',
        text: 'Estimer la mesure d’un volume par différentes procédures.',
        parent: 'JF921'
      },
      {
        id: 'JF92181',
        text: 'Unités usuelles de contenance (multiples et sous multiples du litre).',
        parent: 'JF9218'
      },
      {
        id: 'JF92182',
        text: 'Unités usuelles de volume (cm3, dm3, m3), relations entre les unités.',
        parent: 'JF9218'
      },
      {
        id: 'JF9219',
        text: 'Déterminer le volume d’un pavé droit en se rapportant à un dénombrement d’unités ou en utilisant une formule.',
        parent: 'JF921'
      },
      {
        id: 'JF92191',
        text: 'Formule du volume d’un cube, d’un pavé droit.',
        parent: 'JF9219'
      },
      {
        id: 'JF921A',
        text: 'Identifier des angles dans une figure géométrique.',
        parent: 'JF921'
      },
      {
        id: 'JF921B',
        text: 'Comparer des angles.',
        parent: 'JF921'
      },
      {
        id: 'JF921C',
        text: 'Reproduire un angle donné en utilisant un gabarit.',
        parent: 'JF921'
      },
      {
        id: 'JF921D',
        text: 'Reconnaitre qu’un angle est droit, aigu ou obtus.',
        parent: 'JF921'
      },
      {
        id: 'JF921E',
        text: 'Estimer la mesure d’un angle.',
        parent: 'JF921'
      },
      {
        id: 'JF921F',
        text: 'Estimer et vérifier qu’un angle est droit, aigu ou obtus.',
        parent: 'JF921'
      },
      {
        id: 'JF921G',
        text: 'Utiliser un instrument de mesure (le rapporteur) et une unité de mesure (le degré) pour : déterminer la mesure en degré d’un angle ; construire un angle de mesure donnée en degrés.',
        parent: 'JF921'
      },
      {
        id: 'JF921G1',
        text: 'Notion d’angle.',
        parent: 'JF921G'
      },
      {
        id: 'JF921G2',
        text: 'Lexique associé aux angles : angle droit, aigu, obtus.',
        parent: 'JF921G'
      },
      {
        id: 'JF921G3',
        text: 'Mesure en degré d’un angle.',
        parent: 'JF921G'
      },
      {
        id: 'JF922',
        text: 'Résoudre des problèmes impliquant des grandeurs (géométriques, physiques, économiques) en utilisant des nombres entiers et des nombres décimaux',
        parent: 'JF92'
      },
      {
        id: 'JF9221',
        text: 'Résoudre des problèmes de comparaison avec et sans recours à la mesure.',
        parent: 'JF922'
      },
      {
        id: 'JF9222',
        text: 'Résoudre des problèmes dont la résolution mobilise simultanément des unités différentes de mesure et/ou des conversions.',
        parent: 'JF922'
      },
      {
        id: 'JF9223',
        text: 'Calculer des périmètres, des aires ou des volumes, en mobilisant ou non, selon les cas, des formules.',
        parent: 'JF922'
      },
      {
        id: 'JF92231',
        text: 'Formules donnant',
        parent: 'JF9223'
      },
      {
        id: 'JF92232',
        text: 'le périmètre d’un carré, d’un rectangle ;',
        parent: 'JF9223'
      },
      {
        id: 'JF92233',
        text: 'la longueur d’un cercle ;',
        parent: 'JF9223'
      },
      {
        id: 'JF92234',
        text: 'l’aire d’un carré, d’un rectangle, d’un triangle, d’un disque ;',
        parent: 'JF9223'
      },
      {
        id: 'JF92235',
        text: 'le volume d’un cube, d’un pavé droit.',
        parent: 'JF9223'
      },
      {
        id: 'JF9224',
        text: 'Calculer la durée écoulée entre deux instants donnés.',
        parent: 'JF922'
      },
      {
        id: 'JF9225',
        text: 'Déterminer un instant à partir de la connaissance d’un instant et d’une durée.',
        parent: 'JF922'
      },
      {
        id: 'JF92251',
        text: 'Unités de mesures usuelles: jour, semaine, heure, minute, seconde, dixième de seconde, mois, année, siècle, millénaire.',
        parent: 'JF9225'
      },
      {
        id: 'JF9226',
        text: 'Proportionnalité',
        parent: 'JF922'
      },
      {
        id: 'JF92261',
        text: 'Identifier une situation de proportionnalité entre deux grandeurs.',
        parent: 'JF9226'
      },
      {
        id: 'JF922611',
        text: 'Graphiques représentant des variations entre deux grandeurs.',
        parent: 'JF92261'
      },
      {
        id: 'JF93',
        text: 'Espace et géométrie',
        parent: 'JF9'
      },
      {
        id: 'JF931',
        text: '(Se) repérer et (se) déplacer dans l’espace en utilisant ou en élaborant des représentations',
        parent: 'JF93'
      },
      {
        id: 'JF9311',
        text: 'Se repérer, décrire ou exécuter des déplacements, sur un plan ou sur une carte.',
        parent: 'JF931'
      },
      {
        id: 'JF9312',
        text: 'Accomplir, décrire, coder des déplacements dans des espaces familiers.',
        parent: 'JF931'
      },
      {
        id: 'JF9313',
        text: 'Programmer les déplacements d’un robot ou ceux d’un personnage sur un écran.',
        parent: 'JF931'
      },
      {
        id: 'JF93131',
        text: 'Vocabulaire permettant de définir des positions et des déplacements.',
        parent: 'JF9313'
      },
      {
        id: 'JF93132',
        text: 'Divers modes de représentation de l’espace.',
        parent: 'JF9313'
      },
      {
        id: 'JF932',
        text: 'Reconnaitre, nommer, décrire, reproduire, représenter, construire quelques solides et figures géométriques',
        parent: 'JF931'
      },
      {
        id: 'JF9321',
        text: 'Reconnaitre, nommer, comparer, vérifier, décrire : - des figures simples ou complexes (assemblages de figures simples) ; - des solides simples ou des assemblages de solides simples à partir de certaines de leurs propriétés.',
        parent: 'JF932'
      },
      {
        id: 'JF93211',
        text: 'Figures planes et solides, premières caractérisations :',
        parent: 'JF9321'
      },
      {
        id: 'JF932111',
        text: 'triangles dont les triangles particuliers (triangle rectangle, triangle isocèle, triangle équilatéral) ;',
        parent: 'JF93211'
      },
      {
        id: 'JF932112',
        text: 'quadrilatères dont les quadrilatères particuliers (carré, rectangle, losange, première approche du parallélogramme) ;',
        parent: 'JF93211'
      },
      {
        id: 'JF932113',
        text: 'cercle (comme ensemble des points situés à une distance donnée d’un point donné).',
        parent: 'JF93211'
      },
      {
        id: 'JF93212',
        text: 'Vocabulaire approprié pour nommer les solides : pavé droit, cube, prisme droit, pyramide régulière, cylindre, cône, boule.',
        parent: 'JF9321'
      },
      {
        id: 'JF9322',
        text: 'Reproduire, représenter, construire :',
        parent: 'JF932'
      },
      {
        id: 'JF93221',
        text: 'des figures simples ou complexes (assemblages de figures simples)',
        parent: 'JF9322'
      },
      {
        id: 'JF93222',
        text: 'des solides simples ou des assemblages de solides simples sous forme de maquettes ou de dessins ou à partir d’un patron (donné, dans le cas d’un prisme ou d’une pyramide, ou à construire dans le cas d’un pavé droit).',
        parent: 'JF9322'
      },
      {
        id: 'JF9323',
        text: 'Réaliser, compléter et rédiger un programme de construction.',
        parent: 'JF932'
      },
      {
        id: 'JF9324',
        text: 'Réaliser une figure simple ou une figure composée de figures simples à l’aide d’un logiciel.',
        parent: 'JF932'
      },
      {
        id: 'JF933',
        text: 'Reconnaitre et utiliser quelques relations géométriques',
        parent: 'JF93'
      },
      {
        id: 'JF9331',
        text: 'Effectuer des tracés correspondant à des relations de perpendicularité ou de parallélisme de droites et de segments.',
        parent: 'JF933'
      },
      {
        id: 'JF9332',
        text: 'Déterminer le plus court chemin entre deux points (en lien avec la notion d’alignement).',
        parent: 'JF933'
      },
      {
        id: 'JF9333',
        text: 'Déterminer le plus court chemin entre un point et une droite ou entre deux droites parallèles (en lien avec la perpendicularité).',
        parent: 'JF933'
      },
      {
        id: 'JF93331',
        text: 'Alignement, appartenance.',
        parent: 'JF9333'
      },
      {
        id: 'JF93332',
        text: 'Perpendicularité, parallélisme (construction de droites parallèles, lien avec la propriété reliant droites parallèles et perpendiculaires).',
        parent: 'JF9333'
      },
      {
        id: 'JF93333',
        text: 'Egalite de longueurs.',
        parent: 'JF9333'
      },
      {
        id: 'JF93334',
        text: 'Egalite d’angles.',
        parent: 'JF9333'
      },
      {
        id: 'JF93335',
        text: 'Distance entre deux points, entre un point et une droite.',
        parent: 'JF9333'
      },
      {
        id: 'JF9334',
        text: 'Compléter une figure par symétrie axiale.',
        parent: 'JF933'
      },
      {
        id: 'JF9335',
        text: 'Construire la figure symétrique d’une figure donnée par rapport à un axe donné que l’axe de symétrie coupe ou non la figure, construire le symétrique d’une droite, d’un segment, d’un point par rapport à un axe donné.',
        parent: 'JF933'
      },
      {
        id: 'JF93351',
        text: 'Figure symétrique, axe de symétrie d’une figure, figures symétriques par rapport à un axe.',
        parent: 'JF9335'
      },
      {
        id: 'JF93252',
        text: 'Propriétés de conservation de la symétrie axiale.',
        parent: 'JF9335'
      },
      {
        id: 'JF93353',
        text: 'Médiatrice d’un segment.',
        parent: 'JF9335'
      },
      {
        id: 'JF9336',
        text: 'Proportionnalité - Reproduire une figure en respectant une échelle.',
        parent: 'JF933'
      },
      {
        id: 'JF93361',
        text: 'Agrandissement ou réduction d’une figure.',
        parent: 'JF9336'
      },
      {
        id: 'compTrav',
        text: 'Compétences travaillées',
        parent: '#'
      },
      {
        id: 'W',
        text: 'CYCLE 2',
        parent: 'compTrav'
      },
      {
        id: 'W1',
        text: 'Français',
        parent: 'W'
      },
      {
        id: 'W11',
        text: 'Comprendre et s’exprimer à l’oral',
        parent: 'W1'
      },
      {
        id: 'W111',
        text: 'Écouter pour comprendre des messages oraux ou des textes lus par un adulte.',
        parent: 'W11'
      },
      {
        id: 'W112',
        text: 'Dire pour être entendu et compris.',
        parent: 'W11'
      },
      {
        id: 'W113',
        text: 'Participer à des échanges dans des situations diversifiées.',
        parent: 'W11'
      },
      {
        id: 'W114',
        text: 'Adopter une distance critique par rapport au langage produit.',
        parent: 'W11'
      },
      {
        id: 'W12',
        text: 'Lire',
        parent: 'W1'
      },
      {
        id: 'W121',
        text: 'Identifier des mots de manière de plus en plus aisée.',
        parent: 'W12'
      },
      {
        id: 'W122',
        text: 'Comprendre un texte.',
        parent: 'W12'
      },
      {
        id: 'W123',
        text: 'Pratiquer différentes formes de lecture.',
        parent: 'W12'
      },
      {
        id: 'W124',
        text: 'Lire à voix haute.',
        parent: 'W12'
      },
      {
        id: 'W125',
        text: 'Contrôler sa compréhension.',
        parent: 'W12'
      },
      {
        id: 'W13',
        text: 'Écrire',
        parent: 'W1'
      },
      {
        id: 'W131',
        text: 'Copier de manière experte.',
        parent: 'W13'
      },
      {
        id: 'W132',
        text: 'Produire des écrits.',
        parent: 'W13'
      },
      {
        id: 'W133',
        text: 'Réviser et améliorer l’écrit qu’on a produit.',
        parent: 'W13'
      },
      {
        id: 'W14',
        text: 'Comprendre le fonctionnement de la langue',
        parent: 'W1'
      },
      {
        id: 'W141',
        text: 'Maitriser les relations entre l’oral et l’écrit.',
        parent: 'W14'
      },
      {
        id: 'W142',
        text: 'Mémoriser et se remémorer l’orthographe de mots fréquents et de mots irréguliers dont le sens est connu.',
        parent: 'W14'
      },
      {
        id: 'W143',
        text: 'Identifier les principaux constituants d’une phrase simple en relation avec sa cohérence sémantique.',
        parent: 'W14'
      },
      {
        id: 'W144',
        text: 'Raisonner pour résoudre des problèmes orthographiques.',
        parent: 'W14'
      },
      {
        id: 'W145',
        text: 'Orthographier les formes verbales les plus fréquentes.',
        parent: 'W14'
      },
      {
        id: 'W146',
        text: 'Identifier des relations entre les mots, entre les mots et leur contexte d’utilisation ; s’en servir pour mieux comprendre.',
        parent: 'W14'
      },
      {
        id: 'W147',
        text: 'Étendre ses connaissances lexicales, mémoriser et réutiliser des mots nouvellement appris.',
        parent: 'W14'
      },
      {
        id: 'W2',
        text: 'Langues vivantes',
        parent: 'W'
      },
      {
        id: 'W21',
        text: 'Comprendre l’oral',
        parent: 'W2'
      },
      {
        id: 'W211',
        text: 'Écouter et comprendre des messages oraux simples relevant de la vie quotidienne, des textes simples lus par le professeur.',
        parent: 'W21'
      },
      {
        id: 'W22',
        text: 'S’exprimer oralement en continu',
        parent: 'W2'
      },
      {
        id: 'W221',
        text: 'En s’appuyant sur un modèle, réciter, se décrire, lire ou raconter.',
        parent: 'W22'
      },
      {
        id: 'W23',
        text: 'Prendre part à une conversation',
        parent: 'W2'
      },
      {
        id: 'W231',
        text: 'Participer à des échanges simples pour être entendu et compris dans quelques situations diversifiées de la vie quotidienne.',
        parent: 'W23'
      },
      {
        id: 'W24',
        text: 'Découvrir quelques aspects culturels d’une langue vivante étrangère et régionale',
        parent: 'W2'
      },
      {
        id: 'W241',
        text: 'Identifier quelques grands repères culturels de l’environnement quotidien des élèves du même âge dans les pays ou régions étudiés.',
        parent: 'W24'
      },
      {
        id: 'W3',
        text: 'Enseignements artistiques',
        parent: 'W'
      },
      {
        id: 'W31',
        text: 'Expérimenter, produire, créer',
        parent: 'W3'
      },
      {
        id: 'W311',
        text: 'S’approprier par les sens les éléments du langage plastique : matière, support, couleur…',
        parent: 'W31'
      },
      {
        id: 'W312',
        text: 'Observer les effets produits par ses gestes, par les outils utilisés.',
        parent: 'W31'
      },
      {
        id: 'W313',
        text: 'Tirer parti de trouvailles fortuites, saisir les effets du hasard.',
        parent: 'W31'
      },
      {
        id: 'W314',
        text: 'Représenter le monde environnant ou donner forme à son imaginaire en explorant la diversité des domaines (dessin, collage, modelage, sculpture, photographie…).',
        parent: 'W31'
      },
      {
        id: 'W32',
        text: 'Mettre en oeuvre un projet artistique',
        parent: 'W3'
      },
      {
        id: 'W321',
        text: 'Respecter l’espace, les outils et les matériaux partagés.',
        parent: 'W32'
      },
      {
        id: 'W322',
        text: 'Mener à terme une production individuelle dans le cadre d’un projet accompagné par le professeur.',
        parent: 'W32'
      },
      {
        id: 'W323',
        text: 'Montrer sans réticence ses productions et regarder celles des autres.',
        parent: 'W32'
      },
      {
        id: 'W33',
        text: 'S’exprimer, analyser sa pratique, celle de ses pairs ; établir une relation avec celle des artistes, s’ouvrir à l’altérité',
        parent: 'W3'
      },
      {
        id: 'W331',
        text: 'Prendre la parole devant un groupe pour partager ses trouvailles, s’intéresser à celles découvertes dans des oeuvres d’art.',
        parent: 'W33'
      },
      {
        id: 'W332',
        text: 'Formuler ses émotions, entendre et respecter celles des autres.',
        parent: 'W33'
      },
      {
        id: 'W333',
        text: 'Repérer les éléments du langage plastique dans une production : couleurs, formes, matières, support…',
        parent: 'W33'
      },
      {
        id: 'W34',
        text: 'Se repérer dans les domaines liés aux arts plastiques, être sensible aux questions de l’art',
        parent: 'W3'
      },
      {
        id: 'W341',
        text: 'Effectuer des choix parmi les images rencontrées, établir un premier lien entre son univers visuel et la culture artistique.',
        parent: 'W34'
      },
      {
        id: 'W342',
        text: 'Exprimer ses émotions lors de la rencontre avec des oeuvres d’art, manifester son intérêt pour la rencontre directe avec des oeuvres.',
        parent: 'W34'
      },
      {
        id: 'W343',
        text: 'S’approprier quelques oeuvres de domaines et d’époques variées appartenant au patrimoine national et mondial.',
        parent: 'W34'
      },
      {
        id: 'W344',
        text: 'S’ouvrir à la diversité des pratiques et des cultures artistiques.',
        parent: 'W34'
      },
      {
        id: 'W35',
        text: 'Chanter',
        parent: 'W3'
      },
      {
        id: 'W351',
        text: 'Chanter une mélodie simple avec une intonation juste, chanter une comptine ou un chant par imitation.',
        parent: 'W35'
      },
      {
        id: 'W352',
        text: 'Interpréter un chant avec expressivité.',
        parent: 'W35'
      },
      {
        id: 'W36',
        text: 'Écouter, comparer',
        parent: 'W3'
      },
      {
        id: 'W361',
        text: 'Décrire et comparer des éléments sonores.',
        parent: 'W36'
      },
      {
        id: 'W362',
        text: 'Comparer des musiques et identifier des ressemblances et des différences.',
        parent: 'W36'
      },
      {
        id: 'W37',
        text: 'Explorer et imaginer',
        parent: 'W3'
      },
      {
        id: 'W371',
        text: 'Imaginer des représentations graphiques ou corporelles de la musique.',
        parent: 'W37'
      },
      {
        id: 'W372',
        text: 'Inventer une organisation simple à partir de différents éléments sonores.',
        parent: 'W37'
      },
      {
        id: 'W38',
        text: 'Échanger, partager',
        parent: 'W3'
      },
      {
        id: 'W381',
        text: 'Exprimer ses émotions, ses sentiments et ses préférences.',
        parent: 'W38'
      },
      {
        id: 'W382',
        text: 'Écouter et respecter l’avis des autres et l’expression de leur sensibilité.',
        parent: 'W38'
      },
      {
        id: 'W4',
        text: 'Éducation physique et sportive',
        parent: 'W'
      },
      {
        id: 'W41',
        text: 'Développer sa motricité et construire un langage du corps',
        parent: 'W4'
      },
      {
        id: 'W411',
        text: 'Prendre conscience des différentes ressources à mobiliser pour agir avec son corps.',
        parent: 'W41'
      },
      {
        id: 'W412',
        text: 'Adapter sa motricité à des environnements variés.',
        parent: 'W41'
      },
      {
        id: 'W413',
        text: 'S’exprimer par son corps et accepter de se montrer à autrui.',
        parent: 'W41'
      },
      {
        id: 'W42',
        text: 'S’approprier seul ou à plusieurs par la pratique, les méthodes et outils pour apprendre',
        parent: 'W4'
      },
      {
        id: 'W421',
        text: 'Apprendre par essai-erreur en utilisant les effets de son action.',
        parent: 'W42'
      },
      {
        id: 'W422',
        text: 'Apprendre à planifier son action avant de la réaliser.',
        parent: 'W42'
      },
      {
        id: 'W43',
        text: 'Partager des règles, assumer des rôles et des responsabilités pour apprendre à vivre ensemble',
        parent: 'W4'
      },
      {
        id: 'W431',
        text: 'Assumer les rôles spécifiques aux différentes APSA (joueur, coach, arbitre, juge, médiateur, organisateur,…).',
        parent: 'W43'
      },
      {
        id: 'W432',
        text: 'Élaborer, respecter et faire respecter règles et règlements.',
        parent: 'W43'
      },
      {
        id: 'W433',
        text: 'Accepter et prendre en considération toutes les différences interindividuelles au sein d’un groupe.',
        parent: 'W43'
      },
      {
        id: 'W44',
        text: 'Apprendre à entretenir sa santé par une activité physique régulière',
        parent: 'W4'
      },
      {
        id: 'W441',
        text: 'Découvrir les principes d’une bonne hygiène de vie, à des fins de santé et de bien-être.',
        parent: 'W44'
      },
      {
        id: 'W442',
        text: 'Ne pas se mettre en danger par un engagement physique dont l’intensité excède ses qualités physiques.',
        parent: 'W44'
      },
      {
        id: 'W45',
        text: 'S’approprier une culture physique sportive et artistique',
        parent: 'W4'
      },
      {
        id: 'W451',
        text: 'Découvrir la variété des activités et des spectacles sportifs.',
        parent: 'W45'
      },
      {
        id: 'W452',
        text: 'Exprimer des intentions et des émotions par son corps dans un projet artistique individuel ou collectif.',
        parent: 'W45'
      },
      {
        id: 'W5',
        text: 'Questionner le monde',
        parent: 'W'
      },
      {
        id: 'W51',
        text: 'Pratiquer des démarches scientifiques',
        parent: 'W5'
      },
      {
        id: 'W511',
        text: 'Pratiquer, avec l’aide des professeurs, quelques moments d’une démarche d’investigation : questionnement, observation, expérience, description, raisonnement, conclusion.',
        parent: 'W51'
      },
      {
        id: 'W52',
        text: 'Imaginer, réaliser',
        parent: 'W5'
      },
      {
        id: 'W521',
        text: 'Observer des objets simples et des situations d’activités de la vie quotidienne.',
        parent: 'W52'
      },
      {
        id: 'W522',
        text: 'Imaginer et réaliser des objets simples et de petits montages.',
        parent: 'W52'
      },
      {
        id: 'W53',
        text: 'S’approprier des outils et des méthodes',
        parent: 'W5'
      },
      {
        id: 'W531',
        text: 'Choisir ou utiliser le matériel adapté proposé pour mener une observation, effectuer une mesure, réaliser une expérience.',
        parent: 'W53'
      },
      {
        id: 'W532',
        text: 'Manipuler avec soin.',
        parent: 'W53'
      },
      {
        id: 'W54',
        text: 'Pratiquer des langages',
        parent: 'W5'
      },
      {
        id: 'W541',
        text: 'Communiquer en français, à l’oral et à l’écrit, en cultivant précision, syntaxe et richesse du vocabulaire.',
        parent: 'W54'
      },
      {
        id: 'W542',
        text: 'Lire et comprendre des textes documentaires illustrés.',
        parent: 'W54'
      },
      {
        id: 'W543',
        text: 'Extraire d’un texte ou d’une ressource documentaire une information qui répond à un besoin, une question.',
        parent: 'W54'
      },
      {
        id: 'W544',
        text: 'Restituer les résultats des observations sous forme orale ou d’écrits variés (notes, listes, dessins, voire tableaux).',
        parent: 'W54'
      },
      {
        id: 'W55',
        text: 'Mobiliser des outils numériques',
        parent: 'W5'
      },
      {
        id: 'W551',
        text: 'Découvrir des outils numériques pour dessiner, communiquer, rechercher et restituer des informations simples.',
        parent: 'W55'
      },
      {
        id: 'W56',
        text: 'Adopter un comportement éthique et responsable',
        parent: 'W5'
      },
      {
        id: 'W561',
        text: 'Développer un comportement responsable vis-à-vis de l’environnement et de la santé grâce à une attitude raisonnée fondée sur la connaissance.',
        parent: 'W56'
      },
      {
        id: 'W562',
        text: 'Mettre en pratique les premières notions d’éco-gestion de l’environnement par des actions simples individuelles ou collectives : gestion de déchets, du papier et économies d’eau et d’énergie (éclairage, chauffage...).',
        parent: 'W56'
      },
      {
        id: 'W57',
        text: 'Se situer dans l’espace et dans le temps',
        parent: 'W5'
      },
      {
        id: 'W571',
        text: 'Construire des repères spatiaux :',
        parent: 'W57'
      },
      {
        id: 'W5711',
        text: 'se repérer, s’orienter et se situer dans un espace géographique ;',
        parent: 'W571'
      },
      {
        id: 'W5712',
        text: 'utiliser et produire des représentations de l’espace.',
        parent: 'W571'
      },
      {
        id: 'W572',
        text: 'Construire des repères temporels :',
        parent: 'W57'
      },
      {
        id: 'W5721',
        text: 'ordonner des événements ;',
        parent: 'W572'
      },
      {
        id: 'W5722',
        text: 'mémoriser quelques repères chronologiques.',
        parent: 'W572'
      },
      {
        id: 'W6',
        text: 'Mathématiques',
        parent: 'W'
      },
      {
        id: 'W61',
        text: 'Chercher',
        parent: 'W6'
      },
      {
        id: 'W611',
        text: 'S’engager dans une démarche de résolution de problèmes en observant, en posant des questions, en manipulant, en expérimentant, en émettant des hypothèses, si besoin avec l’accompagnement du professeur après un temps de recherche autonome.',
        parent: 'W61'
      },
      {
        id: 'W612',
        text: 'Tester, essayer plusieurs pistes proposées par soi-même, les autres élèves ou le professeur.',
        parent: 'W61'
      },
      {
        id: 'W62',
        text: 'Modéliser',
        parent: 'W6'
      },
      {
        id: 'W621',
        text: 'Utiliser des outils mathématiques pour résoudre des problèmes concrets, notamment des problèmes portant sur des grandeurs et leurs mesures.',
        parent: 'W62'
      },
      {
        id: 'W622',
        text: 'Réaliser que certains problèmes relèvent de situations additives, d’autres de situations multiplicatives, de partages ou de groupements.',
        parent: 'W62'
      },
      {
        id: 'W623',
        text: 'Reconnaitre des formes dans des objets réels et les reproduire géométriquement.',
        parent: 'W62'
      },
      {
        id: 'W63',
        text: 'Représenter',
        parent: 'W6'
      },
      {
        id: 'W631',
        text: 'Appréhender différents systèmes de représentations (dessins, schémas, arbres de calcul, etc.).',
        parent: 'W63'
      },
      {
        id: 'W632',
        text: 'Utiliser des nombres pour représenter des quantités ou des grandeurs.',
        parent: 'W63'
      },
      {
        id: 'W633',
        text: 'Utiliser diverses représentations de solides et de situations spatiales.',
        parent: 'W63'
      },
      {
        id: 'W64',
        text: 'Raisonner',
        parent: 'W6'
      },
      {
        id: 'W641',
        text: 'Anticiper le résultat d’une manipulation, d’un calcul, ou d’une mesure.',
        parent: 'W64'
      },
      {
        id: 'W642',
        text: 'Raisonner sur des figures pour les reproduire avec des instruments.',
        parent: 'W64'
      },
      {
        id: 'W643',
        text: 'Tenir compte d’éléments divers (arguments d’autrui, résultats d’une expérience, sources internes ou externes à la classe, etc.) pour modifier son jugement.',
        parent: 'W64'
      },
      {
        id: 'W644',
        text: 'Prendre progressivement conscience de la nécessité et de l’intérêt de justifier ce que l’on affirme.',
        parent: 'W64'
      },
      {
        id: 'W65',
        text: 'Calculer',
        parent: 'W6'
      },
      {
        id: 'W651',
        text: 'Calculer avec des nombres entiers, mentalement ou à la main, de manière exacte ou approchée, e utilisant des stratégies adaptées aux nombres en jeu.',
        parent: 'W65'
      },
      {
        id: 'W652',
        text: 'Contrôler la vraisemblance de ses résultats.',
        parent: 'W65'
      },
      {
        id: 'W66',
        text: 'Communiquer',
        parent: 'W6'
      },
      {
        id: 'W661',
        text: 'Utiliser l’oral et l’écrit, le langage naturel puis quelques représentations et quelques symboles pour expliciter des démarches, argumenter des raisonnements.',
        parent: 'W66'
      },
      {
        id: 'X',
        text: 'CYCLE 3',
        parent: 'compTrav'
      },
      {
        id: 'X1',
        text: 'Français',
        parent: 'X'
      },
      {
        id: 'X11',
        text: 'Comprendre et s’exprimer à l’oral',
        parent: 'X1'
      },
      {
        id: 'X111',
        text: 'Écouter pour comprendre un message oral, un propos, un discours, un texte lu.',
        parent: 'X11'
      },
      {
        id: 'X112',
        text: 'Parler en prenant en compte son auditoire.',
        parent: 'X11'
      },
      {
        id: 'X113',
        text: 'Participer à des échanges dans des situations diversifiées.',
        parent: 'X11'
      },
      {
        id: 'X114',
        text: 'Adopter une attitude critique par rapport au langage produit.',
        parent: 'X11'
      },
      {
        id: 'X12',
        text: 'Lire',
        parent: 'X1'
      },
      {
        id: 'X121',
        text: 'Lire avec fluidité.',
        parent: 'X12'
      },
      {
        id: 'X122',
        text: 'Comprendre un texte littéraire et l’interpréter.',
        parent: 'X12'
      },
      {
        id: 'X123',
        text: 'Comprendre des textes, des documents et des images et les interpréter.',
        parent: 'X12'
      },
      {
        id: 'X124',
        text: 'Contrôler sa compréhension, être un lecteur autonome.',
        parent: 'X12'
      },
      {
        id: 'X13',
        text: 'Écrire',
        parent: 'X1'
      },
      {
        id: 'X131',
        text: 'Écrire à la main de manière fluide et efficace.',
        parent: 'X13'
      },
      {
        id: 'X132',
        text: 'Écrire avec un clavier rapidement et efficacement.',
        parent: 'X13'
      },
      {
        id: 'X133',
        text: 'Recourir à l’écriture pour réfléchir et pour apprendre.',
        parent: 'X13'
      },
      {
        id: 'X134',
        text: 'Produire des écrits variés.',
        parent: 'X13'
      },
      {
        id: 'X135',
        text: 'Réécrire à partir de nouvelles consignes ou faire évoluer son texte.',
        parent: 'X13'
      },
      {
        id: 'X136',
        text: 'Prendre en compte les normes de l’écrit pour formuler, transcrire et réviser.',
        parent: 'X13'
      },
      {
        id: 'X14',
        text: 'Comprendre le fonctionnement de la langue',
        parent: 'X1'
      },
      {
        id: 'X141',
        text: 'Maitriser les relations entre l’oral et l’écrit.',
        parent: 'X14'
      },
      {
        id: 'X142',
        text: 'Acquérir la structure, le sens et l’orthographe des mots.',
        parent: 'X14'
      },
      {
        id: 'X143',
        text: 'Maitriser la forme des mots en lien avec la syntaxe.',
        parent: 'X14'
      },
      {
        id: 'X144',
        text: 'Observer le fonctionnement du verbe et l’orthographier.',
        parent: 'X14'
      },
      {
        id: 'X145',
        text: 'Identifier les constituants d’une phrase simple en relation avec son sens ; distinguer phrase simple et phrase complexe.',
        parent: 'X14'
      },
      {
        id: 'X2',
        text: 'Langues vivantes',
        parent: 'X'
      },
      {
        id: 'X21',
        text: 'Écouter et comprendre',
        parent: 'X2'
      },
      {
        id: 'X211',
        text: ' Écouter et comprendre des messages oraux simples relevant de la vie quotidienne, des histoires simples.',
        parent: 'X21'
      },
      {
        id: 'X212',
        text: ' Exercer sa mémoire auditive à court et à long terme pour mémoriser des mots, des expressions courantes.',
        parent: 'X21'
      },
      {
        id: 'X213',
        text: ' Utiliser des indices sonores et visuels pour déduire le sens de mots inconnus, d’un message.',
        parent: 'X21'
      },
      {
        id: 'X22',
        text: 'Lire et comprendre',
        parent: 'X2'
      },
      {
        id: 'X221',
        text: ' Utiliser le contexte, les illustrations et les connaissances pour comprendre un texte.',
        parent: 'X22'
      },
      {
        id: 'X222',
        text: ' Reconnaitre des mots isolés dans un énoncé, un court texte.',
        parent: 'X22'
      },
      {
        id: 'X223',
        text: ' S’appuyer sur des mots outils, des structures simples, des expressions rituelles.',
        parent: 'X22'
      },
      {
        id: 'X224',
        text: ' Percevoir la relation entre certains graphèmes et phonèmes spécifiques à la langue.',
        parent: 'X22'
      },
      {
        id: 'X23',
        text: 'Parler en continu',
        parent: 'X2'
      },
      {
        id: 'X231',
        text: ' Mémoriser et reproduire des énoncés.',
        parent: 'X23'
      },
      {
        id: 'X232',
        text: ' S’exprimer de manière audible, en modulant débit et voix.',
        parent: 'X23'
      },
      {
        id: 'X233',
        text: ' Participer à des échanges simples en mobilisant ses connaissances phonologiques, grammaticales, lexicales, pour être entendu et compris dans quelques situations diversifiées de la vie quotidienne.',
        parent: 'X23'
      },
      {
        id: 'X24',
        text: 'Écrire',
        parent: 'X2'
      },
      {
        id: 'X241',
        text: ' Écrire des mots et des expressions dont l’orthographe et la syntaxe ont été mémorisées.',
        parent: 'X24'
      },
      {
        id: 'X242',
        text: ' Mobiliser des structures simples pour écrire des phrases en s’appuyant sur une trame connue.',
        parent: 'X24'
      },
      {
        id: 'X25',
        text: 'Réagir et dialoguer',
        parent: 'X2'
      },
      {
        id: 'X251',
        text: ' Poser des questions simples.',
        parent: 'X25'
      },
      {
        id: 'X252',
        text: ' Mobiliser des énoncés adéquats au contexte dans une succession d’échanges ritualisés.',
        parent: 'X25'
      },
      {
        id: 'X253',
        text: ' Utiliser des procédés très simples pour commencer, poursuivre et terminer une conversation brève.',
        parent: 'X25'
      },
      {
        id: 'X26',
        text: 'Découvrir les aspects culturels d’une langue vivante étrangère et régionale',
        parent: 'X2'
      },
      {
        id: 'X261',
        text: ' Identifier quelques grands repères culturels de l’environnement quotidien des élèves du même âge dans les pays ou régions étudiés.',
        parent: 'X26'
      },
      {
        id: 'X262',
        text: ' Mobiliser ses connaissances culturelles pour décrire ou raconter des personnages réels ou imaginaires.',
        parent: 'X26'
      },
      {
        id: 'X3',
        text: 'Arts plastiques',
        parent: 'X'
      },
      {
        id: 'X31',
        text: 'Expérimenter, produire, créer',
        parent: 'X3'
      },
      {
        id: 'X311',
        text: ' Choisir, organiser et mobiliser des gestes, des outils et des matériaux en fonction des effets qu’ils produisent.',
        parent: 'X31'
      },
      {
        id: 'X312',
        text: ' Représenter le monde environnant ou donner forme à son imaginaire en explorant divers domaines (dessin, collage, modelage, sculpture, photographie, vidéo…).',
        parent: 'X31'
      },
      {
        id: 'X313',
        text: ' Rechercher une expression personnelle en s’éloignant des stéréotypes.',
        parent: 'X31'
      },
      {
        id: 'X314',
        text: ' Intégrer l’usage des outils informatiques de travail de l’image et de recherche d’information, au service de la pratique plastique.',
        parent: 'X31'
      },
      {
        id: 'X32',
        text: 'Mettre en oeuvre un projet artistique',
        parent: 'X3'
      },
      {
        id: 'X321',
        text: ' Identifier les principaux outils et compétences nécessaires à la réalisation d’un projet artistique.',
        parent: 'X32'
      },
      {
        id: 'X322',
        text: ' Se repérer dans les étapes de la réalisation d’une production plastique individuelle ou collective, anticiper les difficultés éventuelles.',
        parent: 'X32'
      },
      {
        id: 'X323',
        text: ' Identifier et assumer sa part de responsabilité dans un processus coopératif de création.',
        parent: 'X32'
      },
      {
        id: 'X324',
        text: ' Adapter son projet en fonction des contraintes de réalisation et de la prise en compte du spectateur.',
        parent: 'X32'
      },
      {
        id: 'X33',
        text: 'S’exprimer, analyser sa pratique, celle de ses pairs ; établir une relation avec celle des artistes, s’ouvrir à l’altérité',
        parent: 'X3'
      },
      {
        id: 'X331',
        text: ' Décrire et interroger à l’aide d’un vocabulaire spécifique ses productions plastiques, celles de ses pairs et des oeuvres d’art étudiées en classe.',
        parent: 'X33'
      },
      {
        id: 'X332',
        text: ' Justifier des choix pour rendre compte du cheminement qui conduit de l’intention à la réalisation.',
        parent: 'X33'
      },
      {
        id: 'X333',
        text: ' Formuler une expression juste de ses émotions, en prenant appui sur ses propres réalisations plastiques, celles des autres élèves et des oeuvres d’art.',
        parent: 'X33'
      },
      {
        id: 'X34',
        text: 'Se repérer dans les domaines liés aux arts plastiques, être sensible aux questions de l’art',
        parent: 'X3'
      },
      {
        id: 'X341',
        text: ' Repérer, pour les dépasser, certains a priori et stéréotypes culturels et artistiques.',
        parent: 'X34'
      },
      {
        id: 'X342',
        text: ' Identifier quelques caractéristiques qui inscrivent une oeuvre d’art dans une aire géographique ou culturelle et dans un temps historique, contemporain, proche ou lointain.',
        parent: 'X34'
      },
      {
        id: 'X343',
        text: ' Décrire des oeuvres d’art, en proposer une compréhension personnelle argumentée.',
        parent: 'X34'
      },
      {
        id: 'X4',
        text: 'EDUCATION MUSICALE',
        parent: 'X'
      },
      {
        id: 'X41',
        text: 'Chanter et interpréter',
        parent: 'X4'
      },
      {
        id: 'X411',
        text: ' Reproduire et interpréter un modèle mélodique et rythmique.',
        parent: 'X41'
      },
      {
        id: 'X412',
        text: ' Interpréter un répertoire varié avec expressivité.',
        parent: 'X41'
      },
      {
        id: 'X42',
        text: 'Écouter, comparer et commenter',
        parent: 'X4'
      },
      {
        id: 'X421',
        text: ' Décrire et comparer des éléments sonores issus de contextes musicaux différents.',
        parent: 'X42'
      },
      {
        id: 'X422',
        text: ' Identifier et nommer ressemblances et différences dans deux extraits musicaux.',
        parent: 'X42'
      },
      {
        id: 'X423',
        text: ' Identifier quelques caractéristiques qui inscrivent une oeuvre musicale dans une aire géographique ou culturelle et dans un temps historique contemporain, proche ou lointain.',
        parent: 'X42'
      },
      {
        id: 'X43',
        text: 'Explorer, imaginer et créer',
        parent: 'X4'
      },
      {
        id: 'X431',
        text: ' Imaginer l’organisation de différents éléments sonores.',
        parent: 'X43'
      },
      {
        id: 'X432',
        text: ' Faire des propositions personnelles lors de moments de création, d’invention et d’interprétation.',
        parent: 'X43'
      },
      {
        id: 'X44',
        text: 'Échanger, partager et argumenter',
        parent: 'X4'
      },
      {
        id: 'X441',
        text: ' Argumenter un jugement sur une musique.',
        parent: 'X44'
      },
      {
        id: 'X442',
        text: ' Écouter et respecter le point de vue des autres et l’expression de leur sensibilité.',
        parent: 'X44'
      },
      {
        id: 'X5',
        text: 'HISTOIRE DES ARTS',
        parent: 'X'
      },
      {
        id: 'X51',
        text: 'Identifier',
        parent: 'X5'
      },
      {
        id: 'X511',
        text: ' Donner un avis argumenté sur ce que représente ou exprime une oeuvre d’art.',
        parent: 'X51'
      },
      {
        id: 'X52',
        text: 'Analyser',
        parent: 'X5'
      },
      {
        id: 'X521',
        text: ' Dégager d’une oeuvre d’art, par l’observation ou l’écoute, ses principales caractéristiques techniques et formelles.',
        parent: 'X52'
      },
      {
        id: 'X53',
        text: 'Se repérer',
        parent: 'X5'
      },
      {
        id: 'X531',
        text: ' Dans un musée, un lieu d’art, un site patrimonial.',
        parent: 'X53'
      },
      {
        id: 'X6',
        text: 'ÉDUCATION PHYSIQUE ET SPORTIVE',
        parent: 'X'
      },
      {
        id: 'X61',
        text: 'Développer sa motricité et construire un langage du corps',
        parent: 'X6'
      },
      {
        id: 'X611',
        text: ' Adapter sa motricité à des situations variées.',
        parent: 'X61'
      },
      {
        id: 'X612',
        text: ' Acquérir des techniques spécifiques pour améliorer son efficacité.',
        parent: 'X61'
      },
      {
        id: 'X613',
        text: ' Mobiliser différentes ressources (physiologique, biomécanique, psychologique, émotionnelle) pour agir de manière efficiente.',
        parent: 'X61'
      },
      {
        id: 'X62',
        text: 'S’approprier seul ou à plusieurs par la pratique, les méthodes et outils pour apprendre',
        parent: 'X6'
      },
      {
        id: 'X621',
        text: ' Apprendre par l’action, l’observation, l’analyse de son activité et de celle des autres.',
        parent: 'X62'
      },
      {
        id: 'X622',
        text: ' Répéter un geste pour le stabiliser et le rendre plus efficace.',
        parent: 'X62'
      },
      {
        id: 'X623',
        text: ' Utiliser des outils numériques pour observer, évaluer et modifier ses actions.',
        parent: 'X62'
      },
      {
        id: 'X63',
        text: 'Partager des règles, assumer des rôles et des responsabilités',
        parent: 'X6'
      },
      {
        id: 'X631',
        text: ' Assumer les rôles sociaux spécifiques aux différentes APSA et à la classe (joueur, coach, arbitre, juge, observateur, tuteur, médiateur, organisateur…).',
        parent: 'X63'
      },
      {
        id: 'X632',
        text: ' Comprendre, respecter et faire respecter règles et règlements.',
        parent: 'X63'
      },
      {
        id: 'X633',
        text: ' Assurer sa sécurité et celle d’autrui dans des situations variées.',
        parent: 'X63'
      },
      {
        id: 'X634',
        text: ' S’engager dans les activités sportives et artistiques collectives.',
        parent: 'X63'
      },
      {
        id: 'X64',
        text: 'Apprendre à entretenir sa santé par une activité physique régulière',
        parent: 'X6'
      },
      {
        id: 'X641',
        text: ' Évaluer la quantité et la qualité de son activité physique quotidienne dans et hors l’école.',
        parent: 'X64'
      },
      {
        id: 'X642',
        text: ' Connaitre et appliquer des principes d’une bonne hygiène de vie.',
        parent: 'X64'
      },
      {
        id: 'X643',
        text: ' Adapter l’intensité de son engagement physique à ses possibilités pour ne pas se mettre en danger.',
        parent: 'X64'
      },
      {
        id: 'X65',
        text: 'S’approprier une culture physique sportive et artistique',
        parent: 'X6'
      },
      {
        id: 'X651',
        text: ' Savoir situer des performances à l’échelle de la performance humaine.',
        parent: 'X65'
      },
      {
        id: 'X652',
        text: ' Comprendre et respecter l’environnement des pratiques physiques et sportives.',
        parent: 'X65'
      },
      {
        id: 'X7',
        text: 'HISTOIRE ET GEOGRAPHIE',
        parent: 'X'
      },
      {
        id: 'X71',
        text: 'Se repérer dans le temps : construire des repères historiques',
        parent: 'X7'
      },
      {
        id: 'X711',
        text: ' Situer chronologiquement des grandes périodes historiques.',
        parent: 'X71'
      },
      {
        id: 'X712',
        text: ' Ordonner des faits les uns par rapport aux autres et les situer dans une époque ou une période donnée.',
        parent: 'X71'
      },
      {
        id: 'X713',
        text: ' Manipuler et réinvestir le repère historique dans différents contextes.',
        parent: 'X71'
      },
      {
        id: 'X714',
        text: ' Utiliser des documents donnant à voir une représentation du temps (dont les frises chronologiques), à différentes échelles, et le lexique relatif au découpage du temps et suscitant la mise en perspective des faits.',
        parent: 'X71'
      },
      {
        id: 'X715',
        text: ' Mémoriser les repères historiques liés au programme et savoir les mobiliser dans différents contextes.',
        parent: 'X71'
      },
      {
        id: 'X72',
        text: 'Se repérer dans l’espace : construire des repères géographiques',
        parent: 'X7'
      },
      {
        id: 'X721',
        text: ' Nommer et localiser les grands repères géographiques.',
        parent: 'X72'
      },
      {
        id: 'X722',
        text: ' Nommer et localiser un lieu dans un espace géographique.',
        parent: 'X72'
      },
      {
        id: 'X723',
        text: ' Nommer, localiser et caractériser des espaces.',
        parent: 'X72'
      },
      {
        id: 'X724',
        text: ' Situer des lieux et des espaces les uns par rapport aux autres.',
        parent: 'X72'
      },
      {
        id: 'X725',
        text: ' Appréhender la notion d’échelle géographique.',
        parent: 'X72'
      },
      {
        id: 'X726',
        text: ' Mémoriser les repères géographiques liés au programme et savoir les mobiliser dans différents contextes.',
        parent: 'X72'
      },
      {
        id: 'X73',
        text: 'Raisonner, justifier une démarche et les choix effectués',
        parent: 'X7'
      },
      {
        id: 'X731',
        text: ' Poser des questions, se poser des questions.',
        parent: 'X73'
      },
      {
        id: 'X732',
        text: ' Formuler des hypothèses.',
        parent: 'X73'
      },
      {
        id: 'X733',
        text: ' Vérifier.',
        parent: 'X73'
      },
      {
        id: 'X734',
        text: ' Justifier.',
        parent: 'X73'
      },
      {
        id: 'X74',
        text: 'S’informer dans le monde du numérique',
        parent: 'X7'
      },
      {
        id: 'X741',
        text: ' Connaitre différents systèmes d’information, les utiliser.',
        parent: 'X74'
      },
      {
        id: 'X742',
        text: ' Trouver, sélectionner et exploiter des informations dans une ressource numérique.',
        parent: 'X74'
      },
      {
        id: 'X743',
        text: ' Identifier la ressource numérique utilisée.',
        parent: 'X74'
      },
      {
        id: 'X75',
        text: 'Comprendre un document',
        parent: 'X7'
      },
      {
        id: 'X751',
        text: ' Comprendre le sens général d’un document.',
        parent: 'X75'
      },
      {
        id: 'X752',
        text: ' Identifier le document et savoir pourquoi il doit être identifié.',
        parent: 'X75'
      },
      {
        id: 'X753',
        text: ' Extraire des informations pertinentes pour répondre à une question.',
        parent: 'X75'
      },
      {
        id: 'X754',
        text: ' Savoir que le document exprime un point de vue, identifier et questionner le sens implicite d’un document',
        parent: 'X75'
      },
      {
        id: 'X76',
        text: 'Pratiquer différents langages en histoire et en géographie',
        parent: 'X7'
      },
      {
        id: 'X761',
        text: ' Écrire pour structurer sa pensée et son savoir, pour argumenter et écrire pour communiquer et échanger.',
        parent: 'X76'
      },
      {
        id: 'X762',
        text: ' Reconnaitre un récit historique.',
        parent: 'X76'
      },
      {
        id: 'X763',
        text: ' S’exprimer à l’oral pour penser, communiquer et échanger.',
        parent: 'X76'
      },
      {
        id: 'X764',
        text: ' S’approprier et utiliser un lexique historique et géographique approprié',
        parent: 'X76'
      },
      {
        id: 'X765',
        text: ' Réaliser ou compléter des productions graphiques.',
        parent: 'X76'
      },
      {
        id: 'X766',
        text: ' Utiliser des cartes analogiques et numériques à différentes échelles, des photographies de paysages ou de lieux.',
        parent: 'X76'
      },
      {
        id: 'X77',
        text: 'Coopérer et mutualiser',
        parent: 'X7'
      },
      {
        id: 'X771',
        text: ' Organiser son travail dans le cadre d’un groupe pour élaborer une tâche commune et/ou une production collective et mettre à la disposition des autres ses compétences et ses connaissances',
        parent: 'X77'
      },
      {
        id: 'X772',
        text: ' Travailler en commun pour faciliter les apprentissages individuels.',
        parent: 'X77'
      },
      {
        id: 'X773',
        text: ' Apprendre à utiliser les outils numériques qui peuvent conduire à des réalisations collectives',
        parent: 'X77'
      },
      {
        id: 'X8',
        text: 'SCIENCE ET TECHNOLOGIE',
        parent: 'X'
      },
      {
        id: 'X81',
        text: 'Pratiquer des démarches scientifiques et technologiques',
        parent: 'X8'
      },
      {
        id: 'X811',
        text: ' formuler une question ou une problématique scientifique ou technologique simple ;',
        parent: 'X81'
      },
      {
        id: 'X812',
        text: ' proposer une ou des hypothèses pour répondre à une question ou un problème ;',
        parent: 'X81'
      },
      {
        id: 'X813',
        text: ' proposer des expériences simples pour tester une hypothèse ;',
        parent: 'X81'
      },
      {
        id: 'X814',
        text: ' interpréter un résultat, en tirer une conclusion ;',
        parent: 'X81'
      },
      {
        id: 'X815',
        text: ' formaliser une partie de sa recherche sous une forme écrite ou orale.',
        parent: 'X81'
      },
      {
        id: 'X82',
        text: 'Concevoir, créer, réaliser',
        parent: 'X8'
      },
      {
        id: 'X821',
        text: ' Identifier les évolutions des besoins et des objets techniques dans leur contexte.',
        parent: 'X82'
      },
      {
        id: 'X822',
        text: ' Identifier les principales familles de matériaux.',
        parent: 'X82'
      },
      {
        id: 'X823',
        text: ' Décrire le fonctionnement d’objets techniques, leurs fonctions et leurs composants.',
        parent: 'X82'
      },
      {
        id: 'X824',
        text: ' Réaliser en équipe tout ou une partie d’un objet technique répondant à un besoin.',
        parent: 'X82'
      },
      {
        id: 'X825',
        text: ' Repérer et comprendre la communication et la gestion de l’information.',
        parent: 'X82'
      },
      {
        id: 'X83',
        text: 'S’approprier des outils et des méthodes',
        parent: 'X8'
      },
      {
        id: 'X831',
        text: ' Choisir ou utiliser le matériel adapté pour mener une observation, effectuer une mesure, réaliser une expérience ou une production.',
        parent: 'X83'
      },
      {
        id: 'X832',
        text: ' Faire le lien entre la mesure réalisée, les unités et l’outil utilisés.',
        parent: 'X83'
      },
      {
        id: 'X833',
        text: ' Garder une trace écrite ou numérique des recherches, des observations et des expériences réalisées.',
        parent: 'X83'
      },
      {
        id: 'X834',
        text: ' Organiser seul ou en groupe un espace de réalisation expérimentale.',
        parent: 'X83'
      },
      {
        id: 'X835',
        text: ' Effectuer des recherches bibliographiques simples et ciblées. Extraire les informations pertinentes d’un document et les mettre en relation pour répondre à une question.',
        parent: 'X83'
      },
      {
        id: 'X836',
        text: ' Utiliser les outils mathématiques adaptés.',
        parent: 'X83'
      },
      {
        id: 'X84',
        text: 'Pratiquer des langages',
        parent: 'X8'
      },
      {
        id: 'X841',
        text: ' Rendre compte des observations, expériences, hypothèses, conclusions en utilisant un vocabulaire précis.',
        parent: 'X84'
      },
      {
        id: 'X842',
        text: ' Exploiter un document constitué de divers supports (texte, schéma, graphique, tableau, algorithme simple).',
        parent: 'X84'
      },
      {
        id: 'X843',
        text: ' Utiliser différents modes de représentation formalisés (schéma, dessin, croquis, tableau, graphique, texte).',
        parent: 'X84'
      },
      {
        id: 'X844',
        text: ' Expliquer un phénomène à l’oral et à l’écrit.',
        parent: 'X84'
      },
      {
        id: 'X85',
        text: 'Mobiliser des outils numériques',
        parent: 'X8'
      },
      {
        id: 'X851',
        text: ' Utiliser des outils numériques pour :',
        parent: 'X85'
      },
      {
        id: 'X8511',
        text: 'communiquer des résultats ;',
        parent: 'X851'
      },
      {
        id: 'X8512',
        text: 'traiter des données ;',
        parent: 'X851'
      },
      {
        id: 'X8513',
        text: 'simuler des phénomènes ;',
        parent: 'X851'
      },
      {
        id: 'X8514',
        text: 'représenter des objets techniques.',
        parent: 'X851'
      },
      {
        id: 'X852',
        text: ' Identifier des sources d’informations fiables.',
        parent: 'X85'
      },
      {
        id: 'X86',
        text: 'Adopter un comportement éthique et responsable',
        parent: 'X8'
      },
      {
        id: 'X861',
        text: ' Relier des connaissances acquises en sciences et technologie à des questions de santé, de sécurité et d’environnement.',
        parent: 'X86'
      },
      {
        id: 'X862',
        text: ' Mettre en oeuvre une action responsable et citoyenne, individuellement ou collectivement, en et hors milieu scolaire, et en témoigner.',
        parent: 'X86'
      },
      {
        id: 'X87',
        text: 'Se situer dans l’espace et dans le temps',
        parent: 'X8'
      },
      {
        id: 'X871',
        text: ' Replacer des évolutions scientifiques et technologiques dans un contexte historique, géographique, économique et culturel.',
        parent: 'X87'
      },
      {
        id: 'X872',
        text: ' Se situer dans l’environnement et maitriser les notions d’échelle.',
        parent: 'X87'
      },
      {
        id: 'X9',
        text: 'MATHEMATIQUES',
        parent: 'X'
      },
      {
        id: 'X91',
        text: 'Chercher',
        parent: 'X9'
      },
      {
        id: 'X911',
        text: ' Prélever et organiser les informations nécessaires à la résolution de problèmes à partir de supports variés : textes, tableaux, diagrammes, graphiques, dessins, schémas, etc.',
        parent: 'X91'
      },
      {
        id: 'X912',
        text: ' S’engager dans une démarche, observer, questionner, manipuler, expérimenter, émettre des hypothèses, en mobilisant des outils ou des procédures mathématiques déjà rencontrées, en élaborant un raisonnement adapté à une situation nouvelle.',
        parent: 'X91'
      },
      {
        id: 'X913',
        text: ' Tester, essayer plusieurs pistes de résolution.',
        parent: 'X91'
      },
      {
        id: 'X92',
        text: 'Modéliser',
        parent: 'X9'
      },
      {
        id: 'X921',
        text: ' Utiliser les mathématiques pour résoudre quelques problèmes issus de situations de la vie quotidienne.',
        parent: 'X92'
      },
      {
        id: 'X922',
        text: ' Reconnaitre et distinguer des problèmes relevant de situations additives, multiplicatives, de proportionnalité.',
        parent: 'X92'
      },
      {
        id: 'X923',
        text: ' Reconnaitre des situations réelles pouvant être modélisées par des relations géométriques (alignement, parallélisme, perpendicularité, symétrie).',
        parent: 'X92'
      },
      {
        id: 'X924',
        text: ' Utiliser des propriétés géométriques pour reconnaitre des objets.',
        parent: 'X92'
      },
      {
        id: 'X93',
        text: 'Représenter',
        parent: 'X9'
      },
      {
        id: 'X931',
        text: ' Utiliser des outils pour représenter un problème : dessins, schémas, diagrammes, graphiques, écritures avec parenthésages, …',
        parent: 'X93'
      },
      {
        id: 'X932',
        text: ' Produire et utiliser diverses représentations des fractions simples et des nombres décimaux.',
        parent: 'X93'
      },
      {
        id: 'X933',
        text: ' Analyser une figure plane sous différents aspects (surface, contour de celle-ci, lignes et points).',
        parent: 'X93'
      },
      {
        id: 'X934',
        text: ' Reconnaitre et utiliser des premiers éléments de codages d’une figure plane ou d’un solide.',
        parent: 'X93'
      },
      {
        id: 'X935',
        text: ' Utiliser et produire des représentations de solides et de situations spatiales.',
        parent: 'X93'
      },
      {
        id: 'X94',
        text: 'Raisonner',
        parent: 'X9'
      },
      {
        id: 'X940',
        text: ' Résoudre des problèmes nécessitant l’organisation de données multiples ou la construction d’une démarche qui combine des étapes de raisonnement.',
        parent: 'X94'
      },
      {
        id: 'X941',
        text: ' En géométrie, passer progressivement de la perception au contrôle par les instruments pour amorcer des raisonnements s’appuyant uniquement sur des propriétés des figures et sur des relations entre objets.',
        parent: 'X94'
      },
      {
        id: 'X942',
        text: ' Progresser collectivement dans une investigation en sachant prendre en compte le point de vue d’autrui.',
        parent: 'X94'
      },
      {
        id: 'X943',
        text: ' Justifier ses affirmations et rechercher la validité des informations dont on dispose.',
        parent: 'X94'
      },
      {
        id: 'X96',
        text: 'Calculer',
        parent: 'X9'
      },
      {
        id: 'X961',
        text: ' Calculer avec des nombres décimaux, de manière exacte ou approchée, en utilisant des stratégies ou des techniques appropriées (mentalement, en ligne, ou en posant les opérations).',
        parent: 'X96'
      },
      {
        id: 'X962',
        text: ' Contrôler la vraisemblance de ses résultats.',
        parent: 'X96'
      },
      {
        id: 'X963',
        text: ' Utiliser une calculatrice pour trouver ou vérifier un résultat.',
        parent: 'X96'
      },
      {
        id: 'X97',
        text: 'Communiquer',
        parent: 'X9'
      },
      {
        id: 'X971',
        text: ' Utiliser progressivement un vocabulaire adéquat et/ou des notations adaptées pour décrire une situation, exposer une argumentation.',
        parent: 'X97'
      },
      {
        id: 'X972',
        text: ' Expliquer sa démarche ou son raisonnement, comprendre les explications d’un autre et argumenter dans l’échange.',
        parent: 'X97'
      }
    ],
    notes: [
      {
        commentaire: 'commentaire 1',
        date: '2016-09-15T00:00:00.000Z',
        id: 'rqwkrpew',
        idEleve: 'evnr1v6a',
        idItem: 'j1_263',
        valeur: '1'
      },
      {
        commentaire: 'commentaire 2',
        date: '2016-09-16T00:00:00.000Z',
        id: '80vebly5',
        idEleve: 'rvns1q6a',
        idItem: 'j1_263',
        valeur: 'n',
        modalitesAide: 'aide proposée',
        constat: 'etat de fait'
      },
      {
        commentaire: 'commentaire seconde competence sur le domaine',
        date: '2016-09-17T00:00:00.000Z',
        id: '80vebla3',
        idEleve: 'rvns1q6a',
        idItem: 'j1_266',
        valeur: '2'
      },
      {
        commentaire: 'commentaireAA',
        date: '2016-09-22T00:00:00.000Z',
        id: '8xi2pi2f',
        idEleve: 'evnr1v6a',
        idItem: 'W111',
        valeur: '3'
      },
      {
        commentaire: 'commentaireAA',
        date: '2016-09-22T00:00:00.000Z',
        id: 'mlmqmsiz',
        idEleve: 'evnr1v6a',
        idItem: 'W113',
        valeur: '3'
      },
      {
        commentaire: 'commentaireAA',
        date: '2016-09-22T00:00:00.000Z',
        id: 'bhiek0vk',
        idEleve: 'evnr1v6a',
        idItem: 'W132',
        valeur: '3'
      },
      {
        commentaire: 'commentaireAA',
        date: '2016-09-22T00:00:00.000Z',
        id: 'sjg60c0c',
        idEleve: 'evnr1v6a',
        idItem: 'W143',
        valeur: '1'
      },
      {
        commentaire: 'commentaireBB',
        date: '2016-09-22T00:00:00.000Z',
        id: '2fej8g43',
        idEleve: 'evnr1v6a',
        idItem: 'W611',
        valeur: 'a'
      },
      {
        commentaire: 'commentaireBB',
        date: '2016-09-22T00:00:00.000Z',
        id: 'gs0sa58n',
        idEleve: 'evnr1v6a',
        idItem: 'W612',
        valeur: 'a'
      },
      {
        commentaire: 'commentaireBB',
        date: '2016-09-22T00:00:00.000Z',
        id: 'rfxtldvg',
        idEleve: 'evnr1v6a',
        idItem: 'W651',
        valeur: 'a'
      },
      {
        commentaire: 'commentaireBB',
        date: '2016-09-22T00:00:00.000Z',
        id: 'v1h5uw0o',
        idEleve: 'evnr1v6a',
        idItem: 'W421',
        valeur: 'a'
      },
      {
        commentaire: 'commentaireBB',
        date: '2016-09-22T00:00:00.000Z',
        id: 'av8ci1hn',
        idEleve: 'evnr1v6a',
        idItem: 'W422',
        valeur: 'n'
      },
      {
        commentaire: 'commentaireBB',
        date: '2016-09-22T00:00:00.000Z',
        id: 'is2ff4fm',
        idEleve: 'evnr1v6a',
        idItem: 'W211',
        valeur: 'n'
      },
      {
        commentaire: 'commentaireBB',
        date: '2016-09-22T00:00:00.000Z',
        id: 'q17zsevt',
        idEleve: 'evnr1v6a',
        idItem: 'W522',
        valeur: 'n'
      },
      {
        commentaire: 'derniere eval de l\'année',
        date: '2017-06-22T00:00:00.000Z',
        id: 'q17zsevt',
        idEleve: 'evnr1v6a',
        idItem: 'W522',
        valeur: '1'
      }
    ],
    dateDerniereSauvegarde: '2017-07-03T15:57:12.878Z',
    historique: [
      {
        date: '2016-09-15T19:30:37.231Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2016-09-15T19:30:45.829Z',
        modification: 'Ajout d\'une note à PRENOM2 NOM2'
      },
      {
        date: '2016-09-15T19:30:49.348Z',
        modification: 'Sauvegarde du fichier'
      },
      {
        date: '2016-09-15T20:25:13.582Z',
        modification: 'Sauvegarde du fichier'
      },
      {
        date: '2016-09-15T20:36:47.171Z',
        modification: 'Sauvegarde du fichier'
      },
      {
        date: '2016-10-06T19:42:16.680Z',
        modification: 'Cahier journal du 05/10/2016'
      },
      {
        date: '2016-10-06T19:43:04.428Z',
        modification: 'Cahier journal du 05/10/2016'
      },
      {
        date: '2016-10-06T19:43:08.279Z',
        modification: 'Sauvegarde du fichier'
      },
      {
        date: '2016-10-09T16:45:57.931Z',
        modification: 'Cahier journal du 07/10/2016'
      },
      {
        date: '2016-10-09T16:47:07.496Z',
        modification: 'Sauvegarde du fichier'
      },
      {
        date: '2017-07-03T15:56:17.656Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:56:21.405Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:56:24.250Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:56:29.962Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:56:41.333Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:56:43.059Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:56:46.145Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:56:52.256Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:56:57.919Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:57:03.245Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:57:09.510Z',
        modification: 'Ajout d\'une note à PRENOM1 NOM1'
      },
      {
        date: '2017-07-03T15:57:12.876Z',
        modification: 'Sauvegarde du fichier'
      }
    ],
    journal: [
      {
        date: '2016-10-05T22:00:00.000Z',
        remarque: 'cahier journal du 5 octobre 2016 : une belle journée studieuse',
        temps: [
          {
            debut: '9h00',
            fin: '9h15',
            nom: 'accueil',
            type: 'Apprentissage',
            commentaire: 'Temps d\'accueil : un élève en retard mais le temps a été calme',
            eleves: ['evnr1v6a', 'rvns1q6a', 'lkjsf2d3'],
            competences: [
              'j1_264'
            ]
          }
        ]
      },
      {
        date: '2016-09-30T22:00:00.000Z',
        remarque: 'Cahier journal du 1/10/16',
        temps: [
          {
            debut: '9h00',
            fin: '9h15',
            nom: 'T1',
            type: 'Apprentissage',
            commentaire: 'Comm T1',
            eleves: [
              'evnr1v6a',
              'rvns1q6a',
              'lkjsf2d3'
            ],
            competences: [
              'j1_263',
              'JF1221'
            ]
          },
          {
            debut: '9h15',
            fin: '9h30',
            nom: 'T2',
            type: 'Apprentissage',
            commentaire: 'Comm T2',
            eleves: [
              'evnr1v6a',
              'rvns1q6a'
            ],
            competences: [
              'j1_266',
              'JF1222'
            ]
          }
        ]
      }
    ],
    taches: [
      {
        titre: 'Nouvelle Tache',
        echeances: [
          {
            nom: 'Echéance 1',
            date: '2017-09-14T22:00:00.000Z'
          },
          {
            nom: 'Echéance 2',
            date: '2017-09-21T22:00:00.000Z'
          }
        ]
      }
    ],
    erreursChargement: [],
    logs: []
  };

  static getAnnee(jdd: any): Annee {
    return Object.assign(new Annee(), jdd);
  }
  static getJson(jdd: any): string {
    return JSON.stringify(jdd, null, 2);
  }
}

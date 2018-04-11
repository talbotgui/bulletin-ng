import { by } from 'protractor';

export class APP {
  static TITRE = by.css('#entete-titre span');
  static MENU_COMPETENCES = by.css('a.navCompetence');
  static MENU_ELEVES = by.css('a.navEleve');
  static MENU_PROJET = by.css('a.navProjet');
  static MENU_TDB = by.css('a.navTdb');
  static MENU_JOURNAL = by.css('a.navJournal');
  static MENU_TACHES = by.css('a.navTaches');
}
export class DivSauvegarder {
  static BUTTON_CHARGER = by.css('em.fa-folder-open');
  static BUTTON_SAUVEGARDER = by.css('em.fa-save');
}

export class DivSauvegarderDialogChargement {
  static INPUTFILE_LOCAL = by.css('input.inputFichierChargement');
  static INPUTFILE_LOCAL_LABEL_NOT_DONE = by.xpath('label[@class="inputFile inputFileDone"]');
  static INPUTFILE_LOCAL_LABEL_DONE = by.css('label.inputFile');
  static SELECT = by.css('mat-select.selectFichierChargement');
  static BUTTON_ANNULER = by.css('button.annuler');
  static BUTTON_CHARGER = by.css('button.charger');
}

export class TabCompetences {
  static INPUT_FILTRE = by.css('input.filtreCompetences');
  static TREE_ROOT = by.xpath('//tree-root');
  static TREE_NODES = by.css('span.toggle-children');
  static TREE_NODE_COLLAPSED = by.css('span.toggle-children-wrapper-collapsed');
  static TREE_NODE_EXPANDED = by.css('span.toggle-children-wrapper-expanded');
}

export class TabEleves {
  static BUTTON_AJOUT_ELEVE = by.css('tab-eleve .fa-plus');
  static BUTTON_EDITER = by.css('tab-eleve .fa-print');
  static CHIP_ELEVES = [
    by.xpath('(//tab-eleve/mat-chip-list/div/mat-chip)[1]'), by.xpath('(//tab-eleve/mat-chip-list/div/mat-chip)[2]'),
    by.xpath('(//tab-eleve/mat-chip-list/div/mat-chip)[3]'), by.xpath('(//tab-eleve/mat-chip-list/div/mat-chip)[4]'),
    by.xpath('(//tab-eleve/mat-chip-list/div/mat-chip)[5]')
  ];
}

export class TabProjet {
  static BUTTON_AJOUT_PROJET = by.css('tab-projet .ajoutProjet');
  static BUTTON_AJOUT_COMPETENCE = by.css('tab-projet .ajoutCompetence');
  static INPUT_NOM_PROJET = by.name('nom');
  static COMPETENCE_PREMIER_SELECT_VISIBLE = by.xpath('//compo-competence/div/div/div/select');
  static CHIP_PROJETS = [
    by.xpath('(//tab-projet/mat-chip-list/div/mat-chip)[1]'),
    by.xpath('(//tab-projet/mat-chip-list/div/mat-chip)[2]'),
    by.xpath('(//tab-projet/mat-chip-list/div/mat-chip)[3]')
  ];
}

export class TabTdb {
  static BUTTON_EDITER = by.css('.fa-print');

  static CHIP_ELEVES = [
    by.xpath('(//mat-chip-list[@class="filtres listeEleves mat-chip-list"]/div/mat-chip)[1]'),
    by.xpath('(//mat-chip-list[@class="filtres listeEleves mat-chip-list"]/div/mat-chip)[2]'),
    by.xpath('(//mat-chip-list[@class="filtres listeEleves mat-chip-list"]/div/mat-chip)[3]'),
    by.xpath('(//mat-chip-list[@class="filtres listeEleves mat-chip-list"]/div/mat-chip)[4]'),
    by.xpath('(//mat-chip-list[@class="filtres listeEleves mat-chip-list"]/div/mat-chip)[5]')
  ];
  static CHIP_PERIODES = [
    by.xpath('(//mat-chip-list[@class="filtres listePeriodes mat-chip-list"]/div/mat-chip)[1]'),
    by.xpath('(//mat-chip-list[@class="filtres listePeriodes mat-chip-list"]/div/mat-chip)[2]'),
    by.xpath('(//mat-chip-list[@class="filtres listePeriodes mat-chip-list"]/div/mat-chip)[3]'),
    by.xpath('(//mat-chip-list[@class="filtres listePeriodes mat-chip-list"]/div/mat-chip)[4]'),
    by.xpath('(//mat-chip-list[@class="filtres listePeriodes mat-chip-list"]/div/mat-chip)[5]')
  ];
}

export class TabJournal {
  static INPUT_DATE_JOURNAL = by.xpath('//input[@name="dateJournal"]');
  static LIBELLE_DATE_JOURNAL = by.css('span.dateDuJournal');
  static BUTTON_CREER_JOURNAL = by.css('span.clickable');
  static BUTTON_AJOUT_TEMPS = by.css('em.fa-clock-o');
  static BUTTON_PASSER_JOUR_PLUS_UN = by.css('em.fa.fa-forward');
  static BUTTON_EDITION = by.css('.fa-print');

  static BUTTON_DUPLIQUER_JOURNAL = by.css('em.fa.fa-copy.fa-2x');
  static INPUT_DIALOGDUPLICATION_DATECIBLE = by.xpath('//input[@name="dateCible"]');
  static BUTTON_DIALOGDUPLICATION_VALIDER = by.buttonText('Dupliquer');

  static TEMPS_LIBELLE = [by.xpath('(//input[@name="nomTemps"])[1]'), by.xpath('(//input[@name="nomTemps"])[2]'), by.xpath('(//input[@name="nomTemps"])[3]')];
  static TEMPS_DEBUT = [
    by.xpath('(//mat-select[@name="debutTemps"])[1]'),
    by.xpath('(//mat-select[@name="debutTemps"])[2]'),
    by.xpath('(//mat-select[@name="debutTemps"])[3]')
  ];
  static TEMPS_FIN = [
    by.xpath('(//mat-select[@name="finTemps"])[1]'),
    by.xpath('(//mat-select[@name="finTemps"])[2]'),
    by.xpath('(//mat-select[@name="finTemps"])[3]')
  ];
  static TEMPS_AJOUTER_COMPETENCE = [
    by.css('(//em[@class="fa fa-cogs fa-lg ng-star-inserted"])[1]'),
    by.css('(//em[@class="fa fa-cogs fa-lg ng-star-inserted"])[2]'),
    by.css('(//em[@class="fa fa-cogs fa-lg ng-star-inserted"])[3]')
  ];
  static TEMPS_MONTER = [
    by.xpath('(//em[@class="fa fa-chevron-circle-up fa-lg ng-star-inserted"])[1]'),
    by.xpath('(//em[@class="fa fa-chevron-circle-up fa-lg ng-star-inserted"])[2]'),
    by.xpath('(//em[@class="fa fa-chevron-circle-up fa-lg ng-star-inserted"])[3]')
  ];
  static TEMPS_DESCENDRE = [
    by.xpath('(//em[@class="fa fa-chevron-circle-down fa-lg ng-star-inserted"])[1]'),
    by.xpath('(//em[@class="fa fa-chevron-circle-down fa-lg ng-star-inserted"])[2]'),
    by.xpath('(//em[@class="fa fa-chevron-circle-down fa- ng-star-inserted"])[3]')
  ];
  static TEMPS_SUPPRIMER = [
    by.xpath('(//em[@class="fa fa-remove fa-lg ng-star-inserted"])[1]'),
    by.xpath('(//em[@class="fa fa-remove fa-lg ng-star-inserted"])[2]'),
    by.xpath('(//em[@class="fa fa-remove fa-lg ng-star-inserted"])[3]')
  ];
  static TEMPS_DUPLIQUER = [
    by.xpath('(//em[@class="fa fa-copy ng-star-inserted"])[1]'),
    by.xpath('(//em[@class="fa fa-copy ng-star-inserted"])[2]'),
    by.xpath('(//em[@class="fa fa-copy ng-star-inserted"])[3]')
  ];
  static TEMPS_ELEVES = [
    [
      by.xpath('((//mat-chip-list)[1]/div/mat-chip)[1]'),
      by.xpath('((//mat-chip-list)[1]/div/mat-chip)[2]'),
      by.xpath('((//mat-chip-list)[1]/div/mat-chip)[3]')
    ],
    [
      by.xpath('((//mat-chip-list)[2]/div/mat-chip)[1]'),
      by.xpath('((//mat-chip-list)[2]/div/mat-chip)[2]'),
      by.xpath('((//mat-chip-list)[2]/div/mat-chip)[3]')
    ]
  ];
  static TEMPS_COMPETENCE_PREMIER_SELECT_VISIBLE = by.xpath('//compo-competence/div/div/div/select');
  static TEMPS_COMPETENCE_LIBELLE_AFFICHE = [
    by.xpath('(//div[@class="compoCompetence"])[1]'),
    by.xpath('(//div[@class="compoCompetence"])[2]')
  ];
  static ELEVES_SELECTIONNES = by.css('mat-chip.mat-accent');
}

export class TabTaches {
  static BUTTON_AJOUTER = by.css('em.ajouterTache');

  static FORM_AJOUTER_TITRE = by.xpath('//input[@name="titre"]');
  static FORM_AJOUTER_PLUS = by.css('span.action');
  static FORM_AJOUTER_ECHEANCE1 = by.xpath('//input[@ng-reflect-name="aFaire-0"]');
  static FORM_AJOUTER_ECHEANCE1_DATE = by.xpath('//input[@ng-reflect-name="date-0"]');
  static FORM_AJOUTER_ECHEANCE2 = by.xpath('//input[@ng-reflect-name="aFaire-1"]');
  static FORM_AJOUTER_ECHEANCE2_DATE = by.xpath('//input[@ng-reflect-name="date-1"]');
  static FORM_AJOUTER_BUTTON_AJOUTER = by.xpath('(//mat-card-actions/button)[1]');

  static CARTES_ENCOURS = by.css('mat-card.encours');
  static CARTES_TERMINEES = by.css('mat-card.terminee');

  static CARTE1_TITRE = by.xpath('(//mat-card)[1]/mat-card-header/div/mat-card-title');
  static CARTE1_SUPPRIME = by.xpath('(//mat-card)[1]/mat-card-header/div/mat-card-title/em[@class="fa fa-remove"]');
  static CARTE1_SSTITRE_SPAN1 = by.xpath('((//mat-card)[1]/mat-card-header/div/mat-card-subtitle/span)[1]');
  static CARTE1_SSTITRE_SPAN2 = by.xpath('((//mat-card)[1]/mat-card-header/div/mat-card-subtitle/span)[2]');
  static CARTE1_ECHEANCE1 = by.xpath('((//mat-card)[1]/mat-card-content/div)[1]/span');
  static CARTE1_ECHEANCE1_CHECKBOXON = by.xpath('((//mat-card)[1]/mat-card-content/div)[1]/em[@class="fa fa-check-square-o"]');
  static CARTE1_ECHEANCE1_CHECKBOXOFF = by.xpath('((//mat-card)[1]/mat-card-content/div)[1]/em[@class="fa fa-square-o"]');
  static CARTE1_ECHEANCE2 = by.xpath('((//mat-card)[1]/mat-card-content/div)[2]/span');
  static CARTE1_ECHEANCE2_CHECKBOXON = by.xpath('((//mat-card)[1]/mat-card-content/div)[2]/em[@class="fa fa-check-square-o"]');
  static CARTE1_ECHEANCE2_CHECKBOXOFF = by.xpath('((//mat-card)[1]/mat-card-content/div)[2]/em[@class="fa fa-square-o"]');

  static CARTE2_TITRE = by.xpath('(//mat-card)[2]/mat-card-header/div/mat-card-title');
  static CARTE2_ECHEANCE1_CHECKBOXON = by.xpath('((//mat-card)[2]/mat-card-content/div)[1]/em[@class="fa fa-check-square-o"]');
  static CARTE2_ECHEANCE1_CHECKBOXOFF = by.xpath('((//mat-card)[2]/mat-card-content/div)[1]/em[@class="fa fa-square-o"]');
  static CARTE2_ECHEANCE2_CHECKBOXON = by.xpath('((//mat-card)[2]/mat-card-content/div)[2]/em[@class="fa fa-check-square-o"]');
  static CARTE2_ECHEANCE2_CHECKBOXOFF = by.xpath('((//mat-card)[2]/mat-card-content/div)[2]/em[@class="fa fa-square-o"]');
  static CARTE3_TITRE = by.xpath('(//mat-card)[3]/mat-card-header/div/mat-card-title');
  static CARTE3_ECHEANCE1_CHECKBOXON = by.xpath('((//mat-card)[3]/mat-card-content/div)[1]/em[@class="fa fa-check-square-o"]');
  static CARTE3_ECHEANCE1_CHECKBOXOFF = by.xpath('((//mat-card)[3]/mat-card-content/div)[1]/em[@class="fa fa-square-o"]');
  static CARTE3_ECHEANCE2_CHECKBOXON = by.xpath('((//mat-card)[3]/mat-card-content/div)[2]/em[@class="fa fa-check-square-o"]');
  static CARTE3_ECHEANCE2_CHECKBOXOFF = by.xpath('((//mat-card)[3]/mat-card-content/div)[2]/em[@class="fa fa-square-o"]');
}

export class EditionJournal {
  static BUTTON_RETOUR = by.css('.fa-arrow-left');
}

export class EditionPpi {
  static BUTTON_RETOUR = by.css('.fa-arrow-left');
}

export class EditionEleves {
  static BUTTON_RETOUR = by.css('.fa-arrow-left');

  static TITRE = by.css('div.titre');
  static IDENTITE = by.css('.editionEleve-identite');
  static DATES = by.css('.editionEleve-dates');
  static CONTACTS = by.css('.editionEleve-contacts');
  static PERE = by.css('.editionEleve-pere');
  static MERE = by.css('.editionEleve-mere');
  static FRATRIE = by.css('.editionEleve-fratrie');
  static ACCUEIL = by.css('.editionEleve-accueil');
  static DATES_PPA = by.css('.editionEleve-datesPPA');
  static DATES_PAP = by.css('.editionEleve-datesPAP');
  static DATES_ESS = by.css('.editionEleve-datesESS');
  static DROIT = by.css('.editionEleve-droit');
  static AUTORISATION = by.css('.editionEleve-autorisation');
  static CURSUS = [
    by.xpath('//div[@class="editionEleve-cursus"]/table/tbody[1]/tr[1]/td[1]'),
    by.xpath('//div[@class="editionEleve-cursus"]/table/tbody[2]/tr[1]/td[1]'),
    by.xpath('//div[@class="editionEleve-cursus"]/table/tbody[3]/tr[1]/td[1]'),
    by.xpath('//div[@class="editionEleve-cursus"]/table/tbody[4]/tr[1]/td[1]')
  ];
}

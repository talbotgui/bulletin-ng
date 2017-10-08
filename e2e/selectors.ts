import { by } from 'protractor';

export class APP {
  static TITLE = by.css('app-root h1');
  static MENU_COMPETENCES = by.css('a.navCompetence');
  static MENU_ELEVES = by.css('a.navEleve');
  static MENU_TDB = by.css('a.navTdb');
  static MENU_JOURNAL = by.css('a.navJournal');
  static MENU_TACHES = by.css('a.navTaches');
}
export class DivSauvegarder {
  static BUTTON_CHARGER = by.xpath('//div-sauvegarde/em[@class="fa fa-folder-open fa-2x"]');
  static BUTTON_SAUVEGARDER = by.xpath('//div-sauvegarde/em[@class="fa fa-save fa-2x"]');
}

export class DivSauvegarderDialogChargement {
  static TITRE = by.xpath('//dialog-chargement/h2');
  static INPUTFILE_LOCAL = by.xpath('//dialog-chargement/md-dialog-content/fieldset/label/input[@type="file"]');
  static INPUTFILE_LOCAL_LABEL_NOT_DONE = by.xpath('//dialog-chargement/md-dialog-content/fieldset/label[@class="inputFile"]');
  static INPUTFILE_LOCAL_LABEL_DONE = by.xpath('//dialog-chargement/md-dialog-content/fieldset/label[@class="inputFile inputFileDone"]');
  static SELECT = by.xpath('//dialog-chargement/md-dialog-content/fieldset[2]/div/md-select');
  static BUTTON_ANNULER = by.xpath('//dialog-chargement/md-dialog-actions/button[1]');
  static BUTTON_CHARGER = by.xpath('//dialog-chargement/md-dialog-actions/button[2]');
}

export class TabCompetences {
  static INPUT_FILTRE = by.xpath('//tab-competence/fieldset/input');
  static TREE_ROOT = by.xpath('//tree-root');
  static TREE_NODES = by.css('span.toggle-children');
  static TREE_NODE_COLLAPSED = by.css('span.toggle-children-wrapper-collapsed');
  static TREE_NODE_EXPANDED = by.css('span.toggle-children-wrapper-expanded');
}

export class TabEleves {
  static BUTTON_AJOUT_ELEVE = by.css('tab-eleve .fa-plus');
  static CHIP_ELEVES = [
    by.xpath('(//tab-eleve/md-chip-list/div/md-chip)[1]'), by.xpath('(//tab-eleve/md-chip-list/div/md-chip)[2]'),
    by.xpath('(//tab-eleve/md-chip-list/div/md-chip)[3]'), by.xpath('(//tab-eleve/md-chip-list/div/md-chip)[4]'),
    by.xpath('(//tab-eleve/md-chip-list/div/md-chip)[5]')
  ];
}

export class TabJournal {
  static INPUT_DATE_JOURNAL = by.xpath('//input[@name="dateJournal"]');
  static LIBELLE_DATE_JOURNAL = by.css('span.dateDuJournal');
  static BUTTON_CREER_JOURNAL = by.css('span.clickable');
  static BUTTON_AJOUT_TEMPS = by.css('em.fa-clock-o');

  static TEMPS_LIBELLE = [by.xpath('(//input[@name="nomTemps"])[1]'), by.xpath('(//input[@name="nomTemps"])[2]'), by.xpath('(//input[@name="nomTemps"])[3]')];
  static TEMPS_DEBUT = [
    by.xpath('(//md-select[@name="debutTemps"])[1]'),
    by.xpath('(//md-select[@name="debutTemps"])[2]'),
    by.xpath('(//md-select[@name="debutTemps"])[3]')
  ];
  static TEMPS_FIN = [
    by.xpath('(//md-select[@name="finTemps"])[1]'),
    by.xpath('(//md-select[@name="finTemps"])[2]'),
    by.xpath('(//md-select[@name="finTemps"])[3]')
  ];
  static TEMPS_AJOUTER_COMPETENCE = [
    by.xpath('(//em[@class="fa fa-cogs fa-lg"])[1]'),
    by.xpath('(//em[@class="fa fa-cogs fa-lg"])[2]'),
    by.xpath('(//em[@class="fa fa-cogs fa-lg"])[3]')
  ];
  static TEMPS_MONTER = [
    by.xpath('(//em[@class="fa fa-chevron-circle-up fa-lg"])[1]'),
    by.xpath('(//em[@class="fa fa-chevron-circle-up fa-lg"])[2]'),
    by.xpath('(//em[@class="fa fa-chevron-circle-up fa-lg"])[3]')
  ];
  static TEMPS_DESCENDRE = [
    by.xpath('(//em[@class="fa fa-chevron-circle-down fa-lg"])[1]'),
    by.xpath('(//em[@class="fa fa-chevron-circle-down fa-lg"])[2]'),
    by.xpath('(//em[@class="fa fa-chevron-circle-down fa-lg"])[3]')
  ];
  static TEMPS_SUPPRIMER = [
    by.xpath('(//em[@class="fa fa-remove fa-lg"])[1]'),
    by.xpath('(//em[@class="fa fa-remove fa-lg"])[2]'),
    by.xpath('(//em[@class="fa fa-remove fa-lg"])[3]')
  ];
  static TEMPS_DUPLIQUER = [
    by.xpath('(//em[@class="fa fa-copy"])[1]'),
    by.xpath('(//em[@class="fa fa-copy"])[2]'),
    by.xpath('(//em[@class="fa fa-copy"])[3]')
  ];
  static TEMPS_ELEVES = [
    [
      by.xpath('((//md-chip-list)[1]/div/md-chip)[1]'),
      by.xpath('((//md-chip-list)[1]/div/md-chip)[2]'),
      by.xpath('((//md-chip-list)[1]/div/md-chip)[3]')
    ],
    [
      by.xpath('((//md-chip-list)[2]/div/md-chip)[1]'),
      by.xpath('((//md-chip-list)[2]/div/md-chip)[2]'),
      by.xpath('((//md-chip-list)[2]/div/md-chip)[3]')
    ]
  ];
  static TEMPS_COMPETENCE_PREMIER_SELECT_VISIBLE = by.xpath('//compo-competence/div/div/div/select');
  static TEMPS_COMPETENCE_LIBELLE_AFFICHE = [
    by.xpath('(//div[@class="compoCompetence"])[1]'),
    by.xpath('(//div[@class="compoCompetence"])[2]')
  ];
  static ELEVES_SELECTIONNES = by.css('md-chip.mat-accent');
}

export class TabTaches {
  static BUTTON_AJOUTER = by.css('span.fa-stack');

  static FORM_AJOUTER_TITRE = by.xpath('//input[@name="titre"]');
  static FORM_AJOUTER_PLUS = by.css('span.action');
  static FORM_AJOUTER_ECHEANCE1 = by.xpath('//input[@ng-reflect-name="aFaire-0"]');
  static FORM_AJOUTER_ECHEANCE1_DATE = by.xpath('//input[@ng-reflect-name="date-0"]');
  static FORM_AJOUTER_ECHEANCE2 = by.xpath('//input[@ng-reflect-name="aFaire-1"]');
  static FORM_AJOUTER_ECHEANCE2_DATE = by.xpath('//input[@ng-reflect-name="date-1"]');
  static FORM_AJOUTER_BUTTON_AJOUTER = by.xpath('(//md-card-actions/button)[1]');

  static CARTES_ENCOURS = by.css('md-card.encours');
  static CARTES_TERMINEES = by.css('md-card.terminee');

  static CARTE1_TITRE = by.xpath('(//md-card)[1]/md-card-header/div/md-card-title');
  static CARTE1_SUPPRIME = by.xpath('(//md-card)[1]/md-card-header/div/md-card-title/em[@class="fa fa-remove"]');
  static CARTE1_SSTITRE_SPAN1 = by.xpath('((//md-card)[1]/md-card-header/div/md-card-subtitle/span)[1]');
  static CARTE1_SSTITRE_SPAN2 = by.xpath('((//md-card)[1]/md-card-header/div/md-card-subtitle/span)[2]');
  static CARTE1_ECHEANCE1 = by.xpath('((//md-card)[1]/md-card-content/div)[1]/span');
  static CARTE1_ECHEANCE1_CHECKBOXON = by.xpath('((//md-card)[1]/md-card-content/div)[1]/em[@class="fa fa-check-square-o"]');
  static CARTE1_ECHEANCE1_CHECKBOXOFF = by.xpath('((//md-card)[1]/md-card-content/div)[1]/em[@class="fa fa-square-o"]');
  static CARTE1_ECHEANCE2 = by.xpath('((//md-card)[1]/md-card-content/div)[2]/span');
  static CARTE1_ECHEANCE2_CHECKBOXON = by.xpath('((//md-card)[1]/md-card-content/div)[2]/em[@class="fa fa-check-square-o"]');
  static CARTE1_ECHEANCE2_CHECKBOXOFF = by.xpath('((//md-card)[1]/md-card-content/div)[2]/em[@class="fa fa-square-o"]');

  static CARTE2_TITRE = by.xpath('(//md-card)[2]/md-card-header/div/md-card-title');
  static CARTE2_ECHEANCE1_CHECKBOXON = by.xpath('((//md-card)[2]/md-card-content/div)[1]/em[@class="fa fa-check-square-o"]');
  static CARTE2_ECHEANCE1_CHECKBOXOFF = by.xpath('((//md-card)[2]/md-card-content/div)[1]/em[@class="fa fa-square-o"]');
  static CARTE2_ECHEANCE2_CHECKBOXON = by.xpath('((//md-card)[2]/md-card-content/div)[2]/em[@class="fa fa-check-square-o"]');
  static CARTE2_ECHEANCE2_CHECKBOXOFF = by.xpath('((//md-card)[2]/md-card-content/div)[2]/em[@class="fa fa-square-o"]');
  static CARTE3_TITRE = by.xpath('(//md-card)[3]/md-card-header/div/md-card-title');
  static CARTE3_ECHEANCE1_CHECKBOXON = by.xpath('((//md-card)[3]/md-card-content/div)[1]/em[@class="fa fa-check-square-o"]');
  static CARTE3_ECHEANCE1_CHECKBOXOFF = by.xpath('((//md-card)[3]/md-card-content/div)[1]/em[@class="fa fa-square-o"]');
  static CARTE3_ECHEANCE2_CHECKBOXON = by.xpath('((//md-card)[3]/md-card-content/div)[2]/em[@class="fa fa-check-square-o"]');
  static CARTE3_ECHEANCE2_CHECKBOXOFF = by.xpath('((//md-card)[3]/md-card-content/div)[2]/em[@class="fa fa-square-o"]');
}

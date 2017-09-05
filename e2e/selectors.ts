import { by } from 'protractor';

export class APP {
  static TITLE = by.css('app-root h1');
  static MENU_COMPETENCES = by.css('a.navCompetence');
  static MENU_ELEVES = by.css('a.navEeve');
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
  static INPUTFILE_LOCAL = by.xpath('//dialog-chargement/md-dialog-content/label/input[@type="file"]');
  static INPUTFILE_LOCAL_LABEL_NOT_DONE = by.xpath('//dialog-chargement/md-dialog-content/label[@class="inputFile"]');
  static INPUTFILE_LOCAL_LABEL_DONE = by.xpath('//dialog-chargement/md-dialog-content/label[@class="inputFile inputFileDone"]');
  static SELECT = by.xpath('//dialog-chargement/md-dialog-content/md-select');
  static BUTTON_ANNULER = by.xpath('//dialog-chargement/md-dialog-actions/button[1]');
  static BUTTON_CHARGER = by.xpath('//dialog-chargement/md-dialog-actions/button[2]');
}

export class TabCompetences {
  static INPUT_FILTRE = by.xpath('//tab-competence/input');
  static TREE_ROOT = by.xpath('//tree-root');
  static TREE_NODES = by.css('span.toggle-children');
  static TREE_NODE_COLLAPSED = by.css('span.toggle-children-wrapper-collapsed');
  static TREE_NODE_EXPANDED = by.css('span.toggle-children-wrapper-expanded');
}

export class TabTaches {
  static BUTTON_AJOUTER = by.css('span.fa-stack');

  static FORM_AJOUTER_TITRE = by.xpath('//input[@name="titre"]');
  static FORM_AJOUTER_PLUS = by.css('span.action');
  static FORM_AJOUTER_ECHEANCE1 = by.xpath('(//input[@name="aFaire"])[1]');
  static FORM_AJOUTER_ECHEANCE1_DATE = by.xpath('(//input[@name="date"])[1]');
  static FORM_AJOUTER_ECHEANCE2 = by.xpath('(//input[@name="aFaire"])[2]');
  static FORM_AJOUTER_ECHEANCE2_DATE = by.xpath('(//input[@name="date"])[2]');
  static FORM_AJOUTER_BUTTON_AJOUTER = by.xpath('(//md-card-actions/button)[1]');

  static CARTES_ENCOURS = by.css('md-card.encours');
}
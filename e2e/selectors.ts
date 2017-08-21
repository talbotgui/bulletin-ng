import { by } from 'protractor';

export class APP {
  static TITLE = by.css('app-root h1');
}
export class DivSauvegarder {
  static BUTTON_CHARGER = by.xpath('//div-sauvegarde/button[text()="Charger"]');
  static BUTTON_SAUVEGARDER = by.xpath('//div-sauvegarde/button[text()="Sauvegarder"]');
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

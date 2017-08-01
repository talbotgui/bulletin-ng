import { by } from 'protractor';

export class APP {
  static TITLE = by.css('app-root h1');
}
export class DivSauvegarder {
  static BUTTON = by.xpath('//div-sauvegarde/button');
  static DIALOG_CHARGEMENT_TITRE = by.xpath('//dialog-chargement/h2');
  static DIALOG_CHARGEMENT_SELECT = by.xpath('//dialog-chargement/md-dialog-content/md-select');
  static DIALOG_CHARGEMENT_SELECT_VALEUR1 = by.xpath('//md-option[@ng-reflect-value="2017-07-04-23h37m20s.json"]');
  static DIALOG_CHARGEMENT_BUTTON_ANNULER = by.xpath('//dialog-chargement/md-dialog-actions/button[1]');
  static DIALOG_CHARGEMENT_BUTTON_CHARGER = by.xpath('//dialog-chargement/md-dialog-actions/button[2]');
}

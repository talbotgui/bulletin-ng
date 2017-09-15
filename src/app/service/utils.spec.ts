import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { Utils } from '../service/utils';

describe('Utils', () => {

  it('formatDate sans date', () => {
    //
    //
    const resultat = Utils.formatDate(undefined, false);
    //
    expect(resultat).toBe('');
  });

  it('formatDate au format court', () => {
    // Dimanche 10 septembre 2017 à 01h33m20s
    const date = new Date(1505000000000);
    //
    const resultat = Utils.formatDate(date, false);
    //
    expect(resultat).toBe('10/09/2017');
  });

  it('formatDate au format long', () => {
    // Dimanche 10 septembre 2017 à 01h33m20s
    const date = new Date(1505000000000);
    //
    const resultat = Utils.formatDate(date, true);
    //
    expect(resultat).toBe('dimanche 10/09/2017');
  });

  it('formatNumber < 10', () => {
    const resultat = Utils.formatNumber(9);
    expect(resultat).toBe('09');
  });

  it('formatNumber > 10', () => {
    const resultat = Utils.formatNumber(19);
    expect(resultat).toBe('19');
  });

  it('nettoieString chaine vide', () => {
    const resultat = Utils.nettoieString('');
    expect(resultat).toBe('');
  });

  it('nettoieString chaine avec CR', () => {
    const resultat = Utils.nettoieString('aze\nqsd\n\wxc <br/> <a href="#">iop</a>');
    expect(resultat).toBe('aze<br/>qsd<br/>\wxc <br/> <a href="#">iop</a>');
  });
});

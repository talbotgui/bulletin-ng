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
});

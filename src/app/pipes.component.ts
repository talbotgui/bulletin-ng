import {Pipe, PipeTransform} from '@angular/core';

/** @see https://webcake.co/looping-over-maps-and-sets-in-angular-2s-ngfor/ */
@Pipe({name: 'mapValues'})
export class MapValuesPipe implements PipeTransform {

  transform(value: any, args?: any[]): {key: string, val: string}[] {
    let returnArray = [];

    value.forEach((entryVal, entryKey) => {
      returnArray.push({
        key: entryKey,
        val: entryVal
      });
    });

    return returnArray;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import {IMeterShort} from "./meter-short";

@Pipe({
  name: 'sortMeters',
  standalone: true
})
export class SortMetersPipe implements PipeTransform {

  transform(meters: IMeterShort[], by: 'address'): IMeterShort[] {
    if (by === 'address') {
      return meters.sort((a, b) => a.address.localeCompare(b.address))
    }
    return meters
  }

}

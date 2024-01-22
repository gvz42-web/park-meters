import { Pipe, PipeTransform } from '@angular/core';
import {IMeter} from "./meter";

@Pipe({
  name: 'sortMeters',
  standalone: true
})
export class SortMetersPipe implements PipeTransform {

  transform(meters: IMeter[], by: 'address'): IMeter[] {
    if (by === 'address') {
      return meters.sort((a, b) => a.address.localeCompare(b.address))
    }
    return meters
  }

}

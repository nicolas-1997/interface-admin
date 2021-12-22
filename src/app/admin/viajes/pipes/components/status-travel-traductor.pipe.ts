import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTravelTraductor'
})
export class StatusTravelTraductorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

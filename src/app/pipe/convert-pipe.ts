import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {

  transform(amount: number, rate: number): number {
    console.log('ConvertPipe called with amount:', amount, 'and rate:', rate);
    return amount*rate;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatStrings'
})
export class ConcatStringsPipe implements PipeTransform {

  transform(value: string, firstString: string, secondString: string): string {
    return value = firstString.concat(' ').concat(secondString);
  }
}

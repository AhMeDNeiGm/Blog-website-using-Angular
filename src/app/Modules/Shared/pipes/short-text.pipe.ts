import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
  standalone: true
})
export class ShortTextPipe implements PipeTransform {

  transform(text: string, wordsNumer: number): string {

    return text.split(' ').slice(0, wordsNumer).join(' ');

  }

}

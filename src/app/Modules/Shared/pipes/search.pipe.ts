import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], searchTerm: string): User[] {

    return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  }

}

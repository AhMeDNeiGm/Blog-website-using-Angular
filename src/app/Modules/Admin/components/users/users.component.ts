import { User } from './../../../Shared/interfaces/user';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../../../Shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ShortTextPipe } from '../../../Shared/pipes/short-text.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterModule,
    UserProfileComponent,
    CommonModule,
    SearchPipe,
    FormsModule,
    ShortTextPipe
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, OnDestroy {

  searchTerm: string;
  users!: User[];
  private _observableUsers!: Observable<any>;
  constructor(private _UserService: UserService) {
    this.searchTerm = '';
  }

  ngOnInit(): void {
    // * get users list from user service
    this._UserService.getUsers()
      .subscribe(data => this.users = data.users)
  }
  ngOnDestroy(): void {
    // this._observableUsers.subscribe();
  }







}

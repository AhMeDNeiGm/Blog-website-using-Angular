import { User } from './../../../Shared/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GoToService } from '../../../Shared/services/go-to.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  // * Variables
  user!: User;

  private _userId!: number;
  imagePrefix: String = '';

  constructor(
    private _UserService: UserService,
    private _myActivatedRoute: ActivatedRoute,
    public _GoToService: GoToService
  ) {
    this._userId = this._myActivatedRoute.snapshot.params['id'];

  }

  ngOnInit(): void {

    console.log("init");
    this._userId = this._myActivatedRoute.snapshot.params['id'];

    this._UserService.getUserById(this._userId)
      .subscribe(
        user => {
          this.user = user;

          console.log("constructor profile", this.user);
        }
      )


  }
}

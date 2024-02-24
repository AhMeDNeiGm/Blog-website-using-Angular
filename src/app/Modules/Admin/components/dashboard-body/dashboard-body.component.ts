import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUsers,
  faNewspaper,
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';
import { GoToService } from '../../../Shared/services/go-to.service';

@Component({
  selector: 'app-dashboard-body',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  providers: [ServicesService],
  templateUrl: './dashboard-body.component.html',
  styleUrl: './dashboard-body.component.css',
})
export class DashboardBodyComponent implements OnInit {
  faUsers = faUsers;
  AngleDoubleIconUser = faAngleDoubleDown;
  AngleDoubleIconPost = faAngleDoubleDown;
  faNewspaper = faNewspaper;

  posts: any = [];
  users: any = [];

  constructor(
    private service: UserService,
    public _GoToService: GoToService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getPosts();
  }

  getUsers() {
    this.service.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getPosts() {
    this.service.getAllPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getUsersCount() {
    return this.users.length;
  }

  getPostsCount() {
    return this.posts.length;
  }

  changingOrderUser() {
    if (this.AngleDoubleIconUser === faAngleDoubleDown) {
      this.AngleDoubleIconUser = faAngleDoubleUp;
      this.users.sort(function (a: any, b: any) {
        let nameA = a.firstname.toUpperCase();
        let nameB = b.firstname.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    } else {
      this.AngleDoubleIconUser = faAngleDoubleDown;
      this.users.sort(function (a: any, b: any) {
        let nameA = a.firstname.toUpperCase();
        let nameB = b.firstname.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }

        // names must be equal
        return 0;
      });
    }
  }

  changingOrderPost() {
    if (this.AngleDoubleIconPost === faAngleDoubleDown) {
      this.AngleDoubleIconPost = faAngleDoubleUp;
      this.posts.sort(function (a: any, b: any) {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }

        // titles must be equal
        return 0;
      });
    } else {
      this.AngleDoubleIconPost = faAngleDoubleDown;
      this.posts.sort(function (a: any, b: any) {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return 1;
        }
        if (titleA > titleB) {
          return -1;
        }

        // titles must be equal
        return 0;
      });
    }
  }
}

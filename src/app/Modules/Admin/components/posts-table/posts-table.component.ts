import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagModule } from 'primeng/tag';
import {
  faEllipsisV,
  faMagnifyingGlass,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { FilterPipe } from './../../../Shared/pipes/filter.pipe';
import {
  MessageService,
  ConfirmationService,
  ConfirmEventType,
} from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgxPaginationModule } from 'ngx-pagination';

import { ServicesService } from '../../services/services.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-posts-table',
  standalone: true,
  imports: [
    TagModule,
    FontAwesomeModule,
    PaginatorModule,
    FilterPipe,
    ToastModule,
    ConfirmDialogModule,
    NgxPaginationModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  providers: [MessageService, ConfirmationService, ServicesService],
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.css',
})
export class PostsTableComponent {
  searchAny: any;

  p: number = 1;
  itemsPerPage: number = 10;
  totalProducts: any;

  faEllipsisV = faEllipsisV;
  faMagnifyingGlass = faMagnifyingGlass;
  faFilter = faFilter;

  filteredPosts: any[] = [];
  posts: any = [];
  users: any = [];
  categories: any = [];

  selectedCategoryId: any;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private service: ServicesService
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getCategories();
    this.getUsers();
  }

  getPosts() {
    this.service.getAllPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.filteredPosts = this.posts;
      },
      error: (error) => {
        console.log(error);
      },
    });
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

  getUserName(userId: number) {
    if (userId) {
      const user = this.users.find((u: any) => +u.id == userId);
      return user.name;
    }
  }
  getUserDetail(userId: number) {
    if (userId) {
      const user = this.users.find((u: any) => +u.id == userId);
      return user.detail;
    }
  }

  getCategories() {
    this.service.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getSeverity(category: string) {
    switch (category) {
      default:
        return 'success';
    }
  }

  deletePost(postId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this post?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.service.distroyPost(postId).subscribe((res: any) => {
          this.getPosts();
        });

        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }

  onSelectCategory(event: any) {
    const categoryName = event.target.value;
    console.log(categoryName);
    if (categoryName) {
      this.filteredPosts = this.posts.filter((post: any) => {
        console.log(post.category);
        return post.category === categoryName;
      });
    } else {
      this.filteredPosts = this.posts;
    }
  }
}

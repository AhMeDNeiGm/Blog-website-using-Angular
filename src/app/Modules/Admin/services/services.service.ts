import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private myClint: HttpClient) {}
  private DB_URL = 'http://localhost:3000';

  getAllUsers() {
    return this.myClint.get(`${this.DB_URL}/users`);
    //  /user/getall
  }

  distroyUser(id: number) {
    return this.myClint.delete(`${this.DB_URL}/users/${id}`);
    //  /user/id
  }

  getAllPosts() {
    return this.myClint.get(`${this.DB_URL}/posts`);
    // /story
  }

  distroyPost(id: number) {
    return this.myClint.delete(`${this.DB_URL}/posts/${id}`);
    // /story/id
  }

  // getOneUsers(id: Number) {
  //   return this.myClint.get(`${this.DB_URL}/posts/${id}`);
  // }

  // deleteUser() {
  //   return this.myClint.delete('/users/delete');
  // }

  getCategories() {
    return this.myClint.get(`${this.DB_URL}/categories`);
  }

  getPostsCategory(categoryId: Number) {
    return this.myClint.get(`${this.DB_URL}/categoryID=${categoryId}`);
  }
}

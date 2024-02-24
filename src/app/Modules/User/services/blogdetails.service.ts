import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogdetailsService {
  private readonly _url = 'https://devjourney-restfulapi.onrender.com/story';

  constructor(private _HttpClient:HttpClient) { }

  getBlogById(id:string)
  {
    return this._HttpClient.get(`${this._url}/${id}`)
  }


}

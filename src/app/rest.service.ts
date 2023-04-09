import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from './Cards';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  cardUrl : string = "http://localhost:3000/cards";

  getCards()
  {
    return this.http.get<Cards[]>(this.cardUrl);
  }

}

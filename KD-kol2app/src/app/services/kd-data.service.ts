import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Items} from "../module";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService {

  private url = 'https://kol2tai.herokuapp.com';

  constructor(
    private httpClient: HttpClient,

  ) { }

  getItems(): Observable<Items> {
    return this.httpClient.get<Items>(`https://kol2tai.herokuapp.com/api/order/items`);
  }

  getItem(id: number): Observable<Items> {
    return this.httpClient.get<Items>(`https://kol2tai.herokuapp.com/api/order/items/${id}`);
  }
 /* getAll() {
  return this.http.get(this.url);
  }*/
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {

  constructor(private http: HttpClient) {}

  get(){
    return this.http.get("https://random-data-api.com/api/coffee/random_coffee",{
      params:{
        size:50
      }
    })
  }
}

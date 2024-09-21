import { inject, Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  router = inject(Router);
  httpClient = inject(HttpClient);
  private baseUrl = environment.apiUrl; //'https://api.yourshop.com';  // API URL

  constructor() { }

  getProducts(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/shop-api/product`);
  }

  getProductDetails(id: string) {
    return this.httpClient.get(`${this.baseUrl}/shop-api/product/@{id}`);
  }


  getCategories() {
    return this.httpClient.get(`${this.baseUrl}/shop-api/category`);
  }

}

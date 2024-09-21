import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  constructor() { }

  getCSRFToken(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/sanctum/csrf-cookie`);

  }
}

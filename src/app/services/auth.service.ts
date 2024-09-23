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
    return this.httpClient.get(`${this.baseUrl}/sanctum/csrf-cookie`, {withCredentials: true})
    //     .subscribe({
    //   next: (resp: any) => {
    //     console.log(resp);
    //   }
    // });

  }

  authApp() {
    // return this.httpClient.post(`${this.baseUrl}/sanctum/token`, {
    //   email: 'user@example.com',
    //   password: 'password',
    //   device_name: 'biozuglo_app',
    // });
  }
}

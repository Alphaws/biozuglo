import { inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  router = inject(Router);
  httpClient = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  private config: any;

  constructor() { }

  loadConfig(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/shop-api/config`);
  }

  setConfig(config: any): void {
    this.config = config;
  }

  getConfig(): any {
    return this.config;
  }
}

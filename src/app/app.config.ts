import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode, importProvidersFrom
} from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient, withInterceptors, withXsrfConfiguration } from "@angular/common/http";
import { apiInterceptor } from "./interceptors/api.interceptor";
import { authInterceptor } from "./interceptors/auth.interceptor";
import { provideAppInitializer } from "./app.initializer";
import { CookieService } from "ngx-cookie-service";
import { BrowserModule } from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(
        routes,
        withViewTransitions(),
        withRouterConfig({
          onSameUrlNavigation: 'reload',
        }),
        withInMemoryScrolling({
          anchorScrolling: 'enabled'
        })
    ),
    provideAnimations(),
    provideHttpClient(
        withXsrfConfiguration({
          cookieName: 'CUSTOM_XSRF_TOKEN',
          headerName: 'X-Custom-Xsrf-Header',
        }),
        withInterceptors([
          apiInterceptor,
          authInterceptor
        ])
    ),
      importProvidersFrom(
          BrowserModule,
          CookieService,
      ),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};

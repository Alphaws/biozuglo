import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode
} from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { apiInterceptor } from "./interceptors/api.interceptor";
import { authInterceptor } from "./interceptors/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
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
        withInterceptors([
          apiInterceptor,
          authInterceptor
        ])
    ),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};

import { HttpClient } from "@angular/common/http";
import { APP_INITIALIZER, Provider } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { ConfigService } from "./services/config.service";
import { firstValueFrom, tap } from "rxjs";

function appInitializer(http: HttpClient, authService: AuthService, configService: ConfigService) {
  console.log('INIT APP');
  return async () => {
    // CSRF cookie lekérése
   // const cookie = await firstValueFrom(authService.getCSRFToken());
    //console.log(cookie);

    const config = await firstValueFrom(configService.loadConfig());

    configService.setConfig(config);
  };
}
export function provideAppInitializer(): Provider {
  return {
    provide: APP_INITIALIZER,
    useFactory: appInitializer,
    deps: [HttpClient, AuthService, ConfigService],
    multi: true,
  };
}

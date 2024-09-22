import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from "../../environments/environment";

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  request = request.clone({
    setHeaders: {
      Accept: `application/json`,
      'x-channel': environment.channelName
    }
  });
  return next(request);
};

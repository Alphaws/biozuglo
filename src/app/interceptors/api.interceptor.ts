import { HttpInterceptorFn } from '@angular/common/http';
import { getCookie } from "vanilla-cookieconsent";

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  request = request.clone({
    withCredentials: true,
  });
  return next(request);
};

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONSTANTES } from '../config/app-const.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('localhost:3000')) {
      const params = new HttpParams().set(
        APP_CONSTANTES.apiKeyName,
        APP_CONSTANTES.apiKey
      );
      const cloneReq = request.clone({ params });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}

export const authInterceptorProvider = {
  useClass: AuthInterceptor,
  provide: HTTP_INTERCEPTORS,
  multi: true
};

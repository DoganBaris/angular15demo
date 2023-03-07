import { TokenService } from '../services/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      setHeaders:{
        Authorization:`Bearer ${this.tokenService.getToken()}`,

      }
    })
    return next.handle(request);
  }
}

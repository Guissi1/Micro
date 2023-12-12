import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../Services/auth.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes("auth/login"))
    {
      let newreq = request.clone({
        headers: request.headers.set('Authorization',`Bearer${localStorage.getItem('jwt')}`)
      })
      return next.handle(newreq);
    }else return  next.handle(request);
  }
}

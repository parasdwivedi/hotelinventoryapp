import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { eventListeners } from '@popperjs/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request1: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Req Intr.' , request1 )
    if(request1.method === 'POST'){
      const newRequest = request1.clone({headers: new HttpHeaders({'token' : 'I am you favourite token digga oder'})})
      return next.handle(newRequest);
    }
    else {
      return next.handle(request1)
    }
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyhttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

if(localStorage.getItem('etokn') !=null ){let myHedars:any ={token:localStorage.getItem('etokn')} 

request = request.clone( {

setHeaders:myHedars 


})}







    return next.handle(request);
  }
}

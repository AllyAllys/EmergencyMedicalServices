import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {LoginService} from "./login.service"
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private loginservice:LoginService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken= this.loginservice.getToken();
    const authRequest = req.clone({
      headers:req.headers.set('Authorization', 'Bearer '+ authToken)
    });
    return next.handle(authRequest);
  }

}

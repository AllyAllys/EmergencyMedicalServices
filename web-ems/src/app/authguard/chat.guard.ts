import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ChatGuard implements CanActivate {
  currentrole:any;
  constructor(private loginservice:LoginService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.loginservice.IsLogged()) {
        this.currentrole = this.loginservice.GetRolebyToken(this.loginservice.getToken());
        if (this.currentrole=='Adminstrator'|| this.currentrole=='Disaster Manager' || this.currentrole=='First Responder' || this.currentrole=='Emergency Responder' || this.currentrole=='EMS Dispatcher' ||this.currentrole=='Health staff'
        || this.currentrole=='Volunteer') {
          return true;
        } else {
          alert('You are not authorized to access this information!');
          this.route.navigate(['/homepage']);
          return false;
        }
      } else {
        this.route.navigate(['login']);
        return false;
      }
    }

}

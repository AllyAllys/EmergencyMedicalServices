import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class MissingpersonGuard implements CanActivate {
  currentrole:any;
  constructor(private loginservice:LoginService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.loginservice.IsLogged()) {
        this.currentrole = this.loginservice.GetRolebyToken(this.loginservice.getToken());
        if (this.currentrole=='Adminstrator' || this.currentrole=='Public' || this.currentrole== 'Volunteer' || this.currentrole=='First Responder' ||this.currentrole=='Emergency Responder' ||this.currentrole=='Health staff' || this.currentrole=='Law Enforcement') {
          return true;
        } else {
          alert('you are not authorized to access this menu');
          this.route.navigate(['/homepage']);
          return false;
        }
      } else {
        this.route.navigate(['login']);
        return false;
      }
    }

}

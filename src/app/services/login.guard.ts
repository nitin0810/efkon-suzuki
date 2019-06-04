import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  // not being used, just declared to implement canActivate interface correctly
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.authService.isLoggedIn()) {
      return true;
    } else {
        this.navCtrl.navigateForward('/dashboard');
        return false;
    }
    }
  
}

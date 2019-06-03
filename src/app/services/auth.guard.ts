import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { NavController } from '@ionic/angular';

/**
 * @description
 * Guard that restricts users to inside the app when they are not logged in
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // not being used, just declared to implement canActivate interface correctly
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.navCtrl.navigateForward('/login');
      return false;
    }
  }
}

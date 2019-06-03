import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private ui: UIService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.ui.disableMenu();
  }
  ionViewDidLeave() {
    this.ui.enableMenu();
  }

  submit() {
    this.authService.saveToken('token');
    this.navCtrl.navigateForward('/dashboard');
  }

}

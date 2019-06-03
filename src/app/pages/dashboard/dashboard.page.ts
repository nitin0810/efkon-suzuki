import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private ui: UIService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  loader() {

    this.ui.showLoader();
    setTimeout(() => {
      this.ui.hideLoader();
    }, 2000);
  }

  alert() {
    this.ui.showSimpleAlert('Error', 'hey, some error occured, Couldnot fetch data, Try Again later.')
  }
  toast() {
    this.ui.showToast('Simple toast msg', 'top', false, 'success');
  }
  logout() {
    localStorage.clear();
    this.navCtrl.navigateForward('/login');
  }
}


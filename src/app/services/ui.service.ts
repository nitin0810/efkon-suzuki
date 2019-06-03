import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController, MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  loading: HTMLIonLoadingElement;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
  ) { }

  async showLoader(text?: string) {

    this.loading = await this.loadingCtrl.create({
      translucent: true,
      message: text || 'Please Wait ...'
    });
    return this.loading.present();

  }

  async hideLoader() {
    return await this.loading.dismiss();
  }

  async showToast(msg, pos: 'top' | 'bottom' | 'middle' = 'bottom', showCloseBtn = false, cl = 'dark') {

    const toast = await this.toastCtrl.create({
      message: msg,
      duration: showCloseBtn ? 0 : 3000,
      position: pos,
      showCloseButton: showCloseBtn,
      closeButtonText: 'Ok',
      keyboardClose: true,
      color: cl,
      animated: true
    });
    return toast.present();
  }

  async showSimpleAlert(heading: string, msg: string) {
    const alert = await this.alertCtrl.create({
      header: heading || 'Error',
      message: msg || 'Some error occured',
      buttons: ['OK']
    });

    return await alert.present();
  }

  enableMenu() {
    this.menuCtrl.enable(true);
  }

  disableMenu() {
    this.menuCtrl.enable(false);
  }
}

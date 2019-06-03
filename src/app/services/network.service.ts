import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { UIService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private network: Network,
    private ui: UIService
  ) { }

  watchNetworkStatus() {
    console.log('nnnnnnnnnntttttt');

    this.network.onConnect().subscribe(() => {

      this.ui.showToast('You are not connected to internet.', 'top', true, 'danger');
    });
    this.network.onDisconnect().subscribe(() => {
      console.log('nnnnnnnnnn');
      console.log('nnnnnnnnnn');

      this.ui.showToast('You are Back Online.', 'top', true, 'success');
    });
  }
}

import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: CustomHttpService,
    ) { }

  isLoggedIn() {
      return localStorage.getItem('access_token') ? true : false;
  }

  saveToken(token: string) {
      localStorage.setItem('access_token', token);
  }

  login(data: any) {
      return this.http.post(`/oauth/token?grant_type=password&username=${data.email}&password=${data.password}`, {});
  }


}

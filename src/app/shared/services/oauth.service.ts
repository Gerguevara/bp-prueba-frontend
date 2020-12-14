import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor() { }


  logIn(usuario: User): void {
    localStorage.setItem('token', JSON.stringify(usuario));
  }

  logOut(): void {
    localStorage.removeItem('token');
  }

  autenticado(): boolean {
    if(localStorage.get('token')) {
      return true;
    } else {
      return false;
    }
  }



}

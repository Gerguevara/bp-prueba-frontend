import { OauthService } from './../shared/services/oauth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User | any;
  constructor(private OauthService: OauthService) { }

  ngOnInit(): void { }

  enviar(form: NgForm): void {
    if (form.valid) {
      this.OauthService.logIn(this.user);
    } else {
      alert('porfavor complete los campos')
    }
  }
}

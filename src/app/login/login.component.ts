import { Login } from '../common/model/login/loginModel';
import { Client } from '../common/model/login/clientModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = {} as Login;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService, private router: Router, private spinner: NgxSpinnerService) {
    this.login.Client = {} as Client;
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.spinner.show();
    // this.authService.isLoggedIn = !this.authService.isLoggedIn;
    //     this.router.navigateByUrl('admin');
    this.login.DomainType = null;
    this.login.Domain = '';
    this.login.UserName = this.getUserName as string;
    this.login.Password = this.getPassword as string;
    this.login.Client.Version = '';
    this.login.Client.Device = '';
    this.login.Client.Platform = '';
    this.login.Client.Resolution = '';
    this.login.Client.Language = '';
    this.login.Client.DateTime = '';

    this.authService.login(this.login).subscribe((success) => {
      if (success.IsSuccessful) {
        this.spinner.hide();
        this.authService.isLoggedIn();
        this.router.navigateByUrl('admin');
      }
    });
  }

  get getUserName() {
    return this.loginForm.get('username')?.value;
  }
  get getPassword() {
    return this.loginForm.get('password')?.value;
  }
}


import { map, Observable, ReplaySubject } from 'rxjs';
import { LoginResponse } from '../../common/model/login/loginResponse';
import { Login } from '../../common/model/login/loginModel';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { Token } from '../../common/model/token/tokenModel';
import { BaseResponse } from 'src/app/common/model/baseResponse';
import { AuthData } from 'src/app/common/model/login/authDataModel';
import { ForgotPasswordRequest } from 'src/app/common/model/login/forgotPasswordRequest';
import { ProfileRequest } from 'src/app/common/model/login/profileRequest';
import { ProfileResponse } from 'src/app/common/model/login/profileResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticationSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated$ = this.isAuthenticationSubject.asObservable();

  authData: AuthData = {
    RememberMe: false,
    Domain: '',
    UserName: '',
    Token: '',
    Expires: '',
    Validity: '',
    Type: '',
    User: '',
    Locale: '',
    Menu: ''
  };

  apiUrl: string = environment.apiUrl;
  tokenModel = {} as Token;
  constructor(private http: HttpClient, private route: Router) { }
  login(login: Login): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/token`, login)
      .pipe(
        map((response: LoginResponse) => {

          this.writeAuthData(response, login.RememberMe, null);

          this.loadMenu().subscribe((menuResponse) => {
            // if (success.IsSuccessful) {
            //   this.spinner.hide();
            //   this.authService.isLoggedIn();
            //   this.router.navigateByUrl('admin');
            // }
          });

          this.tokenModel.username = response.User.UserName;
          this.tokenModel.token = response.Token;
          this.tokenModel.expires = response.Expires;

          localStorage.setItem('tokenModel', JSON.stringify(this.tokenModel));
          return response;
        })

      );
  };

  // adLogin(): Observable<LoginResponse> {
  //   if (!adAuthActive) {
  //     return ;
  //   }
  //   else {
  //     return this.http.post<LoginResponse>(`${this.apiUrl}/adauth/token`, login)
  //     .pipe(
  //       map((login: LoginResponse) => {
  //         writeAuthData(response);
  //         return login;
  //       })

  //     );
  //   }
  // };

  forgotPassword(data: ForgotPasswordRequest) {
    if (data.UserName == '') {
      // factory.goLogin();
      return;
    }

    return this.http.post<BaseResponse>(`${this.apiUrl}/auth/forgotpassword`, data)
      .pipe(
        map((resp: BaseResponse) => {
          //   factory.goLogin();
          return resp;
        })
      );

  };

  logout() {
    return this.http.post<BaseResponse>(`${this.apiUrl}/auth/revoke`, {})
      .pipe(
        map((resp: BaseResponse) => {
          //   factory.goLogin();
          return resp;
        })

      );
  };

  autoLogout(expiration: Date) {
    let getDate = new Date().getTime();
    let finishDate = new Date(expiration).getTime();
    let second = finishDate - getDate;
    setTimeout(() => {
      this.logout();
    }, second);
  };

  isLoggedIn() {
    this.isAuthenticationSubject.next(true);
  };

  initAuthData() {
    this.authData.RememberMe = false;
    this.authData.Domain = '';
    this.authData.UserName = '';
    this.authData.Token = '';
    this.authData.Expires = '';
    this.authData.Validity = '';
    this.authData.Type = '';
    this.authData.User = '';
    this.authData.Locale = '';
    this.authData.Menu = '';

    localStorage.setItem('token', '');
    sessionStorage.setItem('token', '');
  };

  writeAuthData(response: LoginResponse, rememberMe: boolean, token: any) {
    if (!response) {
      this.initAuthData();
      return;
    }

    if (!response.Token && token)
      response.Token = token;

    if (response.Token) {
      this.authData.Token = response.Token;
      this.authData.Expires = response.Expires;
      this.authData.Validity = response.Validity;
    }
    else {
      this.authData.Token = '';
      this.authData.Expires = null;
      this.authData.Validity = null;
    }

    if (response.User) {
      this.authData.Type = response.User.DomainType + response.User.DomainPartyType;
      this.authData.User = response.User;
      this.authData.Domain = response.User.DomainCode;
      this.authData.UserName = response.User.UserName;

      if (response.User.Profile) {
        if (response.User.Profile.Locale) {
          this.authData.Locale = response.User.Profile.Locale.toLowerCase();
        }
        else {
          this.authData.Locale = 'TR';
          // TODO: yukarıdaki satır yerine aşağıdaki çalışmalı.
          // this.authData.Locale = appLocaleDefault.toLowerCase();
        }

      }
    }
    else {
      this.authData.User = null;
    }

    this.authData.RememberMe = rememberMe;

    this.authData.Menu = null;

    if (this.authData.User && rememberMe) {
      let remember = {
        domain: this.authData.Domain,
        userName: this.authData.UserName
      }
      localStorage.setItem('remember', JSON.stringify(remember));
    }
    else {
      localStorage.setItem('remember', '');
    }

    if (this.authData.Token)
      if (environment.tokenStoreActive) {
        localStorage.setItem('token', this.authData.Token);
        localStorage.setItem('type', this.authData.Type);
        sessionStorage.setItem('token', '');
        sessionStorage.setItem('type', '');
      }
      else {
        localStorage.setItem('token', '');
        localStorage.setItem('type', '');
        sessionStorage.setItem('token', this.authData.Token);
        sessionStorage.setItem('type', this.authData.Type);
      }
  };

  loadMenu(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/menu`, null)
      .pipe(
        map((response: any) => {
          if (response.Data && response.Data.length > 0) {
            this.authData.Menu = response.Data;

            if (this.authData.Menu && this.authData.Menu.length > 0) {
              // TODO:  Burada kaldım state yönetimi çalışılacak.
              //  var states = $state.get();
              // setMenuStates(authData.menu, states);
            }
            else {
              this.authData.Menu = null;
            }
          }

          return response;
        })

      );
  };

  getProfile() {
    return this.http.post<BaseResponse>(`${this.apiUrl}/auth/profile`, {})
      .pipe(
        map((resp: BaseResponse) => {
          //   factory.goLogin();
          return resp;
        })

      );
  };

  setProfile(profileRequest:ProfileRequest ) {
    return this.http.post<ProfileResponse>(`${this.apiUrl}/auth/profile`, profileRequest.Profile)
      .pipe(
        map((response: ProfileResponse) => {
          if (response.Profile) {
            if (response.Profile.Locale) {
                this.authData.Locale = response.Profile.Locale.toLowerCase();
            }
            return response;
        }
        else {
            // Error
            return response;
        }

        })

      );
  };

  
}

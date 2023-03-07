
import { Injectable } from '@angular/core';
import { Token } from '../../common/model/token/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getToken() {
    const tokenModel = JSON.parse(localStorage.getItem('tokenModel') || '{}') as Token
    return tokenModel.token;
  }
}

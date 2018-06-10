import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public _isLoggedIn: boolean;
  constructor() { }

  public isLogged(){
  	return this._isLoggedIn;
  }

  public setLoggin(isLoggedIn:boolean){
  	this._isLoggedIn = isLoggedIn;
  }
}

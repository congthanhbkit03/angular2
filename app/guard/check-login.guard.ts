import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
	constructor(public logginService: LoginService){

	}

  	canActivate(){
  		console.log('canActivate? ' + this.logginService.isLogged());
  		let status =  this.logginService.isLogged();
    	if (status !== true){
    		alert('You have not permission to access');
    	}
    	return status;
	}
  
}

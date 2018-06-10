import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public username: string;
  public password: string;

  constructor(private router: Router,  public logginService: LoginService) { }

  ngOnInit() {
  }

  checkLogin(value:any){
  	console.log(value);
  	if (value.username == "admin" && value.password == "123"){
  		this.logginService.setLoggin(true);
  		this.router.navigate(['/']);
  	}
  	// this.router.navigate(['/']);
  }

}

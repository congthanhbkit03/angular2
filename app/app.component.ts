import { Component, ViewChild, OnInit } from '@angular/core';
import { TutorialComponent} from './tutorial.component';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'XIn chao den voi Ang2';
  public isLoggin: boolean;

  constructor(private logginService: LoginService){

  }
  
  ngOnInit(){
      this.isLoggin = this.logginService.isLogged();
  }

  public logOut(){
      this.logginService.setLoggin(false);
      console.log("Log Out");
  }
}

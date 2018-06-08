import { Component, ViewChild } from '@angular/core';
import { TutorialComponent} from './tutorial.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XIn chao den voi Ang2';
  
  public agree:number = 0;
  public disgree:number = 0;

  public names = ['Mr A', 'Mr B', 'Mr C', 'Md D'];
  public parentVote(agree:boolean){
  	if(agree){
  		this.agree++;
  	} else {
  		this.disgree++;
  	}
  }

  @ViewChild(TutorialComponent)
  public tutor: TutorialComponent;

  public changeName(){
  	this.tutor.setName('Bui COng THanh test test view child');
  }
}

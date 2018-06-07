import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'my-tutorial',
	templateUrl: './tutorial.component.html',
  	styleUrls: ['./tutorial.component.css']
})

export class TutorialComponent{
	@Input() name:string;
	@Output() onVote  = new EventEmitter<boolean>();
	public voted:boolean = false;

	vote(agree:boolean){
		this.voted = true;
		this.onVote.emit(agree);	//xuat ra ngoai agree
	}

	setName(name:string){
		this.name = name;
	}
}
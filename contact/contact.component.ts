import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public cities = [{'id':1, 'name':'Ha Noi'}, {'id':2, 'name': 'Ho Chi Minh'}];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any){
  	console.log(value);
  }
}

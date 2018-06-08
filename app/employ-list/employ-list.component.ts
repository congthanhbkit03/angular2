import { Component, OnInit } from '@angular/core';
import { EmployServiceService} from '../employ-service.service';
@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {
  public employees: any[];
  constructor(private employeeService: EmployServiceService) { }

  ngOnInit() {
  	this.employeeService.getList().subscribe((response:any) => {
  		this.employees = response;
      console.log("AAAAAAAAAAAA" + response);
  	})
  }

}

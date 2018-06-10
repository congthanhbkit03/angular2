import { Component, OnInit } from '@angular/core';
import { EmployServiceService} from '../services/employ-service.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {
  public employees: any[];
  public pages: number[];
  public currentPage: number;
  constructor(private employeeService: EmployServiceService, private router: Router, private activedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe(params => {
       this.currentPage = params['pageNumber'] || 1;
       console.log(this.currentPage);
    });
  	this.employeeService.getList().subscribe((response:any) => {
  		this.employees = response;
      // console.log("AAAAAAAAAAAA" + response);
  	});

    this.pages = [1, 2, 3, 4, 5, 6, 7];
  }

}

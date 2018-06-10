import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';
import { EmployServiceService} from '../services/employ-service.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {

  public _id: number;
  public subscrible: Subscription;
  public employee: any;
  constructor(private router: Router, private activedRoute: ActivatedRoute, public employeeservice: EmployServiceService) { }

  ngOnInit() {
  	this.subscrible = this.activedRoute.params.subscribe(params => {
  		this._id = params['id'];
  		 
  	});
  	this.employeeservice.getSingle(this._id).subscribe((data)=>{
  		this.employee = data;
  	})
  }

   gotoEmployeelist(){
  	this.router.navigate(["employlist"]);
  }

  ngOnDestroy(){
  	this.subscrible.unsubscribe();
  }
}

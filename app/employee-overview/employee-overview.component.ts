import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit, OnDestroy {
  public parentRouterId: number;
  public sub: Subscription;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.activatedRoute.parent.params.subscribe(params => {
  		this.parentRouterId = params['id'];
  		alert('Child get ID:   ' + this.parentRouterId);
  	})
  }

  ngOnDestroy(){

  }

}

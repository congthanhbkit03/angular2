import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
@Injectable({
  providedIn: 'root'
})
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {
  canDeactivate(component: EmployeeDetailComponent){
    alert('You can not leave this page with out saving data');
    return false;
  }
}

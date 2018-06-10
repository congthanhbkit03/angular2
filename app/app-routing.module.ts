import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';
import { CheckLoginGuard } from './guard/check-login.guard';
import { CheckSaveFormGuard } from './guard/check-save-form.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'em', redirectTo: 'employlist',pathMatch: 'full'},
  { path: 'emlist', redirectTo: 'employlist', pathMatch: 'full'},
  
  { path: 'employlist', component: EmployListComponent, canActivate: [CheckLoginGuard]},
  { path: 'employee-detail/:id', component:EmployeeDetailComponent, canDeactivate: [CheckSaveFormGuard],
  		children: [ {path:'', redirectTo:'overview', pathMatch: 'full'},
  					{path:'overview', component:EmployeeOverviewComponent},
  				   	{path:'projects', component:EmployeeProjectsComponent}]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  
})


export class AppRoutingModule { }

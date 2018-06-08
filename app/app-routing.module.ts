import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployListComponent } from './employ-list/employ-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employlist', component: EmployListComponent}
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  
})


export class AppRoutingModule { }

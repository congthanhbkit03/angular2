import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployListComponent } from './employ-list/employ-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'em', redirectTo: 'employlist',pathMatch: 'full'},
  { path: 'emlist', redirectTo: 'employlist', pathMatch: 'full'},
  { path: 'employlist', component: EmployListComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  
})


export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { ContactComponent } from './contact/contact.component';
import { EmployListComponent } from './employ-list/employ-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects/employee-projects.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { EmployServiceService } from './services/employ-service.service';
import { CheckLoginGuard } from './guard/check-login.guard';
import { CheckSaveFormGuard } from './guard/check-save-form.guard';

@NgModule({
  declarations: [
    AppComponent, TutorialComponent, ContactComponent, EmployListComponent, HomeComponent, NotFoundComponent, EmployeeDetailComponent, EmployeeOverviewComponent, EmployeeProjectsComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService,EmployServiceService, CheckLoginGuard, CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

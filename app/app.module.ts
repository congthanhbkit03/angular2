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

@NgModule({
  declarations: [
    AppComponent, TutorialComponent, ContactComponent, EmployListComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

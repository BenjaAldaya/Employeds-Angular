import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployersListComponent } from './employers-list/employers-list.component';
import { AboutComponent } from './about/about.component';
import { EmployersMoreInformationComponent } from './employers-more-information/employers-more-information.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployersListComponent,
    AboutComponent,
    EmployersMoreInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersListComponent } from './employers-list/employers-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:"home", component: EmployersListComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { ProfileDetailsComponent } from './profile-details/profile-details.component'

const routes: Routes = [
  
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "profileDetails",
    component: ProfileDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

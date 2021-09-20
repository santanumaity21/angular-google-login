import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {AuthGuardGuard} from './auth-guard.guard';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('xxx') // your client id
        }
      ]
    }
  },
  AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

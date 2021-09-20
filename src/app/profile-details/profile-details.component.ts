import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private router: Router, public socialAuthServive: SocialAuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }


}

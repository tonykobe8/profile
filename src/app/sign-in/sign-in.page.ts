import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authetication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  Email
  Password
  loggonInUser
  constructor(public authenticateService:AutheticationService, public router:Router) { }
login(){
    this.authenticateService.signInUser(this.Email, this.Password);
    this.authenticateService.getCurrentUser()
    this.loggonInUser = this.authenticateService.userInfo
   
   }
ngOnInit() {
    this.authenticateService.getCurrentUser()
  }
 
}

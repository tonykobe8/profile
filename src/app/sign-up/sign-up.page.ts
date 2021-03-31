import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authetication.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  firstName
  lastname
  phoneNumber
  Email
  Password
  user:User
  currentUser
  constructor(public authenticateService:AutheticationService, public router:Router) { }
  signUp(){
    this.user = new User(this.firstName,this.lastname, this.phoneNumber,this.Email, this.Password);
    this.authenticateService.signUpUser(this.user)
    this.authenticateService.getCurrentUser()
   }
  ngOnInit() {
  }
 
 
}

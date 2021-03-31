import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import {AngularFireAuth } from "@angular/fire/auth"


import { Router } from '@angular/router';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  userInfo:User 
constructor( private db: AngularFirestore,private fireAuth:AngularFireAuth,public router:Router) { }
signUpUser(user){
  var database = firebase.database();
    console.log(user);
    
    let message = ""
  
    firebase.auth().createUserWithEmailAndPassword(user.Email, user.Password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message = errorMessage
    console.log(errorMessage);

  }).then( results =>{
    console.log(results);
    if(results){
      message = "successfully registered"
      firebase.database().ref('cv/' + results.user.uid).set({
        FirstName: user.FirstName,
        lastname: user.lastname,
        phoneNumber: user.phoneNumber,
        Email: user.Email,
 
       
      });
      console.log(message);
    
    }else{
     
    }
    
  });
  
}
  signInUser(Email,Password){
let user :any
let message = ""
firebase.auth().signInWithEmailAndPassword(Email, Password).catch((error) =>{
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      message = errorMessage
    }).then(result =>{
      user = result
      console.log(result);
if(user){
message = user.user.Email + " has successfully logged in"
        localStorage.setItem('userID', user.user.uid);
        console.log(localStorage.getItem('userID'));
        console.log(message);
        this.router.navigateByUrl("/projects")
      }else{
console.log(message);
      }
return user.user.Email
    });
   }
   getCurrentUser(){
    firebase.auth().onAuthStateChanged((user) =>{
    if (user) {
    var userId = user.uid;
    firebase.database().ref('/users/' + userId).once('value').then( userProfile =>{
    this.userInfo = new User(userProfile.val().firstName,userProfile.val().lastname,
     userProfile.val().phoneNumber,userProfile.val().Email,"" , userId )
            console.log(this.userInfo);
          })
        } else {
          console.log("user not logged in");
        }
      });
}  
forgotPassword(passwordResetEmail) {
  return this.fireAuth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    window.alert('Password reset email sent, check your inbox.');
  }).catch((error) => {
    window.alert(error)
  })
}


}

import { Component, Input, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  test : Date = new Date();
    
    user= {
        email : '',
        password : ''
    }

    

  constructor(public authService:AuthService, private router:Router) { 

  }

  ngOnInit() {
    
  }
  
  Signin(){
    const { email ,password } = this.user;
    this.authService.login(email,password).then(res => {})
    this.router.navigate(['landing']);
}
SigninWithGoogle(){
    const { email ,password } = this.user;
    this.authService.loginWithGoogle(email,password).then(res => {})
    this.router.navigate(['landing'])
    console.log("logged")
}

obtainLoggedUser(){
this.authService.getUserLogged(). subscribe(res=>{
console.log(res?.email);
});
}
logout() {
this.authService.logout();

}
Register(){
const { email ,password } = this.user;
this.authService.register(email,password).then(res => {})
this.router.navigate(['landing'])

}
}


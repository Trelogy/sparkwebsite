import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }
  userLogged=this.authService.getUserLogged();
}

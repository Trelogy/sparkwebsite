import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }
  userLogged=this.authService.getUserLogged();
}

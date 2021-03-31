import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authetication.service';
@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.page.html',
  styleUrls: ['./screen2.page.scss'],
})
export class Screen2Page implements OnInit {

  constructor(public authenticateService:AutheticationService, public router:Router) { }

  ngOnInit() {
  }
 
}

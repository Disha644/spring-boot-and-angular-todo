import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  email:string;

  constructor(private router:Router,public service:AuthenticationService) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('email');
  }

}

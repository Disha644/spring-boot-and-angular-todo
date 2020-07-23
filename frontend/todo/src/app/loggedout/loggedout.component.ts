import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-loggedout',
  templateUrl: './loggedout.component.html',
  styleUrls: ['./loggedout.component.css']
})
export class LoggedoutComponent implements OnInit {

  constructor(private service:AuthenticationService) { }

  ngOnInit(): void {
    this.service.logout();
  }

}

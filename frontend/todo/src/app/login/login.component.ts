import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  userError:any;

  constructor(private service:AuthenticationService, private router:Router) {}

  ngOnInit(): void {
  }

  logIn(){

    this.service.logIn(this.user).subscribe((response)=>{
      
      console.log(response);
      this.router.navigate(['/home',response.email]);
      sessionStorage.setItem('username',response.username);
      sessionStorage.setItem('email',response.email);
    },
    (error)=>{
      this.userError='Invalid Credentials!!'      
    })
    
  }
}

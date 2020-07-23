import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user=new User();
  userError:any;
  successMessage:string;

  constructor(private service:AuthenticationService) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){

   this.service.createUser(this.user).subscribe(
    (response)=>{
     console.log(response);
     this.successMessage='Your account have been successfully created. Please login to continue..'
   },(error)=>{
     this.userError=error.error.message;
   })
   

  }

}

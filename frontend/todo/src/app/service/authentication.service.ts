import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  createUser(user:User){
    return this.http.post<User>("http://localhost:8080/signup",user);
  }

  logIn(user:User){
    return this.http.post<User>("http://localhost:8080/login",user);
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('username');
    if(user!=null){
      return true;
    }

    return false;
  }

  logout(){
    sessionStorage.clear();
  }
}

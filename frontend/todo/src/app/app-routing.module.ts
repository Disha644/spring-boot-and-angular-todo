import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{
  path:'',redirectTo:'login',pathMatch:'full'
},{
  path:'login',component:LoginComponent
},{
  path:'signup',component:SignupComponent
},{
  path:'home/:email',component:HomeComponent,canActivate:[AuthGuard]
},{
  path:'todo/:id', component:TodoComponent, canActivate:[AuthGuard]
},{
  path:'logout',component:LoggedoutComponent, canActivate:[AuthGuard]
},{
  path:'**', redirectTo:'/login', pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

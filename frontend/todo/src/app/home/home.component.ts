import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodoDataService } from '../service/todo-data.service';
import { Todo } from '../Todo';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos:Todo[]=[];
  email:string;
  deleteSuccessMessage:string;
  deleteErrorMessage:string;

  constructor(private todoService:TodoDataService, private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.email=this.activatedRoute.snapshot.params['email'];
    this.refreshTodos();
  }

  refreshTodos(){

    this.todoService.retriveTodos(this.email).subscribe((response)=>{
      this.todos=[];
      this.todos=response;
  })
  }

  deleteTodo(id,email){
     
    this.todoService.deleteTodo(id,email).subscribe((response)=>{
      this.deleteSuccessMessage='Todo has been successfully deleted';
      this.refreshTodos();
    },(error)=>{
      this.deleteErrorMessage='Some Error occured. Please try again later'
    })
  }

  updateTodo(id:number){
    this.router.navigate(['/todo',id]);
  }

  addTodo(){
    this.router.navigate(['/todo',-1])
  }

}





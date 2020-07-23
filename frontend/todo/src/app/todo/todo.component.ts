import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/todo-data.service';
import { error } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:Todo;
  id:number;
  email:string;

  constructor(private activatedRoute:ActivatedRoute,private todoService:TodoDataService,
    private router:Router) { }

  ngOnInit(): void {

    this.id=this.activatedRoute.snapshot.params['id'];
    this.email=sessionStorage.getItem('email');

    this.todo=new Todo(1000,this.email,'',new Date());

    if(this.id!=-1){

      this.todoService.retriveTodo(this.email,this.id).subscribe((response)=>{
        console.log(response);
        this.todo=response;
      })
    }

  }

  saveTodo(){

    if(this.id!=-1){
      this.todoService.updateTodo(this.email,this.id,this.todo).subscribe((response)=>{
        console.log(response);
        this.router.navigate(['/home',this.email]);
      })
    }

    else{
      this.todoService.addTodo(this.email,this.todo).subscribe((response)=>{
        console.log(response);
        this.router.navigate(['/home',this.email]);
      })
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retriveTodos(email:string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${email}/todos`);
  }

  retriveTodo(email:string,id:number){
    return this.http.get<Todo>(`http://localhost:8080/users/${email}/todos/${id}`);
  }

  deleteTodo(id:number, email:string){
    return this.http.delete(`http://localhost:8080/users/${email}/todos/${id}`);
  }

  updateTodo(email:string, id:number,todo:Todo){
    return this.http.put(`http://localhost:8080/users/${email}/todos/${id}`,todo);
  }

  addTodo(email:string,todo:Todo){
    return this.http.post(`http://localhost:8080/users/${email}/todos`,todo);
  }
}

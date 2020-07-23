package com.rest.webservices.restfulwebservices.controller;

import java.net.URI;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.rest.webservices.restfulwebservices.model.Todo;
import com.rest.webservices.restfulwebservices.repository.TodoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
	
	@Autowired
	TodoRepository repository;
	
	
	@GetMapping("users/{email}/todos")
	public List<Todo> getAll(@PathVariable String email){
		return  repository.findTodoByEmail(email);
	}
	
	
	@GetMapping("users/{email}/todos/{id}")
	public Todo getTodo(@PathVariable String email, @PathVariable int id){
		return  repository.findTodoByEmailAndId(email, id);
	}
	
	
	@DeleteMapping("users/{email}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String email, @PathVariable int id) {
		
		repository.deleteById(id);
		return ResponseEntity.noContent().build();
    }
	
	
	@PutMapping("users/{email}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String email,
			@PathVariable int id, @RequestBody Todo todo){
		
		repository.deleteById(todo.getId());
		Todo todoUpdated=repository.save(todo);
		return new ResponseEntity<Todo>(todoUpdated,HttpStatus.OK);
	}
	
	
	@PostMapping("users/{email}/todos")
	public ResponseEntity<Void> updateTodo(@PathVariable String email,@RequestBody Todo todo){
		
		todo.setEmail(email);
		Todo todoCreated=repository.save(todo);
		
		//We want to return the uri of the created Todo for which we need to append the id of todoCreated to the 
		//current uri
		
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(todoCreated.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	
	
}






package com.rest.webservices.restfulwebservices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rest.webservices.restfulwebservices.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {
	
	public List<Todo> findTodoByEmail(String email);
	
	public Todo findTodoByEmailAndId(String email,int id);
	
}

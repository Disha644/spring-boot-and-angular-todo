package com.rest.webservices.restfulwebservices.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rest.webservices.restfulwebservices.model.User;
import com.rest.webservices.restfulwebservices.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {
	
	@Autowired
	UserRepository repository;
	
	@PostMapping("/signup")
	public User createUser(@RequestBody User user) throws Exception{
		
		if(user.getEmail()!=null) {
			
			User userObj=repository.findUserByEmail(user.getEmail());
			if(userObj!=null) {
				throw new Exception("This email id is already registered. Use another email id");
			}
		}
		User newUser=null;
		newUser=repository.save(user);
		return newUser;
	}
	
	
	@PostMapping("/login")
	public User logIn(@RequestBody User user) throws Exception {
		
		User loggedInUser=null;
		if(user.getEmail()!=null) {
			loggedInUser=repository.findUserByEmailAndPassword(user.getEmail(), user.getPassword());
		}
		
		if(loggedInUser==null) {
			throw new Exception("Invalid Credentials!!");
		}
		
		
		return loggedInUser;
		
	}
	
}





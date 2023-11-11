
package com.merc.user.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.merc.user.model.AppUser;
import com.merc.user.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class AppUserController {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	@Autowired
	UserService userService;

//	http://localhost:4200/users

	@GetMapping(path = "users", produces = "application/json" )
	public ResponseEntity<List<AppUser>> getAllUsers() {
		
		List<AppUser> userList = userService.getAllUsers();
		HttpStatus status = HttpStatus.OK;
		ResponseEntity<List<AppUser>> response = new ResponseEntity<List<AppUser>>(userList, status);
		
		return response;
	}

	@GetMapping(path = "users/{username}", produces = "application/json")
	public ResponseEntity<AppUser> getUserByUsername(@PathVariable (name = "username") String username) {
		
	AppUser userObj = userService.getUserByUsername(username);
		
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "User found successfully.");
		ResponseEntity<AppUser> response = new ResponseEntity<AppUser>(userObj, headers, status);
		
		LOG.info("GET /- User with username: " + username +" found");
		
		return response;
	}

	@PostMapping(path = "users", consumes = "application/json", produces = "application/json")
	public ResponseEntity<AppUser> addUser(@RequestBody AppUser user) {
		
		AppUser userObj = userService.addUser(user);
		
		HttpStatus status = HttpStatus.CREATED;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "User added successfully!");
		ResponseEntity<AppUser> response = new ResponseEntity<AppUser>(userObj, headers, status);
		
		return response;
	}
	
	@PostMapping(path = "update-user", consumes = "application/json", produces = "application/json")
	public ResponseEntity<AppUser> updateUser(@RequestBody AppUser user) {
		
		AppUser userObj = userService.updateUser(user);
		
		HttpStatus status = HttpStatus.CREATED;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "User details updated successfully!");
		ResponseEntity<AppUser> response = new ResponseEntity<AppUser>(userObj, headers, status);
		
		return response;
	}
	
	@DeleteMapping(path = "delete-user/{userId}", produces = "application/json")
	public ResponseEntity<AppUser> deleteUser(@PathVariable(name = "userId") Integer userId) {
		AppUser userObj = userService.deleteUser(userId);
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "User deleted successfully.");
		ResponseEntity<AppUser> response = new ResponseEntity<AppUser>(userObj, headers, status);
		LOG.info(userId.toString());
		return response;
	}
}
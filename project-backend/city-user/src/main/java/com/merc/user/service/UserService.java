
package com.merc.user.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.merc.user.exception.UserNotFoundException;
import com.merc.user.model.AppUser;
import com.merc.user.repository.AppUserRepository;

@Service
public class UserService implements IUserService {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	AppUserRepository userRepository;

	@Override
	public List<AppUser> getAllUsers() {
		LOG.info("getAllUsers");
//		return userList;
		return userRepository.findAll();
	}
	
	@Override
	public AppUser getUserByUsername(String username) {
		LOG.info(username);
		Optional<AppUser> userOpt = userRepository.findByUsername(username);
		if (userOpt.isPresent()) {
			return userOpt.get();
		}	
		else {
			String errorMessage = "User with name " + username + " not found!";
			throw new RuntimeException(errorMessage);
		}	
	}
	
	@Override
	public AppUser addUser(AppUser appUser) {
		LOG.info(appUser.toString());
		Optional<AppUser> userOpt = userRepository.findByUsername(appUser.getUsername());
		if (userOpt.isPresent() && (userOpt.get().getUsername().equals(appUser.getUsername()))) {
//			throw new UserAlreadyExistsException(); // create this class and update global exception handler 
			throw new RuntimeException("Username already exists!");
		}
		return userRepository.save(appUser);
	}
	
	@Override
	public AppUser updateUser(AppUser user) {
	    Optional<AppUser> existingUser = userRepository.findById(user.getId());

	    if (existingUser.isPresent()) {
	        AppUser updatedUser = existingUser.get();
	        updatedUser.setUsername(user.getUsername());
	        updatedUser.setName(user.getName());
	        updatedUser.setEmail(user.getEmail());
	        updatedUser.setPincode(user.getPincode());
	        updatedUser.setPassword(user.getPassword());
	        updatedUser.setConfirmPassword(user.getConfirmPassword());
	        updatedUser.setAvatar(user.getAvatar());

	        userRepository.save(updatedUser);
	        return updatedUser;
	    } else {
	    	Integer id = user.getId();
	    	String errorMessage = "User with id " + id + " not found!";
			LOG.warn(errorMessage);
	        throw new UserNotFoundException(errorMessage);
	    }
	}

	@Override
	public AppUser deleteUser(Integer id) {
	    Optional<AppUser> user = userRepository.findById(id);

	    if (user.isPresent()) {
	    	AppUser deletedUser = user.get();
	        userRepository.deleteById(id);
	        return deletedUser;
	    } else {
	    	String errorMessage = "User not found!";
			LOG.warn(errorMessage);
	        throw new UserNotFoundException(errorMessage);
	    }
	}


}
package com.merc.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.merc.user.model.AppUser;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Integer> {

	public abstract Optional<AppUser> findById(Integer id);
	
	public abstract Optional<AppUser> findByUsername(String username);

	public abstract Optional<AppUser> findByUsernameIgnoreCase(String username);

}
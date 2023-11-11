package com.merc.user.service;

import java.util.List;

import com.merc.user.model.AppUser;

public interface IUserService {

	public abstract List<AppUser> getAllUsers();

//	public abstract Employee getEmpById(Integer eid);

	public abstract AppUser getUserByUsername(String username);

	public abstract AppUser addUser(AppUser appUser);

	public abstract AppUser updateUser(AppUser user);

	public abstract AppUser deleteUser(Integer id);
}
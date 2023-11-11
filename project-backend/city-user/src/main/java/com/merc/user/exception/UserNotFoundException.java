
package com.merc.user.exception;

public class UserNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 7331601113731100761L;

	public UserNotFoundException() {
		super();
	}

	public UserNotFoundException(String errorMessage) {
		super(errorMessage);
	}

}
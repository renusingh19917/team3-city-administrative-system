package com.merc.user.exception;

public class ReportNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 7331601113731100761L;

	public ReportNotFoundException() {
		super();
	}

	public ReportNotFoundException(String errorMessage) {
		super(errorMessage);
	}
	
}

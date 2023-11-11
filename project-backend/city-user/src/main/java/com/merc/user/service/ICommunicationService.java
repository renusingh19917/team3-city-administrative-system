package com.merc.user.service;

import java.util.List;

import com.merc.user.model.AppReport;

public interface ICommunicationService {
	
	public abstract List<AppReport> getAllReports();
	
	public abstract List<AppReport> getUserReports(Integer userId);
	
	public abstract AppReport getReportById(Integer id);

	public abstract AppReport addReport(AppReport report);
	
	public abstract AppReport updateReport(AppReport report);
	
	public abstract AppReport deleteReport(Integer id);
	
}

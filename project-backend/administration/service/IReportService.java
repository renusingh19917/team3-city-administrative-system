package com.merc.administration.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.merc.administration.model.Report;

public interface IReportService {

public abstract List<Report> allReports();
	
	public abstract Report reportById(Integer id);

	public abstract Report addReport(Report report);

	public abstract Report updateReport(Integer reportId, Report updatedReport);

	
}

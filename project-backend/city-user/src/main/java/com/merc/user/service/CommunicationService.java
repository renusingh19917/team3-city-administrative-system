package com.merc.user.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.merc.user.exception.ReportNotFoundException;
import com.merc.user.model.AppReport;
import com.merc.user.repository.AppReportRepository;

@Service
public class CommunicationService implements ICommunicationService {

private final Logger LOG = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	AppReportRepository reportRepository;

	@Override
	public List<AppReport> getAllReports() {
		LOG.info("getAllReports");
//		return userList;
		return reportRepository.findAll();
	}
	
	@Override
	public List<AppReport> getUserReports(Integer userId) {
		List<AppReport> allReports = reportRepository.findAll();
		// Filter reports based on userId
	    List<AppReport> userReports = allReports.stream()
	            .filter(report -> report.getUserId().equals(userId))
	            .collect(Collectors.toList());

	    if (!userReports.isEmpty()) {
	        return userReports;
	    } else {
	        String errorMessage = "No reports found for User with ID " + userId;
	        throw new ReportNotFoundException(errorMessage);
	    }
	}
	
	@Override
	public AppReport getReportById(Integer id) {
		Optional<AppReport> reportOpt = reportRepository.findById(id);
		if (reportOpt.isPresent()) {
			return reportOpt.get();
		} else {
			String errorMessage = "Report with Id " + id + " not found!";
			throw new ReportNotFoundException(errorMessage);
		}
	}
	
	@Override
	public AppReport addReport(AppReport report) {
		LOG.info(report.toString());
		return reportRepository.save(report);
	}
	
	@Override
	public AppReport updateReport(AppReport report) {
	    Optional<AppReport> existingReport = reportRepository.findById(report.getId());

	    if (existingReport.isPresent()) {
	    	AppReport updatedReport = existingReport.get();
	    	updatedReport.setTitle(report.getTitle());
	    	updatedReport.setDescription(report.getDescription());
	    	updatedReport.setStatus(report.getStatus());
	    	updatedReport.setSolution(report.getSolution());

	    	reportRepository.save(updatedReport);
	        return updatedReport;
	    } else {
	    	Integer id = report.getId();
	    	String errorMessage = "Report with id " + id + " not found!";
			LOG.warn(errorMessage);
	        throw new ReportNotFoundException(errorMessage);
	    }
	}

	@Override
	public AppReport deleteReport(Integer id) {
	    Optional<AppReport> report = reportRepository.findById(id);

	    if (report.isPresent()) {
	    	AppReport deletedReport = report.get();
	    	reportRepository.deleteById(id);
	        return deletedReport;
	    } else {
	    	String errorMessage = "Report not found!";
			LOG.warn(errorMessage);
	        throw new ReportNotFoundException(errorMessage);
	    }
	}

	
}

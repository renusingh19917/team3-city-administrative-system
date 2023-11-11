package com.merc.administration.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.merc.administration.model.Report;
import com.merc.administration.repository.ReportRepository;

@Service
public class ReportService implements IReportService{

	@Autowired
	ReportRepository reportRepo;
	
	@Override
	public List<Report> allReports() {
		// TODO Auto-generated method stub
		return reportRepo.findAll();
	}

	@Override
	public Report reportById(Integer id) {
		// TODO Auto-generated method stub
		Optional<Report> reportOpt = reportRepo.findById(id);
			return reportOpt.get();
	}
	
	@Override
	public Report addReport(Report report) {
		// TODO Auto-generated method stub
        return reportRepo.save(report);
	}

	
	@Override
	   public Report updateReport(Integer reportId, Report updatedReport) {
	        Optional<Report> existingReport = reportRepo.findById(reportId);

	        if (existingReport.isPresent()) {
	            Report reportToUpdate = existingReport.get();

	            reportToUpdate.setSoltution(updatedReport.getSoltution());

	            return reportRepo.save(reportToUpdate);
	        }


	        return null;
	    }
}

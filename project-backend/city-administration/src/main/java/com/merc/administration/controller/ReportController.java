package com.merc.administration.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.merc.administration.model.Notice;
import com.merc.administration.model.Report;
import com.merc.administration.service.INoticeService;
import com.merc.administration.service.IReportService;


@RestController
@CrossOrigin(origins = "*")
public class ReportController {
private final Logger LOG = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	IReportService reportService;
	
	@GetMapping (path = "reports", produces = "application/json" )
	public ResponseEntity<List<Report>> allNotices() {
		
		List<Report> reportList = reportService.allReports();
		HttpStatus status = HttpStatus.OK;
		ResponseEntity<List<Report>> response = new ResponseEntity<List<Report>>(reportList, status);
		
		return response;
	}
	
	@GetMapping(path = "reports/{id}", produces = "application/json")
	public ResponseEntity<Report> reportById(@PathVariable (name = "id") Integer id) {
		
		Report reportObj = reportService.reportById(id);
		
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Post found successfully.");
		ResponseEntity<Report> response = new ResponseEntity<Report>(reportObj, headers, status);
		
		LOG.info("GET /- Post with postId: " + id +" found");
		
		return response;
	}
	
	@PostMapping(path = "reports", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Report> addReport(@RequestBody Report report) {
		
		Report reportObj = reportService.addReport(report);
		
		HttpStatus status = HttpStatus.CREATED;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Post uploaded successfully!");
		ResponseEntity<Report> response = new ResponseEntity<Report>(reportObj, headers, status);
		
		return response;
	}
	
	@PutMapping("reports/{reportId}")
	public ResponseEntity<Report> updateReport(
	        @PathVariable Integer reportId,
	        @RequestBody Report updatedReport) {

	    Report updated = reportService.updateReport(reportId, updatedReport);

	    return Optional.ofNullable(updated)
	            .map(report -> ResponseEntity.ok().body(report))
	            .orElse(ResponseEntity.notFound().build());
	}
}

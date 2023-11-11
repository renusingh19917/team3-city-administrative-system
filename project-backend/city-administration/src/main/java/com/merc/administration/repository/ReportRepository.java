package com.merc.administration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.merc.administration.model.Report;

public interface ReportRepository extends JpaRepository<Report, Integer>{

}

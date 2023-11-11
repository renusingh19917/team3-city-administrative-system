package com.merc.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.merc.user.model.AppReport;

@Repository
public interface AppReportRepository extends JpaRepository<AppReport, Integer> {

	public abstract Optional<AppReport> findById(Integer id);
	
}

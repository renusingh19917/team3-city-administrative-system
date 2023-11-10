package com.merc.administration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.merc.administration.model.Notice;


public interface NoticeRepository extends JpaRepository<Notice, Integer>{

}

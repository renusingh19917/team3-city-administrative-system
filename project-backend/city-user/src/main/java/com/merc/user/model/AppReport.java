package com.merc.user.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "app_report_table")
public class AppReport {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	Integer id;
	
    @Column(name = "type")
	private String type;

    @Column(name = "title")
	private String title;

    @Column(name = "description")
	private String description;
    
    @Column(name = "status")
	private String status;
    
	@Column(name = "userId")
	private Integer userId;
    
    @Column(name = "solution")
	private String solution;
    
    public AppReport() {
		super();
	}
    
    public AppReport(Integer id, String type, String title, String description, String status, Integer userId, String solution ) {
		super();
		this.id = id;
		this.type = type;
		this.title = title;
		this.description = description;
		this.status = status;
		this.userId = userId;
		this.solution = solution;
	}
    
    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
    
    public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	public String getSolution() {
		return solution;
	}

	public void setSolution(String solution) {
		this.solution = solution;
	}

	@Override
	public String toString() {
		return "Report [id=" + id + ", type=" + type + ", title=" + title + ", description=" + description
				+ ", user= " + userId + "]";
	}
    
}

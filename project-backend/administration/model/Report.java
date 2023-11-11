package com.merc.administration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Reports")
public class Report {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "type")
	private String type;

	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;

	@Column(name = "status")
	private String status;

	@Column(name = "solution")
	private String soltution;

	@Column(name = "userId")
	private String userId;

	public Report() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Report(Integer id, String type, String title, String description, String status, String soltution,
			String userId) {
		super();
		this.id = id;
		this.type = type;
		this.title = title;
		this.description = description;
		this.status = status;
		this.soltution = soltution;
		this.userId = userId;
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

	public String getSoltution() {
		return soltution;
	}

	public void setSoltution(String soltution) {
		this.soltution = soltution;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Report [id=" + id + ", type=" + type + ", title=" + title + ", description=" + description + ", status="
				+ status + ", soltution=" + soltution + ", userId=" + userId + "]";
	}
	
	
}

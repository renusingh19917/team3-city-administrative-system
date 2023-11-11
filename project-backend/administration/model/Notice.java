package com.merc.administration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Notices")
public class Notice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name = "id")
	private Integer id;

	 @Column (name = "title")
	private String title;

	@Column (name = "content")
	private String content;
	
	@Column (name = "Issued_On")
	private String issuedOn;

	public Notice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Notice(Integer id, String title, String content, String issuedOn) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.issuedOn = issuedOn;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getIssuedOn() {
		return issuedOn;
	}

	public void setIssuedOn(String issuedOn) {
		this.issuedOn = issuedOn;
	}

	@Override
	public String toString() {
		return "Notice [id=" + id + ", title=" + title + ", content=" + content + ", issuedOn=" + issuedOn + "]";
	}

	

}

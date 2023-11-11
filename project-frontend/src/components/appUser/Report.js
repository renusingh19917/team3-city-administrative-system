import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import AppReport from '../../models/AppReport';
import { addReport } from "../../services/CommunicationService";

const Report = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const currentUser = JSON.parse(localStorage.getItem('currentProfile'));

  const [reportData, setReportData] = useState(new AppReport());
  const [failedReport, setFailedReport] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log("e", e.target.value);
    setReportData({
      ...reportData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    reportData.status = 'pending review';  //initial status of the report
    reportData.soltution = 'none';
    reportData.userId = currentUser.id;   //current user's id

    console.log(reportData);

    addReport(reportData)
      .then((resp) => {
        console.log(resp);
        setReportData(new AppReport());
        setFailedReport('');
        console.log('Form submitted:', reportData);

        alert('Report registered successfully!');
        navigate('/comm');
      })
      .catch((err) => {
        console.log(err);
        setReportData(new AppReport());
        setFailedReport('Report not successful');
      });

    e.preventDefault();

  };

  return (
    <div className="report-form" style={styles.container}>
      <>
        <h2 style={styles.heading}>Submit a Report</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.radioGroup}>
            <label>Type:</label>
            <input
              type="radio"
              name="type"
              id="complaint"
              value="complaint"
              checked={reportData.type === 'complaint'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="complaint" style={styles.radioLabel}>Complaint</label>
            <input
              type="radio"
              name="type"
              id="suggestion"
              value="suggestion"
              checked={reportData.type === 'suggestion'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="suggestion" style={styles.radioLabel}>Suggestion</label>
          </div>

          <div style={styles.inputGroup}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={reportData.title}
              onChange={handleInputChange}
              required
              style={styles.inputField}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Description:</label>
            <textarea
              name="description"
              value={reportData.description}
              onChange={handleInputChange}
              required
              style={styles.inputField}
            />
          </div>

          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
        <p style={styles.failedReport}>{failedReport}</p>
      </>
    </div>
  );
};

export default Report;

const styles = {
  container: {
    width: '60%',
    margin: 'auto',
    paddingTop: '20px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  radioGroup: {
    marginBottom: '10px',
  },
  radioLabel: {
    marginLeft: '5px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  inputField: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  submitButton: {
    background: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  failedReport: {
    color: 'red',
    textAlign: 'center',
  },
};
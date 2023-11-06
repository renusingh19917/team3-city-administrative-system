import React, { useState } from 'react';
import { useNavigate } from "react-router";

import AppReport from '../../models/AppReport'; 
import { addReport } from "../../services/CommunicationService";

const ReportForm = () => {
  const navigate = useNavigate();

  const [reportData, setReportData] = useState(new AppReport());
  const [failedReport, setFailedReport] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    setReportData({
      ...reportData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setReportData({
      ...reportData,
      "status": "pending"
    });
    console.log(reportData);

    addReport(reportData)
      .then((resp) => {
        console.log(resp);
        setReportData('');
        setFailedReport('');
        alert(`Report registered successfully!`);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
        setReportData('');
        setFailedReport('Report not successful');
      });

    console.log('Form submitted:', reportData);
    setReportData(new AppReport());
  };

  return (
    <div className="report-form">
      <h2>Submit a Report</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type:</label>
          <label>
            <input
              type="radio"
              name="type"
              value="complaint"
              checked={reportData.type === 'complaint'}
              onChange={handleInputChange}
              required
            />
            Complaint
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="suggestion"
              checked={reportData.type === 'suggestion'}
              onChange={handleInputChange}
              required
            />
            Suggestion
          </label>
        </div>

        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={reportData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={reportData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <p>{failedReport}</p>
    </div>
  );
};

export default ReportForm;

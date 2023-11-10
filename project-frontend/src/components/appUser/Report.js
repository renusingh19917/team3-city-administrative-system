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
    console.log(e.target.value);
    setReportData({
      ...reportData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    reportData.status = 'pending review';  //initial status of the report
    reportData.userId = currentUser.id;   //current user's id

    console.log(reportData);

    addReport(reportData)
      .then((resp) => {
        console.log(resp);
        setReportData('');
        setFailedReport('');
        console.log('Form submitted:', reportData);

        alert('Report registered successfully!');
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
        setReportData('');
        setFailedReport('Report not successful');
      });

    e.preventDefault();

  };

  return (
    <div className="report-form">
      {/* {isLoggedIn ? ( */}
        <>
          <h2>Submit a Report</h2>
          <form onSubmit={handleSubmit}>
            <div>
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
              <label for="complaint">Complaint</label>
              <input
                type="radio"
                name="type"
                id="suggestion"
                value="suggestion"
                checked={reportData.type === 'suggestion'}
                onChange={handleInputChange}
                required
              />
              <label for="suggestion">Suggestion</label>
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
        </>
      {/* ) */}
       {/* : (
        <>
          <h1>Login First</h1>
          <p>Please <Link to="/login">login</Link> to access the Report page.</p>
        </>
      ) */}
      {/* } */}
    </div>
  );
};

export default Report;
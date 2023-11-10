import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllReports, updateReport } from '../../services/AdminCommunicationService';

function ReportsList() {
  const [reports, setReports] = useState([]);
  const [soltution, setSoltution] = useState('');

  useEffect(() => {
    getAllReports()
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }, []);


  
  const handleUpdateReport = (reportId) => {

    const updatedReport = { soltution };

    updateReport(reportId, updatedReport)
      .then(() => {
        getAllReports()
          .then((response) => {
            setReports(response.data);
          })
          .catch((error) => {
            console.error('Error fetching reports:', error);
          });
      })
      .catch((error) => {
        console.error('Error updating report:', error);
      });
  };

  return (
    <div>
    <h2>Reports List</h2>
    <ul>
      {reports.map((report, index) => (
        <li key={index}>
          <h3>
            <Link to={`/report-details/${report.id}`}>{report.title}</Link>
          </h3>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default ReportsList;


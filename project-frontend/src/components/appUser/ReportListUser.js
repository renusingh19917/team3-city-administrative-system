import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllReports, updateReport } from '../../services/AdminCommunicationService';
import '../../styles/ReportListAdmin.css';

function ReportsListUser() {
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
    <div className='report-list'>

    {reports.map((report, index) => (
      <div className='report-list-admin' key={index}>   
            <Link to={`/report-details/${report.id}` }className="report-link">{report.title}</Link>
        </div>
      ))}
    </div>
      
  
  </div>
  );
}

export default ReportsListUser;


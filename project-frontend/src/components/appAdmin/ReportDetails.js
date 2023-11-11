import React, { useEffect, useState } from 'react';
import { getAllReports, updateReport } from '../../services/AdminCommunicationService';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/ReportDetails.css';

function ReportDetails() {
  
  const [soltution, setSoltution] = useState('');
 
  const reportParam = useParams();
  const [report, setReport] = useState([]);

    useEffect(() => {
        console.log(reportParam.id);
        axios.get(`http://localhost:8090/reports/${reportParam.id}`)
            .then((response) => {
                setReport(response.data);
            })
            .catch((error) => {
                console.error("Error fetching report data:", error);
            });
    }, [reportParam.id]);

  
  const handleUpdateReport = (reportId) => {
    const updatedReport = { soltution };
 
    updateReport(reportId, updatedReport)
      .then(() => {
        getAllReports()
          .then((response) => {
            setReport(response.data);
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
    <div className='report-details'>
      <h2>Report No. {report.id}</h2>
            
            <h3>Title: {report.title}</h3>
            <p><b>Description: </b>{report.description}</p>
            <p><b>Status: </b>{report.status}</p>
            <p><b>Solution: </b>{report.soltution}</p>
            <textarea
              placeholder="Enter solution"
              value={soltution}
              onChange={(e) => setSoltution(e.target.value)}
            /><br></br>
            <button onClick={() => handleUpdateReport(report.id)}>Submit Solution</button>
    </div>
  );
}

export default ReportDetails;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAllReports, updateReport } from '../../services/AdminCommunicationService';

function ReportsList() {
  const [reports, setReports] = useState([]);
  const [solution, setSolution] = useState('');
  const navigate = useNavigate();

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
    // Assuming each report has a unique ID
    const updatedReport = { solution };

    // Update the report on the backend
    updateReport(reportId, updatedReport)
      .then(() => {
        // Refresh the reports list after the update
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
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <p>{report.status}</p>
            <p>{report.solution}</p>
            <textarea
              placeholder="Enter solution"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
            />
            <button onClick={() => handleUpdateReport(report.id)}>Submit Solution</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReportsList;




// import React, { useEffect, useState ,Link} from 'react';
// import { useNavigate } from 'react-router';
// import { getAllReports } from '../../services/AdminCommunicationService';


// function ReportsList() {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     getAllReports()
//       .then((response) => {
//         setReports(response.data); // Update the state with fetched notices
//       })
//       .catch((error) => {
//         console.error('Error fetching reports:', error);
//       });
//   }, []);

// //   id;
// //   type;
// //   title;
// //   description;
// //   status;
// //   solution;
// //   userId

//   return (
//         <div>
//           <h2>Reports List</h2>
//           <ul>
//             {reports.map((report, index) => (
//               <li key={index}>
//                  {/* <Link to={`notice-details/${notice.id}`}><p>{notice.title}</p></Link> */}
//                 <h3>{report.title}</h3>
//                 {/* <p>{report.description}</p>
//                 <p>{report.status}</p>
//                 <p>{report.solution}</p> */}
//                </li>
//             ))}
//           </ul>
//         </div>
//       );
// }

// export default ReportsList;
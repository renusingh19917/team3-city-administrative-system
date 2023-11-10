import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { getUserReports, getAllNotices, deleteReport } from "../../services/CommunicationService";
import EditReportForm from './EditReportForm';

const Communication = () => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('currentProfile'));

    const [notices, setNotice] = useState([]);
    const [reports, setReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        if (isLoggedIn) {

            getUserReports(currentUser.id)
                .then((resp) => {
                    console.log(resp.data);
                    const reports = resp.data;
                    setReports(reports);
                })
                .catch((err) => {
                    console.log(err);
                    setReports([]);
                });

            getAllNotices()
                .then((resp) => {
                    console.log(resp.data);
                    setNotice(resp.data);
                })
                .catch((err) => {
                    console.log(err);
                    setNotice([]);
                });
        }
    }, []);

    const handleEditReport = (report) => {
        setSelectedReport(report);
    };

    const handleEditSuccess = (editedReport) => {
        // Update the local state with the edited report
        setReports((prevReports) =>
          prevReports.map((report) =>
            report.id === editedReport.id ? editedReport : report
          )
        );
      };

    const handleDeleteReport = (report) => {
        const reportId = report.id;
        if (window.confirm('Are you sure you want to delete this report?')) {
            deleteReport(reportId)
                .then(response => {
                    alert('Report deleted successfully:');
                    console.log(response.data);

                    setReports((prevReports) => prevReports.filter((report) => report.id !== reportId));
                })
                .catch(error => {
                    alert('Error deleting report:');
                    console.error(error);
                });
        }
    };

    return (
        <div className="communication-page">
            {isLoggedIn ? (
                <>
                    <h1>User Communication Page</h1>
                    <h3>Make a report here (Complaint/Suggestion)- </h3>
                    <Link to="/report">Report</Link>

                    <hr />
                    <h2>All Reports made by you:</h2>
                    <ul>
                        {reports.map(report => (
                            <li key={report.id}>
                                <p>{report.type}</p>
                                <strong>{report.title}</strong>
                                <p>{report.description}</p> 
                                <button onClick={() => handleEditReport(report)}>Edit</button>
                                <button onClick={() => handleDeleteReport(report)}>Delete</button>
                            </li>
                        ))}
                    </ul>

                    {/* Display the EditReportForm as a modal when selectedReport is not null */}
                    {selectedReport && (
                        <div className="edit-report-modal">
                            <div className="modal-content">
                                <span className="close" onClick={() => setSelectedReport(null)}>
                                    &times;
                                </span>
                                <h2>Edit Report</h2>
                                <EditReportForm
                                    report={selectedReport}
                                    onClose={() => setSelectedReport(null)}
                                    onEditSuccess={handleEditSuccess}
                                />
                            </div>
                        </div>
                    )}

                    <h2>Notices by the city:</h2>
                    <ul>
                        {notices.map(notice => (
                            <li key={notice.id}>
                                <strong>{notice.title}</strong>
                                <p>{notice.content}</p>
                                {/* <p>Issued by: {notice.issuedBy}</p> */}
                                <p>Issued on: {notice.issuedOn}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <h1>Login First</h1>
                    <p>Please <Link to="/login">login</Link> to access the communication page.</p>
                </>
            )
            }
        </div>
    );
};

export default Communication;

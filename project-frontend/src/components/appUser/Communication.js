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
        <div className="communication-page" style={styles.container}>
            {isLoggedIn ? (
                <>
                    <h1 style={styles.heading}>User Communication Page</h1>
                    <h3 style={styles.subHeading}>Make a report here (Complaint/Suggestion)- </h3>
                    <Link to="/report" style={styles.link}>Report</Link>

                    <hr style={styles.hr} />
                    <h2 style={styles.heading}>All Reports made by you:</h2>
                    <ul style={styles.list}>
                        {reports.map(report => (
                            <li key={report.id} style={styles.listItem}>
                                <p style={styles.reportType}>{report.type}</p>
                                <strong style={styles.reportTitle}>{report.title}</strong>
                                <p style={styles.reportDescription}>{report.description}</p>
                                <button onClick={() => handleEditReport(report)} style={styles.button}>Edit</button>
                                <button onClick={() => handleDeleteReport(report)} style={styles.button}>Delete</button>
                            </li>
                        ))}
                    </ul>

                    {/* Display the EditReportForm as a modal when selectedReport is not null */}
                    {selectedReport && (
                        <div className="edit-report-modal" style={styles.modal}>
                            <div className="modal-content" style={styles.modalContent}>
                                <span className="close" onClick={() => setSelectedReport(null)} style={styles.close}>
                                    &times;
                                </span>
                                <h2 style={styles.modalHeading}>Edit Report</h2>
                                <EditReportForm
                                    report={selectedReport}
                                    onClose={() => setSelectedReport(null)}
                                    onEditSuccess={handleEditSuccess}
                                />
                            </div>
                        </div>
                    )}

                    <h2 style={styles.heading}>Notices by the city:</h2>
                    <ul style={styles.list}>
                        {notices.map((notice) => (
                            <li key={notice.id} style={styles.listItem}>
                                <strong style={styles.noticeTitle}>{notice.title}</strong>
                                <p style={styles.noticeContent}>{notice.content}</p>
                                <p style={styles.noticeInfo}>Issued on: {notice.issuedOn}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <h1 style={styles.heading}>Login First</h1>
                    <p style={styles.loginMessage}>
                        Please <Link to="/login" style={styles.link}>
                            login
                        </Link>{' '}
                        to access the communication page.
                    </p>
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
      padding: '20px',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    subHeading: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    link: {
      fontSize: '16px',
      color: 'blue',
      textDecoration: 'underline',
      marginBottom: '20px',
      display: 'block',
    },
    hr: {
      border: '1px solid #ccc',
      margin: '20px 0',
    },
    list: {
      listStyle: 'none',
      padding: '0',
    },
    listItem: {
      marginBottom: '20px',
      border: '1px solid #ddd',
      padding: '10px',
      borderRadius: '5px',
    },
    reportType: {
      fontSize: '16px',
      color: 'blue',
      marginBottom: '5px',
    },
    reportTitle: {
      fontSize: '18px',
      marginBottom: '5px',
    },
    reportDescription: {
      fontSize: '14px',
      marginBottom: '10px',
    },
    button: {
      padding: '5px 10px',
      margin: '5px',
      cursor: 'pointer',
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      position: 'relative',
      background: 'white',
      padding: '20px',
      borderRadius: '5px',
      width: '50%',
      minWidth: '300px',
      textAlign: 'center',
    },
    close: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '20px',
      cursor: 'pointer',
    },
    modalHeading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    noticeTitle: {
      fontSize: '18px',
      marginBottom: '5px',
    },
    noticeContent: {
      fontSize: '14px',
      marginBottom: '10px',
    },
    noticeInfo: {
      fontSize: '12px',
      color: '#888',
    },
    loginMessage: {
      fontSize: '16px',
    },
  };

export default Communication;

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import EditReportForm from './EditReportForm';
import { getAllReports, getAllNotices, deleteReport } from "../../services/CommunicationService";

const Communication = () => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('currentProfile'));

    const [notices, setNotice] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {

            getAllReports(currentUser.id)
                .then((resp) => {
                    console.log(resp.data);
                    const reports = resp.data;
                    const complaint = reports.filter((report) => report.type === "complaint");
                    const suggestion = reports.filter((report) => report.type === "suggestion");
                    setComplaints(complaint);
                    setSuggestions(suggestion);
                })
                .catch((err) => {
                    console.log(err);
                    setComplaints([]);
                    setSuggestions([]);
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

    const handleEditReport = (editReport) => {
        <EditReportForm report={editReport} />
        // <Link to="/edit-report">login</Link> 
    };

    const handleDeleteReport = (report) => {
        deleteReport(report.id)
            .then(response => {
                // Handle successful deletion
                alert('Report deleted successfully:');
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                alert('Error deleting report:');
                console.error(error);
            });
    };

    return (
        <div className="communication-page">
            {isLoggedIn ? (
                <>
                    <h1>User Communication Page</h1>
                    <h3>Make a report here (Complaint/Suggestion)- </h3>
                    <Link to="/report">Report</Link>

                    <hr />
                    <h2>Suggestions:</h2>
                    <ul>
                        {suggestions.map(suggestion => (
                            <li key={suggestion.id}>
                                <strong>{suggestion.title}</strong>: {suggestion.description}
                                <button onClick={handleEditReport(this.suggestion)}>Edit</button>
                                <button onClick={handleDeleteReport(this.suggestion)}>Delete</button>
                            </li>
                        ))}
                    </ul>

                    <h2>Complaints:</h2>
                    <ul>
                        {complaints.map(complaint => (
                            <li key={complaint.id}>
                                <strong>{complaint.title}</strong>: {complaint.description}
                                <button onClick={handleEditReport(this.complaint)}>Edit</button>
                                <button onClick={handleDeleteReport(this.complaint)}>Delete</button>
                            </li>
                        ))}
                    </ul>

                    <h2>Notices by the city:</h2>
                    <ul>
                        {notices.map(notice => (
                            <li key={notice.id}>
                                <strong>{notice.title}</strong>: {notice.content}
                                <p>Issued by: {notice.issuedBy}</p>
                                <p>Issued at: {notice.issuedAt}</p>
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

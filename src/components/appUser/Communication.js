import React, { useState, useEffect } from 'react';
import { getAllReports, getAllNotices } from "../../services/CommunicationService";

const Communication = () => {
    const [notices, setNotice] = useState([]);
    const [noticeErrMessage, setNoticeErrMessage] = useState('');

    const [suggestions, setSuggestions] = useState([]);
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        getAllReports()
            .then((resp) => {
                console.log(resp.data);
                const reports = resp.data;
                const complaint = reports.filter( (report) => report.status === "complaint");
                const suggestion = reports.filter( (report) => report.status === "suggestion");
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
                setNoticeErrMessage('');
            })
            .catch((err) => {
                console.log(err);
                setNoticeErrMessage(`Couldn't fetch any notices`);
                setNotice([]);
            });
    }, []);

    return (
        <div className="communication-page">
            <h1>User Communication Page</h1>
            <h3>Make a report here (Complaint/Suggestion)- </h3>
            <Link to="report">Report</Link>

            <hr />
            <h2>Suggestions:</h2>
            <ul>
                {suggestions.map(suggestion => (
                    <li key={suggestion.id}>
                        <strong>{suggestion.title}</strong>: {suggestion.description}
                    </li>
                ))}
            </ul>

            <h2>Complaints:</h2>
            <ul>
                {complaints.map(complaint => (
                    <li key={complaint.id}>
                        <strong>{complaint.title}</strong>: {complaint.description}
                    </li>
                ))}
            </ul>

            <h2>Notices by the city:</h2>
            <p>{noticeErrMessage}</p>
            <ul>
                {notices.map(notice => (
                    <li key={notice.id}>
                        <strong>{notice.title}</strong>: {notice.content}
                        <p>Issued by: {notice.issuedBy}</p>
                        <p>Issued at: {notice.issuedAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Communication;

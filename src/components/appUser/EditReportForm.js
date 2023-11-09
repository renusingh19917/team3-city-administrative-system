import React, { useState } from 'react';
import { useNavigate } from "react-router";

import { editReport } from "../../services/CommunicationService";


const EditReportForm = ({ report }) => {
    const navigate = useNavigate();

    const [updatedReport, setUpdatedReport] = useState({ ...report });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedReport({ ...updatedReport, [name]: value });
    };

    const handleCancel = () => {
        alert('Changes cancelled. Redirecting to communication page..');
        navigate('/comm');
    };

    const handleSave = () => {
        editReport(report.id, updatedReport)
            .then(response => {
                // Handle successful edit
                alert('Report edited successfully:');
                console.log(response.data);
                navigate('/comm');
            })
            .catch(error => {
                // Handle error
                alert('Error editing report:');
                console.error(error);
            });
    };

    return (
        <div className="edit-report-form">
            <h2>Edit Report</h2>
            <form>
                <div>
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={updatedReport.title}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={updatedReport.description}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="button" onClick={handleSave}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default EditReportForm;

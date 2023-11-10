import React, { useState } from 'react';

import { editReport } from "../../services/CommunicationService";


const EditReportForm = ({ report, onClose, onEditSuccess }) => {

    const [updatedReport, setUpdatedReport] = useState({ ...report });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedReport({ ...updatedReport, [name]: value });
    };

    const handleCancel = () => {
        alert('Changes cancelled. Closing the modal..');
        onClose();
    };

    const handleSave = () => {
        editReport(updatedReport)
            .then(response => {
                // Handle successful edit
                alert('Report edited successfully:');
                console.log(response.data);
                onClose();
                onEditSuccess(updatedReport);
            })
            .catch(error => {
                // Handle error
                alert('Error editing report:');
                console.error(error);
            });
    };

    return (
        <div className="edit-report-form">
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
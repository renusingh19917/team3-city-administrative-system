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
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '50px',
          }}
        >
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={updatedReport.title}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                  required
                />
              </label>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>
                Description:
                <textarea
                  name="description"
                  value={updatedReport.description}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                  required
                />
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                type="button"
                onClick={handleCancel}
                style={{ backgroundColor: '#ccc', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default EditReportForm;
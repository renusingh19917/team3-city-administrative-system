// NoticeService.js
import axios from 'axios';


const noticeUrl = 'http://localhost:4200/notices';
const reportsUrl = 'http://localhost:4200/reports';


const addNotice = async(title,content,issuedOn) => {
    
 const response=await axios.post(noticeUrl, {
    title:title,
    content:content,
    issuedOn: issuedOn
  });
  console.log("added succesfuly",response)
};

const getAllNotices =async () => {
 return axios.get(noticeUrl);
  
};

const getAllReports = async () => {
    return axios.get(reportsUrl);
}

// Function to update a report
const updateReport = async (reportId, updatedReport) => {
  // Update the endpoint based on your API
  const reportUrl = `http://localhost:4200/reports/${reportId}`; 

  return axios.put(reportUrl, updatedReport)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};


export { addNotice, getAllNotices, getAllReports,updateReport };

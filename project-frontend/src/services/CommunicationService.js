import axios from "axios";

// const commUrl = 'https://jsonplaceholder.typicode.com/comm';
const reportUrl = '/report';
const noticeUrl = '/notice';

const getAllReports = (userId) => {
    console.log(userId);
    return axios.get(`${reportUrl}/${userId}`);
};

const getAllNotices = () => {
    return axios.get(noticeUrl);
};

const addReport = (userReport) => {
    console.log(userReport);
    return axios.post(reportUrl, userReport);
};

const editReport = (reportId, updatedReport) => {
    console.log(updatedReport);
    return axios.post(`${reportUrl}/${reportId}`, updatedReport);
};

const deleteReport = (reportId) => {
    return axios.delete(`${reportUrl}/${reportId}`);
};

const addNotice = (adminNotice) => {
    console.log(adminNotice);
    return axios.post(noticeUrl, adminNotice);
};

export { getAllReports, getAllNotices, addReport, addNotice, editReport, deleteReport };
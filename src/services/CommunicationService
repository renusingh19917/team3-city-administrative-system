import axios from "axios";

const commUrl = 'https://jsonplaceholder.typicode.com/comm';

const getAllReports = (userId) => {
    console.log(userId);
    return axios.get(`${commUrl}/report/${userId}`);
};

const getAllNotices = () => {
    return axios.get(`${commUrl}/notice`);
};

const addReport = (userReport) => {
    console.log(userReport);
    return axios.post(`${commUrl}/report`, userReport);
};

const addNotice = (adminNotice) => {
    console.log(adminNotice);
    return axios.post(`${commUrl}/notice`, adminNotice);
};

export { getAllReports, getAllNotices, addReport, addNotice };
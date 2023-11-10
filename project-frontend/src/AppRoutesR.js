
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminNotice from './components/appAdmin/AdminNotice';
import NoticeList from './components/appUser/NoticeList';
import AdminDashboard from './components/appAdmin/AdminDashboard';
import AllComplaints from './components/appAdmin/AllComplaints';
import AllPetitions from './components/appAdmin/AllPetitions';
import ComplaintDetails from './components/appAdmin/ComplaintDetails';
import UserComplaint from './components/appUser/UserComplaint';
import PetitionDetails from './components/appAdmin/PetitionDetails';
import UserPetition from './components/appUser/UserPetition';
import { getAllNotices } from './services/AdminCommunicationService';
import NoticeDetails from './components/appAdmin/NoticeDetails';
import Report from './components/appUser/Report';
import ReportsList from './components/appAdmin/ReportsList';


function AppRoutes() {
    // const [notices, setNotices] = useState([]);
  
    // const addNotice = (notice) => {
    //   setNotices([...notices, notice]);
    // };

    const [userComplaints, setUserComplaints] = useState([]);

const submitComplaint = (complaint) => {
  setUserComplaints([...userComplaints, complaint]);
};

const [userPetitions, setUserPetitions] = useState([]);

const submitPetition = (petition) => {
  setUserPetitions([...userPetitions, petition]);
};
  
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/admin-dashboard" element={<AdminDashboard/>} />
            <Route
            path="/admin-notice"
            element={<AdminNotice/>} // Pass the addNotice function
          />
          <Route path="/notice-list" element={<NoticeList />} /> 
          <Route path="/notice-details/:id" element={<NoticeDetails/>} />
            {/* <Route path="/admin-notice" element={<AdminNotice onAddNotice={addNotice} />} />
            <Route path="/notice-list" element={<NoticeList notices={notices} />} /> */}
            <Route path="/user-complaint" element={<UserComplaint onSubmitComplaint={submitComplaint}/>} /> {/* Route for UserComplaint */}
           <Route path="/all-complaints" element={<AllComplaints complaints={userComplaints}/>} />
           <Route path="/complaint/:id" element={<ComplaintDetails complaints={userComplaints}/>} />
           <Route path="/all-petitions" element={<AllPetitions petitions={userPetitions}/>} />
           <Route path="/petition/:id" element={<PetitionDetails petitions={userPetitions}/>} />  
           <Route path="/user-petition" element={<UserPetition onSubmitPetition={submitPetition}/>} />

           <Route path="report" element={<Report/>} />
           <Route path="reports" element={<ReportsList/>} />

          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  

export default AppRoutes;

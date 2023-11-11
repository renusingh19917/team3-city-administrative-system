
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminNotice from './components/appAdmin/AdminNotice';
import NoticeListUser from './components/appUser/NoticeListUser';
import NoticeListAdmin from './components/appAdmin/NoticeListAdmin';
import AdminDashboard from './components/appAdmin/AdminDashboard';
import NoticeDetails from './components/appAdmin/NoticeDetails';
import Report from './components/appUser/Report';
import ReportsList from './components/appAdmin/ReportsList';
import Login from './components/appUser/LoginP';
import Logout from './components/appUser/LogoutP';
import Home from './components/common/Home';
import ReportDetails from './components/appAdmin/ReportDetails';
import ReportsListUser from './components/appUser/ReportListUser';
import ReportDetailsUser from './components/appUser/ReportDetailsUser';
import AdminLogin from './components/appAdmin/AdminLogin';
import AdminLogout from './components/appAdmin/AdminLogout';


function AppRoutes() {  
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/admin-dashboard" element={<AdminDashboard/>} />
            <Route path="/admin-notice"  element={<AdminNotice/>} />
          <Route path="/notice-list-user" element={<NoticeListUser />} /> 
          <Route path="/notice-details/:id" element={<NoticeDetails/>} />
           <Route path="report" element={<Report/>} />
           <Route path="reports" element={<ReportsList/>} />
           <Route path="notice-list-admin" element={<NoticeListAdmin/>} />
           <Route path="/report-details/:id" element={<ReportDetails/>} />
           <Route path="/admin-login" element={<AdminLogin/>} />
           <Route exact path="" element={<Home />} />
           <Route path="/admin-logout" element={<AdminLogout />} />
           <Route path="report-list-admin" element={<ReportsListUser/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  

export default AppRoutes;

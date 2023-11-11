// import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/common/Home";
import Page404 from "./components/common/Page404";
import Toolbar from "./components/common/Toolbar";
import Footer from "./components/common/Footer";
import AdminNotice from './components/appAdmin/AdminNotice';
import NoticeListUser from './components/appUser/NoticeListUser';
import NoticeListAdmin from './components/appAdmin/NoticeListAdmin';
import AdminDashboard from './components/appAdmin/AdminDashboard';
import NoticeDetails from './components/appAdmin/NoticeDetails';
import ReportsList from './components/appAdmin/ReportsList';
import ReportDetails from './components/appAdmin/ReportDetails';
import Register from "./components/appUser/RegisterP";
import Login from "./components/appUser/LoginP";
import Logout from "./components/appUser/LogoutP";
import Report from "./components/appUser/Report";
import UserProfile from "./components/appUser/UserProfile";
import Communication from "./components/appUser/Communication";

const AppRoutes = () => {


    return (
        <div>
            <BrowserRouter>
                <div>
                    <Toolbar />
                </div>
                <Routes>
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/admin-notice" element={<AdminNotice />} />
                    <Route path="/notice-list-user" element={<NoticeListUser />} />
                    <Route path="/notice-details/:id" element={<NoticeDetails />} />
                    <Route path="reports" element={<ReportsList />} />
                    <Route path="notice-list-admin" element={<NoticeListAdmin />} />
                    <Route path="/report-details/:id" element={<ReportDetails />} />
                    <Route path="home" element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route exact path="" element={<Home />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="report" element={<Report />} />
                    <Route path="comm" element={<Communication />} />
                </Routes>
                <div>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;


// import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/common/Home";
// import Page404 from "./components/common/Page404";
// import Toolbar from "./components/common/Toolbar";
// import Footer from "./components/common/Footer";
import Register from "./components/appUser/Register";
import Login from "./components/appUser/Login";
import Logout from "./components/appUser/Logout";
import Report from "./components/appUser/Report";
import UserProfile from "./components/appUser/UserProfile";
import Communication from "./components/appUser/Communication";

const AppRoutes = () => {


    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* <Toolbar /> */}
                </div>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route exact path="" element={<Home />} />
                    {/* <Route path="*" element={<Page404 />} /> */}
                    <Route path="logout" element={<Logout />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="report" element={<Report />} />
                    <Route path="comm" element={<Communication />} />
                </Routes>
                <div>
                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;


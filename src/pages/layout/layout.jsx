import React from 'react';
import './layout.css';
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="AppContainer">
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="wrapper-page">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout

import React from 'react'
import './sidebar.css';
import { LineStyle, Timeline, Settings } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Dashboard</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item active">
                            <LineStyle className="sidebar-menu-icon" />
                            <a href="#">Home</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <a href="#">Timeline</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <a href="#">Settings</a>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Quick Menu</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <a href="#">Home</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <a href="#">Timeline</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <a href="#">Settings</a>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Notification</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <a href="#">Home</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <a href="#">Timeline</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <a href="#">Settings</a>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Staff</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <a href="#">Home</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <a href="#">Timeline</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <a href="#">Settings</a>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Settings</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <a href="#">Home</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <a href="#">Timeline</a>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <a href="#">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

import React from 'react'
import './sidebar.css';
import { LineStyle, Timeline, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Dashboard</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs">Home</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/timeline">Timeline</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/settings">Settings</Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Quick Menu</h3>
                    <ul className="sidebar-menu-list">
                    <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs">Home</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/timeline">Timeline</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/settings">Settings</Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Notification</h3>
                    <ul className="sidebar-menu-list">
                    <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs">Home</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/timeline">Timeline</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/settings">Settings</Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Staff</h3>
                    <ul className="sidebar-menu-list">
                    <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs">Home</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/timeline">Timeline</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/settings">Settings</Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Settings</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs">Home</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/timeline">Timeline</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Settings className="sidebar-menu-icon" />
                            <Link to="/webdev-with-reactjs/settings">Settings</Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-footer bottom">
                    <div className="sidebar-footer-item">
                        <Link to="/webdev-with-reactjs/about">About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

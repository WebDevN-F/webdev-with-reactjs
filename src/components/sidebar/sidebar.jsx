import React from 'react'
import './sidebar.css';
import { LineStyle, Timeline, ManageAccountsRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SmsIcon from '@mui/icons-material/Sms';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Dashboard</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <LineStyle className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>
                                Home
                            </Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Analyctics</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <TrendingUpIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Sales</Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Quick Menu</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <PersonOutlineIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Users</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <StorefrontIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Products</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <AttachMoneyIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Transactions</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <AssessmentIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Reports</Link>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Notification</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <MailOutlineIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Mail</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <ChatBubbleOutlineIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Feedbacks</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <SmsIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Messages</Link>
                        </li>                        
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Staff</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <ManageAccountsRounded className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Manages</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <Timeline className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Analyctics</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <TrendingUpIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Reports</Link>
                        </li>
                    </ul>
                </div>

                {/* <div className="sidebar-menu">
                    <h3 className="sidebar-menu-title">Authenticaiton</h3>
                    <ul className="sidebar-menu-list">
                        <li className="sidebar-menu-item">
                            <LoginIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/login'}>Login</Link>
                        </li>
                        <li className="sidebar-menu-item">
                            <VpnKeyIcon className="sidebar-menu-icon" />
                            <Link to={process.env.PUBLIC_URL + '/'}>Register</Link>
                        </li>
                    </ul>
                </div> */}

                <div className="sidebar-footer bottom">
                    <div className="sidebar-footer-item">
                        <Link to={process.env.PUBLIC_URL + '/about'}>0928351036.</Link>
                        <hr className="hr" />
                        <span>© { new Date().getFullYear() }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

import React from 'react'
import './topbar.css';
import { Link } from 'react-router-dom';
import { IconButton, Badge, Avatar } from '@mui/material';
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const Topbar = () => {
    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <Link to={process.env.PUBLIC_URL + '/'} className="logo">
                        webeadmin
                    </Link>
                </div>
                <div className="topbarCenter">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="topbarRight">
                    <Link className="topbar-button" to={process.env.PUBLIC_URL + '/login'}><LoginIcon className="sidebar-menu-icon" /> Sign In</Link>
                    <Link className="topbar-button" to={process.env.PUBLIC_URL + '/'}><VpnKeyIcon className="sidebar-menu-icon" /> Sign Up</Link>
                    <IconButton aria-label={notificationsLabel(100)} className="topbar-button">
                        <Badge badgeContent={100} color="secondary">
                            <NotificationsNone />
                        </Badge>
                    </IconButton>
                    <IconButton className="topbar-button">
                        <Badge badgeContent={2} color="secondary">
                            <Language />
                        </Badge>
                    </IconButton>
                    <IconButton className="topbar-button">
                        <Settings />
                    </IconButton>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} className="topbar-button">NN</Avatar>
                    <KeyboardArrowDownIcon className="topbar-button" />
                </div>
            </div>
        </div>
    )
}

export default Topbar

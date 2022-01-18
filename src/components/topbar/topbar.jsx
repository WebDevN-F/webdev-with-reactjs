import React from 'react'
import './topbar.css';
import { IconButton, Badge, Avatar } from '@mui/material';
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';

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
                    <span className="logo">
                        webeadmin
                    </span>
                </div>
                <div className="topbarRight">
                    <IconButton aria-label={notificationsLabel(100)}>
                        <Badge badgeContent={100} color="secondary">
                            <NotificationsNone />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Language />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>NN</Avatar>

                </div>
            </div>
        </div>
    )
}

export default Topbar

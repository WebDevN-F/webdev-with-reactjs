import React from 'react'
import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <h3 className="widgetSm__text">
                <SupervisedUserCircleIcon className="widgetSm__icon"/>
                <span>New Join Members</span>
            </h3>
            <ul className="widgetSm__list">
                <li className="widgetSm__list-item">
                    <img className="widgetSm__list-item-img" src={process.env.PUBLIC_URL + '/50x50.png'} alt=""/>
                    <div className="widgetSm__list-item-info">
                        <span className="widgetSm__list-item-info-name">John Doe</span>
                        <span className="widgetSm__list-item-info-job">Software Engineer</span>
                    </div>
                    <Button variant="outlined" className="widgetSm__button" startIcon={<VisibilityIcon />}>
                        Display
                    </Button>
                </li>

                <li className="widgetSm__list-item">
                    <img className="widgetSm__list-item-img" src={process.env.PUBLIC_URL + '/50x50.png'} alt=""/>
                    <div className="widgetSm__list-item-info">
                        <span className="widgetSm__list-item-info-name">John Doe</span>
                        <span className="widgetSm__list-item-info-job">Software Engineer</span>
                    </div>
                    <Button variant="outlined" className="widgetSm__button" startIcon={<VisibilityIcon />}>
                        Display
                    </Button>
                </li>

                <li className="widgetSm__list-item">
                    <img className="widgetSm__list-item-img" src={process.env.PUBLIC_URL + '/50x50.png'} alt=""/>
                    <div className="widgetSm__list-item-info">
                        <span className="widgetSm__list-item-info-name">John Doe</span>
                        <span className="widgetSm__list-item-info-job">Software Engineer</span>
                    </div>
                    <Button variant="outlined" className="widgetSm__button" startIcon={<VisibilityIcon />}>
                        Display
                    </Button>
                </li>

                <li className="widgetSm__list-item">
                    <img className="widgetSm__list-item-img" src={process.env.PUBLIC_URL + '/50x50.png'} alt=""/>
                    <div className="widgetSm__list-item-info">
                        <span className="widgetSm__list-item-info-name">John Doe</span>
                        <span className="widgetSm__list-item-info-job">Software Engineer</span>
                    </div>
                    <Button variant="outlined" className="widgetSm__button" startIcon={<VisibilityIcon />}>
                        Display
                    </Button>
                </li>
                
            </ul>
        </div>
    )
}

export default WidgetSm

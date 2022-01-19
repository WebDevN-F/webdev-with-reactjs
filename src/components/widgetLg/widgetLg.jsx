import React from 'react'
import './widgetLg.css';
import PaidIcon from '@mui/icons-material/Paid';
import SyncIcon from '@mui/icons-material/Sync';
import { IconButton } from '@mui/material';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';

const WidgetLg = () => {
    const Button = ({ type }) => {
        switch (type) {
            case 'sync':
                return <IconButton><SyncIcon /></IconButton>
            case 'paid':
                return <IconButton><PaidIcon /></IconButton>
            case 'pending':
                return <IconButton><PendingOutlinedIcon /></IconButton>
            default:
                return null
        }
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">
                <PaidIcon className="widgetLgTitleIcon" />
                <span className="widgetLgTitleText">Latest transactions</span>
                <IconButton className="widgetLgTitleIconRight">
                    <SyncIcon />
                </IconButton>
            </h3>
            <div className="widgetLgContent">
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTrHeader">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="sync" />
                        </td>
                    </tr>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="pending" />
                        </td>
                    </tr>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="sync" />
                        </td>
                    </tr>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="pending" />
                        </td>
                    </tr>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="pending" />
                        </td>
                    </tr>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="pending" />
                        </td>
                    </tr>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="sync" />
                        </td>
                    </tr>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="sync" />
                        </td>
                    </tr>
                    <tr className="widgetLgTrRow">
                        <td className="widgetLgTd widgetLgTdUser">
                            <img src={process.env.PUBLIC_URL + "/50x50.png"} className="widgetLgUserImg" />
                            <span className="widgetLgUserName">John Doe</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdDate">2 Jun 2022</td>
                        <td className="widgetLgTd widgetLgTdAmount">$100</td>
                        <td className="widgetLgTd widgetLgTdStatus">
                            <Button type="sync" />
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default WidgetLg

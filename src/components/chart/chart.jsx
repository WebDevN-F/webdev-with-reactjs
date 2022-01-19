import './chart.css';
import AddchartIcon from '@mui/icons-material/Addchart';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IconButton } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';

const Chart = ({title, data, dataKey, dataKeyName, grid}) => {
    return (
        <div className="chart-container">
            <h3 className="chart-title">
                <AddchartIcon className="chart-title-icon" />
                <span className="chart-title-text">{ title }</span>
                <IconButton className="chart-actions">
                    <SyncIcon />
                </IconButton>
            </h3>
            <div className="chart-layout">
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }
                        <XAxis dataKey={dataKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={dataKeyName} stroke="#8884d8" activeDot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart

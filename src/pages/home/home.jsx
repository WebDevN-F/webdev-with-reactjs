import React from 'react'
import './home.css';
import FeatureInfo from '../../components/featureInfo/featureInfo'
import Chart from './../../components/chart/chart';
import { userData } from '../../dummyData';

const Home = () => {
    return (
        <div className="home">
            <FeatureInfo />
            <Chart title="User Analytics" data={userData} dataKey="name" dataKeyName="Active User" grid={true} />
        </div>
    )
}

export default Home

import React from 'react'
import './home.css';
import FeatureInfo from '../../components/featureInfo/featureInfo'
import Chart from './../../components/chart/chart';
import { userData } from '../../dummyData';
import WidgetSm from './../../components/widgetSm/widgetSm';
import WidgetLg from './../../components/widgetLg/widgetLg';

const Home = () => {
    return (
        <div className="home">
            <FeatureInfo />
            <Chart title="User Analytics" data={userData} dataKey="name" dataKeyName="Active User" grid={true} />
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home

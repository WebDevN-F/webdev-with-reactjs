import React from 'react'
import './home.css';
import FeatureInfo from '../../components/featureInfo/featureInfo'

const Home = () => {
    return (
        <div className="home">
            <h1 className="home-title">Home</h1> 
            <FeatureInfo />
        </div>
    )
}

export default Home

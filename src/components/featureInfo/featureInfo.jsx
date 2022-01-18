import React from 'react'
import './featureInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeatureInfo = () => {
    return (
        <div className="featured">
            <div className="featureItem">
                <span className="featureTitle">
                    Revanue
                </span>
                <div className="featureItemContainer">
                    <span className="featureItemMoney">$2.145</span>
                    <span className="featureItemMoneyRate">
                        -11.4
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">
                    Cost
                </span>
                <div className="featureItemContainer">
                    <span className="featureItemMoney">$4.145</span>
                    <span className="featureItemMoneyRate">
                        +12.4
                        <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">
                    Sale
                </span>
                <div className="featureItemContainer">
                    <span className="featureItemMoney">$2.145</span>
                    <span className="featureItemMoneyRate">
                        -11.4
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeatureInfo

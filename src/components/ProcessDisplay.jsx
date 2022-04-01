import React from 'react'

const ProcessDisplay = ({process}) => {
  return (
    <div className="process-container">
      <div className="process-bar">
        <div className="process-indicator" style={{width: process + '%'}}>{process}%</div>
      </div>
    </div>
  )
}

export default ProcessDisplay
import React from 'react'

const StatusDisplay = ({ status }) => {

  const getColor = (status) => {
    let color;

    switch (status.toLowerCase()) {
      case 'done':
        color = 'rgb(186,255,201)';
        break;
      case 'in-progress':
        color = 'rgb(255,255,186)';
        break;
      case 'stuck':
        color = 'rgb(255,186,186)';
        break;
      default:
        color = 'rgb(255,186,186)';
    }
    return color;
  }

  return (
    <div className="status-container" style={{ backgroundColor: getColor(status) }}>
      {status}
    </div>
  )
}

export default StatusDisplay
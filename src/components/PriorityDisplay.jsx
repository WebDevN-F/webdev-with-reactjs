const iconBlackStar = '★';

const PriorityDisplay = ({priority}) => {
  return (
    <div className="priority-container">
      <div className="star-container">
        <h3 style={{color: priority >= 1 ? 'rgb(255,87,34)' : ''}}>{iconBlackStar}</h3>
        <h3 style={{color: priority >= 2 ? 'rgb(255,87,34)' : ''}}>{iconBlackStar}</h3>
        <h3 style={{color: priority >= 3 ? 'rgb(255,87,34)' : ''}}>{iconBlackStar}</h3>
        <h3 style={{color: priority >= 4 ? 'rgb(255,87,34)' : ''}}>{iconBlackStar}</h3>
        <h3 style={{color: priority >= 5 ? 'rgb(255,87,34)' : ''}}>{iconBlackStar}</h3>
      </div>
    </div>
  )
}

export default PriorityDisplay
import { Link } from 'react-router-dom';
import AvartarDisplay from './AvartarDisplay';
import StatusDisplay from './StatusDisplay';
import PriorityDisplay from './PriorityDisplay';
import ProcessDisplay from './ProcessDisplay';
import DeleteBlock from './DeleteBlock';

const TicketCard = ({ticket}) => {
  return (
    <div className="ticket-card">
      <div className="ticket-color" style={{backgroundColor: `${ticket.color}`}}></div>
      <Link to={`/ticket/${ticket.id}`} className="link">
        <h3>{ticket.title}</h3>
        <AvartarDisplay avatar={ticket.avatar} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority}/>
        <ProcessDisplay process={ticket.process}/>
      </Link>
      <DeleteBlock />
    </div>
  )
}

export default TicketCard
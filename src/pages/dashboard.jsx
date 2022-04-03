import React from 'react'
import TicketCard from '../components/TicketCard';
import { tickets } from '../dummyData.js'
import axios from 'axios'
import CategoriesContext from '../contexts/appContext';
import { Link } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_API;

const Dashboard = () => {
  const [tickets, setTickets] = React.useState(null);
  const { categories, setCategories } = React.useContext(CategoriesContext);

  React.useEffect(async () => {
    const response = await axios.get(`${BASE_URL}/tickets`);

    const dataObject = response.data.data;
    const arrayOfKey = Object.keys(dataObject)
    const arrayOfData = Object.keys(dataObject).map(key => dataObject[key])
    
    const newTickets = arrayOfData.map((ticket, index) => {
      return {
        ...ticket,
        documentId: arrayOfKey[index]
      }
    })

    setTickets(newTickets);
  }, [])

  React.useEffect(() => {
   setCategories([...new Set(tickets?.map(({category}) => category))]); 
  }, [tickets])

  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
  ]

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets && categories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 style={{marginBottom: '5px', marginTop: '5px'}}>{uniqueCategory}</h3>
            {tickets
              .filter(ticket => ticket.category === uniqueCategory)
              .map((ticketfiltered, ticketIndex) => (
                <TicketCard key={ticketfiltered.documentId} color={colors[ticketIndex] || colors[0]} ticket={ticketfiltered} />
              ))}
          </div>
        ))}
        {!tickets && <h3>Loading...</h3>}
        {tickets && tickets?.length == 0 && <h3>No ticket found, please <Link to='/ticket'><a>create new ticket</a></Link></h3>}
      </div>
    </div>
  )
}

export default Dashboard
import React from 'react'
import TicketCard from '../components/TicketCard';

const Dashboard = () => {
  const tickets = [
    {
      category: 'Q1 2022',
      id: 1,
      color: 'red',
      title: 'Build 100 day of code',
      owner: 'Nam Ngu',
      avatar: '/crm_logo.png',
      status: 'in-progress',
      priority: 5,
      process: 40,
      description: 'Make 100 demo of 100 day of code',
      timestamp: '2022-02-11T07:36:17+0000'
    },
    {
      category: 'Q2 2022',
      id: 2,
      color: 'blue',
      title: 'Build 10 demo reactJS',
      owner: 'Nam Ngu',
      avatar: '/crm_logo.png',
      status: 'done',
      priority: 2,
      process: 70,
      description: 'Make 100 demo reactJS',
      timestamp: '2022-03-31T07:36:17+0000'
    },
    {
      category: 'Q3 2022',
      id: 3,
      color: 'blue',
      title: 'Build 10 demo fullstack app',
      owner: 'Nam Ngu',
      avatar: '/crm_logo.png',
      status: 'done',
      priority: 3,
      process: 70,
      description: 'Build 10 demo fullstack app',
      timestamp: '2022-03-31T07:36:17+0000'
    },
    {
      category: 'Q3 2022',
      id: 4,
      color: 'blue',
      title: 'Build 10 demo fullstack app Angular',
      owner: 'Nam Ngu',
      avatar: '/crm_logo.png',
      status: 'stuck',
      priority: 4,
      process: 70,
      description: 'Build 10 demo fullstack app',
      timestamp: '2022-03-31T07:36:17+0000'
    }
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(ticket => (ticket.category)))
  ]

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets
              .filter(ticket => ticket.category === uniqueCategory)
              .map((ticketfiltered, ticketIndex) => (
                <TicketCard key={ticketIndex} ticket={ticketfiltered} />
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
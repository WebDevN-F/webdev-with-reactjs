import React from 'react'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_API;

const DeleteBlock = ({documentId}) => {

  const deleteTicket = async () => {
    alert('You are not allowed to delete this ticket')
    // if (window.confirm('Are you sure you want to delete this ticket?')) {
    //   const response = await axios.delete(`${BASE_URL}/tickets/${documentId}`);
    //   console.log(response);
    //   const success = response.status === 200;
    //   if (success) {
    //     alert('Ticket deleted successfully');
    //     window.location.reload();
    //   }
    // }
  }

  return (
    <div className="delete-block">
      <div className="icon" onClick={deleteTicket}>
        ⛒
      </div>
    </div>
  )
}

export default DeleteBlock
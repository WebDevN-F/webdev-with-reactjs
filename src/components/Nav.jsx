import React from 'react'
import { LOGO_IMG } from './../api/constant';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo-container">
        <img src={LOGO_IMG} alt="cmr-logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate('/ticket')}>&#43;</div>
        <div className="icon" onClick={() => navigate('/')}>&larr;</div>
      </div>
    </nav>
  )
}

export default Nav
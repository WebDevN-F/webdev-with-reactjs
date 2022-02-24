import React from 'react'
import { PropTypes } from 'prop-types'
import Button, { ButtonColor } from './button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAddTask, isHome }) => {
    const location = useLocation();
    return (
        <header className="d-flex justify-content-between align-items-center p-3 border-bottom border-primary mb-2">
            <h3 className="fs-3">{title}</h3>
            {location.pathname === '/' &&
                <Button text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? ButtonColor.danger : ButtonColor.primary} onAdd={onAdd} />
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
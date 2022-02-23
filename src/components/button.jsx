import React from 'react'
import { PropTypes } from 'prop-types';

export const ButtonColor = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    light: 'light',
    dark: 'dark',
    link: 'link',
}

const Button = ({ text, color, onAdd }) => {
  return <button type="button" className={`btn btn-${color}`} onClick={onAdd}>{text}</button>
}

Button.defaultProps = {
    text: 'New',
    color: 'primary',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Button
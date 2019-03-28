import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  text,
  size,
  type,
  variant,
  isDisabled,
  isFullWidth
}) => (
  <button
    className={`btn ${variant} ${size} ${isFullWidth ? 'full-width' : ''}`}
    type={type}
    disabled={isDisabled}
  >
    {text}
  </button>
)

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool
}

export default Button

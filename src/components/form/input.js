import React from 'react'
import PropTypes from 'prop-types'

// Utils
import { generateId } from '../../utils'

const Input = ({
  label,
  isDisabled,
  ...props
}) => {
  const id = generateId()

  return (
    <div className="input">
      <input id={id} placeholder={label} disabled={isDisabled} {...props} />
      {
        label && <label htmlFor={id}>{label}</label>
      }
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default Input

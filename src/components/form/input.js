import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Input = ({props, label}) => (
  <div className="input">
    <input {...props} placeholder={label} />
    {
      label && <label>{label}</label>
    }
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default Input

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Utils
import { generateId } from '../../utils'

class RadioOption extends Component {
  constructor(props) {
    super(props)

    this.toggleCheck = this.toggleCheck.bind(this)

    this.radio = React.createRef()
  }

  toggleCheck() {
    const { isDisabled } = this.props

    if (!isDisabled) {
      this.radio.current.checked = true
    }
  }

  render() {
    const {
      name,
      label,
      value,
      isDisabled
    } = this.props

    const id = generateId()

    return (
      <div className="radio-option-wrapper">
        {
          typeof label !== 'undefined' && (
            <label
              htmlFor={id}
              className={`${isDisabled ? 'disabled' : ''}`}
              onClick={this.toggleCheck}
            >
              {label}
            </label>
          )
        }
        <div className="radio-option" onClick={this.toggleCheck}>
          <input
            ref={this.radio}
            id={id}
            type="radio"
            disabled={isDisabled}
            name={name}
            value={value}
          />
          <span />
        </div>
      </div>
    )
  }
}

RadioOption.propTypes = {
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
}

export default RadioOption

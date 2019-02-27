import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Utils
import { generateId } from '../../utils'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false
    }
  }

  toggleCheck = () => {
    const { isChecked } = this.state
    const { isDisabled } = this.props

    if (!isDisabled) {
      this.setState({ isChecked: !isChecked })
    }
  }

  render() {
    const { isChecked } = this.state
    const { label, isDisabled } = this.props

    const id = generateId()

    return (
      <div className="checkbox-wrapper">
        {
          typeof label !== 'undefined' && (
            <label
              htmlFor={id}
              className={`${isDisabled ? 'disabled' : ''}`}
            >
              {label}
            </label>
          )
        }
        <div className="checkbox" onClick={this.toggleCheck}>
          <input id={id} type="checkbox" checked={isChecked} disabled={isDisabled} readOnly />
          <span>&#10003;</span>
        </div>
      </div>
    )
  }
}

Checkbox.propTypes = {
  isDisabled: PropTypes.bool,
  label: PropTypes.string
}

export default Checkbox

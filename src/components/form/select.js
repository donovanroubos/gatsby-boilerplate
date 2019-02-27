import React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: 'Select one'
    }
  }

  handleChange = (e) => {
    this.setState({
      selectedValue: e.target.value
    })

    console.log(e)
  }

  render() {
    const { options, isDisabled } = this.props
    const { selectedValue } = this.state

    return (
      <div className={`select ${isDisabled ? 'disabled' : ''}`}>
        {selectedValue}

        <select
          className="select"
          disabled={isDisabled}
          onChange={e => this.handleChange(e)}
        >
          <option value="Select one" defaultValue>
            Select one
          </option>
          {
            options.map(({ label, value }, idx) => (
              <option value={value} key={idx}>{label}</option>
            ))
          }
        </select>

        <div className="arrow">&#8250;</div>
      </div>
    )
  }
}

Select.defaultProps = {
  options: [
    {
      label: 'Audi',
      value: 'Audi'
    },
    {
      label: 'Mercedez',
      value: 'Mercedez'
    },
    {
      label: 'Rolls',
      value: 'Rolls'
    }
  ]
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })),
  isDisabled: PropTypes.bool
}

export default Select

import React, { Component } from 'react'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false
    }

    this.toggleCheck = this.toggleCheck.bind(this)
  }

  toggleCheck() {
    const { isChecked } = this.state
    const { disabled } = this.props

    !disabled && this.setState({ isChecked: !isChecked })
  }

  render() {

    const { isChecked } = this.state
    const { props } = this

    return (
      <div className="checkbox" onClick={this.toggleCheck}>
        <input ref="checkbox" type="checkbox" checked={isChecked} {...props} />
        <span></span>
      </div>
    )
  }
}

export default Checkbox

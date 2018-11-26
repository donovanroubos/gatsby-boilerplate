import React, { Component } from 'react'

class Input extends Component {
  render() {

    const {
      label
    } = this.props

    return (
      <div className="input">
        <input {...this.props} placeholder={label}/>
        {
          label && <label>{label}</label>
        }
      </div>
    )
  }
}

export default Input

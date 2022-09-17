import './Counter.css'

import Buttons from './Buttons'
import Display from './Display'
import PassForm from './PassForm'
import React, { Component } from 'react'

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    pass: this.props.initialPass || 5
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.pass
    })
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.pass
    })
  }

  setPass = (newPass) => {
    this.setState({
      pass: newPass
    })
  }

  render() {
    return (
      <div className='Counter'>
        <h2>Contador</h2>
        <Display number={this.state.number} />
        <PassForm pass={this.state.pass} setPass={this.setPass} />
        <Buttons setInc={this.inc} setDec={this.dec} />
      </div>
    )
  }
}

export default Counter
import React, { Component } from 'react'

class Input extends Component {

  keyUpHandler = (event) => {
    console.log('submitted')
    event.preventDefault()
  }

  render () {
    return <form onSubmit={this.keyUpHandler}>
      <input type='text' />
    </form>
  }
}
export default Input

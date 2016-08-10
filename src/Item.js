import React, { Component } from 'react'

class Item extends Component {

  render () {
    return <li>{this.props.textContent}</li>
  }
}

export default Item

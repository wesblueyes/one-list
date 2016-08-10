import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

  render () {
    return <ul className='one-list'>
      <Item text='happy' complete={false} />
      <Item text='go' complete={false} />
      <Item text='lucky' complete={false} />
      <Item text='sad' complete={false} />
      <Item text='Pickles' complete={false} />
    </ul>
  }
}
export default List

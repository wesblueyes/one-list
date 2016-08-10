import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

  render () {
    return <ul className='one-list'>
      <Item textContent='happy' complete={false} />
      <Item textContent='go' complete={false} />
      <Item textContent='lucky' complete={false} />
      <Item textContent='sad' complete={false} />
      <Item textContent='Pickles' complete={false} />
    </ul>
  }
}
export default List

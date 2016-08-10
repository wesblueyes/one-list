import React, { Component } from 'react'
import List from './List'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <List />
          <form>
            <input type='text' />
          </form>
        </main>
        <footer>
          &copy; 2016 Pickles of Awesome.
        </footer>
      </div>
    )
  }
}

export default App

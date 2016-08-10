import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <ul className='one-list'>
            <li>
              <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
            </li>
            <li className='completed'>
              <span>Aliquam tincidunt mauris eu risus.</span>
            </li>
            <li>
              <span>Vestibulum auctor dapibus neque.</span>
            </li>
            <li>
              <span>Nunc dignissim risus id metus.</span>
            </li>
            <li>
              <span>Cras ornare tristique elit.</span>
            </li>
          </ul>
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

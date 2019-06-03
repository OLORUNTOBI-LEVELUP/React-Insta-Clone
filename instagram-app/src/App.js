
import React, { Component } from "react"
import "./App.css"
import dummyData from './dummy-data'
import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SearchBar />
        <PostContainer />
      </div>
    );
    
  }
}

export default App;

import React, { Component } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "reactstrap"
import dummyData from './dummy-data'
import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
        <Button color="primary">primary</Button>
      </div>
    );
    
  }
}

export default App;
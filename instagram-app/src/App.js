import React, { Component } from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import PostPage from "./components/PostContainer/PostPage";

class App extends Component {
  render(){
    return (
      <div>
        <PostPage />
      </div>
    );
  }
}


export default App
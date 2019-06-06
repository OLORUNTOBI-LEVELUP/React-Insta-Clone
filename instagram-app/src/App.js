import React, { Component } from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import PostPage from "./components/PostContainer/PostPage";
import Authenticate from "./authentication/withAuthenticate";
import Login from "./components/Login/Login"



class App extends Component {
  constructor() {
    super();
    this.state = {
  
    };
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = Authenticate(PostPage, Login);

export default App;

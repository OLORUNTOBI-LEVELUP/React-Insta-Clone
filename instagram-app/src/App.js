import React, { Component } from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from "./authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

class App extends Component {
  render(){
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}


export default App
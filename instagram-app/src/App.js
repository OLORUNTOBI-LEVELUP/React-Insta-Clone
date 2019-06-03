
import React, { Component } from "react"
import "./App.css"
import dummyData from "./dummy-data"
import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  state = {
    data: dummyData
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => (
          <PostContainer key={post.timestamp}
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            likes={post.likes}
            timestamp={post.timestamp}
            comments={post.comments}
          />
        ))}
      </div>
    )
  }
}

export default App
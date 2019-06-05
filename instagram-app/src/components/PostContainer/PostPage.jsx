import React, { Component } from "react"

import dummyData from "../dummy-data"
import PostContainer from "./PostContainer"
import SearchBar from "../SearchBar/SearchBar"


class PostPage extends Component {
  state = {
    posts: [],
    searchTerm: ""
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  addNewComment = (value, index) => {
    this.setState(prevState => {
      let newState = { ...prevState }
      newState.posts[index].comments = newState.posts[index].comments.concat({
        username: "johndoe",
        text: value
      })
      return newState
    })
  }

  incrementLike = index => {
    this.setState(prevState => {
      let newState = { ...prevState }
      newState.posts[index].likes = prevState.posts[index].likes + 1
      return newState
    })
  }

  decrementLike = index => {
    this.setState(prevState => {
      let newState = { ...prevState }
      newState.posts[index].likes = prevState.posts[index].likes - 1
      return newState
    })
  }

  handleSearch = value => {
    this.setState({ searchTerm: value })
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleChange={this.handleSearch} />

        {this.state.posts
          .filter(post => {
            if (this.state.searchTerm) {
              return post.username.includes(this.state.searchTerm)
            }
            return true
          })
          .map((post, index) => {
            return (
              <PostContainer
                key={index}
                id={index}
                post={post}
                addNewComment={this.addNewComment}
                incrementLike={this.incrementLike}
                decrementLike={this.decrementLike}
              />
            )
          })}
      </div>
    )
  }
}
 export default PostPage;
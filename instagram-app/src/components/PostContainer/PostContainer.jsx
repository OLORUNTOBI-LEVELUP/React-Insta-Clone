import React from "react"
import "./PostContainer.css"
import PropTypes from "prop-types"
import CommentSection from "../CommentSection/CommentSection"
import moment from "moment";

class PostContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentText: "",
      liked: false
    }
  }

  handleChange = event => {
    this.setState({ commentText: event.target.value })
  }

  handleLike = () => {
    this.setState(state => {
      let newState = { ...state }
      newState.liked = !newState.liked
      if (newState.liked) {
        this.props.incrementLike(this.props.id)
      } else {
        this.props.decrementLike(this.props.id)
      }
      return newState
    })
  }

  render() {
    const { post, id, addNewComment } = this.props
    const time = moment(post.timestamp, "MMM Do YYYY, h:mm:ss a").fromNow()
    return (
      <article>
        <div className="post-header">
          <img className="thumbnail" src={post.thumbnailUrl} alt="Thumbnail" />
          <p className="username">{post.username}</p>
        </div>

        <div className="post-image">
          <img src={post.imageUrl} alt="Post" />
        </div>

        <div className="icons">
          <i
            className={`far fa-heart ${this.state.liked ? "red" : null}`}
            onClick={() => this.handleLike()}
          />
          <i className="far fa-comment" />
        </div>

        <div className="likes">
          <p>{post.likes} likes</p>
        </div>

        <div className="timestamp">
          <p>{time}</p>
        </div>

        <CommentSection  comments={post.comments} />

        <form
          className="comment-input"
          onSubmit={e => {
            e.preventDefault()
            this.setState(prevState => {
              addNewComment(prevState.commentText, id)
              return { commentText: "" }
            })
          }}
        >
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.commentText}
          />
          <i className="fas fa-ellipsis" />
        </form>
      </article>
    )
  }
}

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string
}

export default PostContainer
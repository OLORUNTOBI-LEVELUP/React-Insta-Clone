import React from "react"
import "./PostContainer.css"
import PropTypes from "prop-types"
import CommentSection from "../CommentSection/CommentSection"

const PostContainer = ({
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments
}) => (
  <article>
    <div>
      <img className="thumbnail" src={thumbnailUrl} alt="Thumbnail" />
      <p>{username}</p>
    </div>
    <div className="post-image">
      <img src={imageUrl} alt="Post" />
    </div>
    <div className="icons">
      <i className="far fa-heart" />
      <i className="far fa-comment" />
    </div>
    <div className="likes">
      <p>{likes} likes</p>
    </div>

    <div className="comments-section">
      {comments.map(comment => (
        <CommentSection key={comment.text} comment={comment} />
      ))}
    </div>
    <div className="timestamp">
      <p>{timestamp}</p>
    </div>
    <div className="comment-input">
      <input type="text" />
      <i className="fas fa-ellipsis-h" />
    </div>
  </article>
)

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired
}

export default PostContainer
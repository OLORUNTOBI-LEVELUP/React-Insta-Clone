import React from "react"
import "./CommentSection.css"
import PropTypes from "prop-types"

const CommentSection = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p>
            <span>{comment.username} </span>
            {comment.text}
          </p>
        </div>
      ))}
    </div>
  )
}

CommentSection.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

CommentSection.defaultProps = {
  username: "stranger"
}

export default CommentSection
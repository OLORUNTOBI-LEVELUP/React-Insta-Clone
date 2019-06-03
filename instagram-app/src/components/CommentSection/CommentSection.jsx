import React from "react"
import "./CommentSection.css"
import PropTypes from "prop-types"

const CommentSection = ({ comment }) => {
  return (
    <div className="comment">
      <p>
        <span>{comment.username} </span>
        {comment.text}
      </p>
    </div>
  )
}

CommentSection.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default CommentSection
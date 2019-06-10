import React from "react";

import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import moment from "moment";
import styled from "styled-components";

const Article = styled.article`
  max-width: 640px;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  margin-top: 20px;
  margin-bottom: 30px;

  .thumbnail {
    border-radius: 50%;
    height: 50px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  input {
    width: 600px;
    border: none;
    border-color: transparent;
    z-index: 0;
  }
  input:hover {
    border: none;
    border-color: transparent;
  }

  .post-header {
    display: flex;
    margin-left: 10px;
  }
  .icons,
  .likes,
  .comments-section,
  .timestamp,
  .comment-input {
    margin-left: 10px;
  }
  .username {
    margin-top: 15px;
  }

  .far {
    margin-right: 15px;
  }

  .fas {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px;
  }
  .comment-input {
    padding-bottom: 20px;
    margin-left: 10px;
  }
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      liked: false
    };
  }

  handleChange = event => {
    this.setState({ commentText: event.target.value });
  };

  handleLike = () => {
    this.setState(state => {
      let newState = { ...state };
      newState.liked = !newState.liked;
      if (newState.liked) {
        this.props.incrementLike(this.props.id);
      } else {
        this.props.decrementLike(this.props.id);
      }
      return newState;
    });
  };

  render() {
    const { post, id, addNewComment } = this.props;
    const time = moment(post.timestamp, "MMM Do YYYY, h:mm:ss a").fromNow();
    return (
      <Article>
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

        <CommentSection comments={post.comments} />

        <form
          className="comment-input"
          onSubmit={e => {
            e.preventDefault();
            this.setState(prevState => {
              addNewComment(prevState.commentText, id);
              return { commentText: "" };
            });
          }}
        >
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.commentText}
          />
          <i className="fas fa-ellipsis" />
        </form>
      </Article>
    );
  }
}

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string
};

export default PostContainer;

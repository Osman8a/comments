import React from 'react';

const CommentDetail = props => {
  const { author, timeAgo, avatar, comment } = props;
  return (
    <div class="ui comments">
      <div class="comment">
        <a href="/" class="avatar">
          <img alt="" src={avatar} />
        </a>
        <div class="content">
          <a href="/" className="autor">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{timeAgo}</span>
          </div>
          <div className="text"> {comment}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;

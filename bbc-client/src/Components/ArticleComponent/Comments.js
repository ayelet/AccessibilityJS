import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

import "./comments.css";

const Comments = ({ comment, author, time }) => {
  return (
    <div className="comment-box">
      <div className="comment-head">
        <h6 className="comment-name ">
          <h4>{author}</h4>
        </h6>
        <span>{time}</span>
        <FaHeart className="fa-heart" />
      </div>
      <div className="comment-content">{comment}</div>
    </div>
  );
};

export default Comments;

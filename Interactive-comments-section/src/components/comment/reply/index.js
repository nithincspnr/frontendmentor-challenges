import React from "react";
import "./index.scss";
import Comment from "../";

const Reply = ({ replies, parentId }) => {
  if (!replies || replies.length === 0) {
    return null;
  }

  return (
    <div className="reply">
      <div className="reply__vertical-line"></div>
      <div style={{ width: "100%" }}>
        {replies.map((reply, index) => (
          <Comment key={index} commentId={parentId} data={reply} />
        ))}
      </div>
    </div>
  );
};

export default Reply;

import React from "react";
import './index.scss';

function Box(props) {
  return <div className="comment-box">{props.children}</div>;
}

export default Box;

import React from "react";
import './index.scss';

function Box(props) {
  return <div className="card">{props.children}</div>;
}

export default Box;

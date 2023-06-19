import React from "react";

import "./index.scss";
import { ReplyIcon, EditIcon, DeleteIcon } from "assets";

const Action = (props) => {
  const { error, editLink, deleteLink, onClick } = props;

  let className = "action";
  if (error) {
    className += " action-error";
  } else {
    className += " action-primary";
  }

  let icon = null;
  if (deleteLink) {
    icon = <img src={DeleteIcon} />;
  } else if (editLink) {
    icon = <img src={EditIcon} />;
  } else {
    icon = <img src={ReplyIcon} />;
  }

  return (
    <div onClick={onClick} className={className}>
      {icon}
      <p className="action__text">{props.children}</p>
    </div>
  );
};

export default Action;

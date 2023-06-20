import React from "react";
import classNames from "classnames";

import "./index.scss";
import { ReplyIcon, EditIcon, DeleteIcon } from "assets";

const Action = (props) => {
  const { onClick, type = "reply" } = props;

  const className = classNames({
    action: true,
    "action-primary": type === "reply" || type === "edit",
    "action-error": type === "delete",
  });

  const textClassName = classNames({
    action__text: true,
    "action__text-primary": type === "reply" || type === "edit",
    "action__text-error": type === "delete",
  });

  let icon = null;
  switch (type) {
    case "delete":
      icon = <img src={DeleteIcon} />;
      break;
    case "edit":
      icon = <img src={EditIcon} />;
      break;
    default:
      icon = <img src={ReplyIcon} />;
      break;
  }

  return (
    <div onClick={onClick} className={className}>
      {icon}
      <p className={textClassName}>{props.children}</p>
    </div>
  );
};

export default Action;

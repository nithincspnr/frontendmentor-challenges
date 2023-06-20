import React from "react";
import classNames from "classnames";
import "./index.scss";

function Button(props) {
  const { onClick, success, error } = props;
  const className = classNames({
    btn: true,
    "btn-success": success,
    "btn-error": error,
    "btn-primary": !success && !error,
  });

  return (
    <div className={className} onClick={onClick}>
      {props.children}
    </div>
  );
}

export default Button;

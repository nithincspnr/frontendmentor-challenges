import React, { Fragment } from "react";
import { Avatar as AvatarAssets } from "assets";
import "./index.scss";

const User = ({ username }) => {
  return (
    <div className="user">
      <img className="user__avatar" src={AvatarAssets[username]} />
      <h2 className="user__title">{username}</h2>
    </div>
  );
};

export default User;

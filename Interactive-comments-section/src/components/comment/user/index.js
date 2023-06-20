import React from "react";
import "./index.scss";
import { Avatar as AvatarAssets } from "assets";

const User = ({ username }) => {
  return (
    <div className="user">
      <img className="user__avatar" src={AvatarAssets[username]} />
      <h2 className="user__title">{username}</h2>
    </div>
  );
};

export default User;

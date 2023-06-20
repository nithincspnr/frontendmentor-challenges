import React from "react";
import "./index.scss";
import { getItem } from "utils";
import { Card, Button } from "components";
import { Avatar as AvatarAssets } from "assets";

const InputBox = () => {
  const currentUser = getItem("data").currentUser;

  return (
    <Card>
      <div className="input-box">
        <img
          className="input-box__avatar"
          src={AvatarAssets[currentUser.username]}
        />
        <textarea className="input-box__textarea" type="text" />
        <div className="input-box__btn">
          <Button>SEND</Button>
        </div>
      </div>
    </Card>
  );
};

export default InputBox;

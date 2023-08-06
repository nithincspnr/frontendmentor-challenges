import React, { useState, useContext } from "react";

import "./index.scss";
import { getItem } from "utils";
import { Card, Button } from "components";
import appData from "../../../../data.json";
import { Avatar as AvatarAssets } from "assets";
import { CommentDispatchContext } from "context";

const InputBox = ({ commentId, onInput }) => {
  const [text, setText] = useState("");
  const dispatch = useContext(CommentDispatchContext);
  const currentUser = appData.currentUser;

  const onInputChange = (e) => setText(e.target.value);

  const onSend = () => {
    if (!text.trim()) {
      return;
    }
    const action = {
      content: text,
      commentId,
      type: "reply",
    };
    if (!commentId) {
      action.commentId = "";
      action.type = "comment";
    }
    dispatch(action);
    // clear the input
    setText("");
    // close input box
    if (onInput) {
      onInput();
    }
  };

  return (
    <Card>
      <div className="input-box">
        <img
          className="input-box__avatar"
          src={AvatarAssets[currentUser.username]}
        />
        <textarea
          className="input-box__textarea"
          onChange={onInputChange}
          type="text"
          value={text}
        />
        <div className="input-box__btn">
          <Button onClick={onSend}>SEND</Button>
        </div>
      </div>
    </Card>
  );
};

export default InputBox;

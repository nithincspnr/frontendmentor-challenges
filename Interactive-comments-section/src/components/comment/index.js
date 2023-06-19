import React from "react";

import { Card } from "components";
import Avatar from "./avatar";
import Vote from "./vote";
import Button from "../button";
import Action from "./action";

import "./index.scss";

function Comment({ data }) {
  return (
    <Card>
      <div className="comment">
        <div className="comment__header">
          <Avatar user={data.user} />
          <p className="comment__created-at">{data.createdAt}</p>
        </div>

        <p className="comment__content">{data.content}</p>

        <div className="comment__action">
          <Vote score={data.score} />
          <Action>Reply</Action>
        </div>
      </div>
    </Card>
  );
}

export default Comment;

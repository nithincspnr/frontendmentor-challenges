import React, { Fragment, useState } from "react";

import User from "./user";
import Vote from "./vote";
import Action from "./action";
import Reply from "./reply";
import InputBox from "./input";
import { Card } from "components";

import "./index.scss";

const Comment = ({ data }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const onReply = () => setShowReplyInput(!showReplyInput);

  return (
    <Fragment>
      <Card>
        <div className="comment">
          <div className="comment__header">
            <User username={data.user.username} />
            <p className="comment__created-at">{data.createdAt}</p>
            <div className="comment__action-btn">
              <Action type="delete">Delete</Action>
              <Action type="edit">Edit</Action>
            </div>
          </div>
          <p className="comment__content">{data.content}</p>
          <div className="comment__action">
            <Vote score={data.score} />
            <Action onClick={onReply}>Reply</Action>
          </div>
        </div>
      </Card>
      {showReplyInput ? <InputBox /> : null}
    </Fragment>
  );
};

export { Reply };
export default Comment;

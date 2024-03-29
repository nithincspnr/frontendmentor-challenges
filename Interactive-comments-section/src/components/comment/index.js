import React, { Fragment, useContext, useState } from "react";

import "./index.scss";
import User from "./user";
import Vote from "./vote";
import Reply from "./reply";
import Action from "./action";
import InputBox from "./input";
import { Card } from "components";
import ConfirmationDialog from "../dialog";
import { CommentDispatchContext } from "context";
import appData from "../../../data.json";

const Comment = ({ data, commentId }) => {
  const dispatch = useContext(CommentDispatchContext);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const onReply = () => setShowReplyInput(!showReplyInput);

  const closeDialog = () => setShowDeleteConfirmation(false);

  const onDeleteClick = () => setShowDeleteConfirmation(true);

  const onDelete = () => {
    dispatch({
      type: "delete",
      commentId: data.id,
    });
    closeDialog();
  };

  return (
    <Fragment>
      <Card>
        <div className="comment">
          <div className="comment__header">
            <User username={data.user.username} />
            <p className="comment__created-at">{data.createdAt}</p>
            {appData.currentUser.username === data.user.username ? (
              <div className="comment__action-btn">
                <Action type="delete" onClick={onDeleteClick}>
                  Delete
                </Action>
                <Action type="edit">Edit</Action>
              </div>
            ) : null}
          </div>
          <p className="comment__content">{data.content}</p>
          <div className="comment__action">
            <Vote commentId={data.id} score={data.score} />
            <Action onClick={onReply}>Reply</Action>
          </div>
        </div>
      </Card>
      {showReplyInput ? (
        <InputBox commentId={commentId} onInput={onReply} />
      ) : null}
      <ConfirmationDialog
        open={showDeleteConfirmation}
        onCancel={closeDialog}
        onDelete={onDelete}
      />
    </Fragment>
  );
};

export { Reply, InputBox };

export default Comment;

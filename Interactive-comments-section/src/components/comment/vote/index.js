import React, { useContext } from "react";

import "./index.scss";
import { PlusIcon, MinusIcon } from "assets";
import { CommentDispatchContext } from "context";

function Vote({ score, commentId, horizontal = "false" }) {
  const dispatch = useContext(CommentDispatchContext);
  let className = "vote";
  if (horizontal) {
    className += " horizontal";
  }

  const upvote = () => dispatch({ type: "upvote", commentId });
  const downvote = () => dispatch({ type: "downvote", commentId });

  return (
    <div className={className}>
      <img className="vote__btn" src={PlusIcon} alt="Upvote" onClick={upvote} />
      <p className="vote__score">{score}</p>
      <img
        className="vote__btn"
        src={MinusIcon}
        alt="Downvote"
        onClick={downvote}
      />
    </div>
  );
}

export default Vote;

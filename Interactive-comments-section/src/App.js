import React, { Fragment, useEffect, useReducer, useState } from "react";

import "./styles/style.scss";
import data from "../data.json";
import { Layout, Comment, Reply } from "components";
import { CommentContext, CommentDispatchContext, UserContext } from "context";

function App() {
  // const [comments, setComments] = useState([]);
  const [comments, dispatch] = useReducer(appReducer, initialComment);

  // useEffect(() => {
  //   // const comments = getItem("data").comments || [];
  //   setComments(data.comments);
  // }, []);

  // console.log({ data });

  // return <Backdrop>hello</Backdrop>;

  return (
    <UserContext.Provider value={{}}>
      <CommentContext.Provider value={comments}>
        <CommentDispatchContext.Provider value={dispatch}>
          <Layout>
            {comments.map((comment, index) => {
              return (
                <Fragment key={index}>
                  <Comment key={index} data={comment} />
                  <Reply replies={comment.replies} />
                </Fragment>
              );
            })}
          </Layout>
        </CommentDispatchContext.Provider>
      </CommentContext.Provider>
    </UserContext.Provider>
  );
}

const appReducer = (payload, action) => {
  console.log({ payload, action });
  switch (action.type) {
    case "comment":
      return payload;
    case "upvote":
      const data1 = [];
      payload.forEach((comment) => {
        if (comment.id === action.commentId) {
          comment.score += 1;
        }
        if (Array.isArray(comment.replies) && comment.replies.length > 0) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.commentId) {
              reply.score += 1;
            }
          });
        }
        data1.push(comment);
      });
      return data1;
    case "downvote":
      const data2 = [];
      payload.forEach((comment) => {
        if (comment.id === action.commentId && comment.score !== 0) {
          comment.score -= 1;
        }
        if (Array.isArray(comment.replies) && comment.replies.length > 0) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.commentId && reply.score !== 0) {
              reply.score -= 1;
            }
          });
        }
        data2.push(comment);
      });
      return data2;
    case "reply":
      return payload;
    case "delete":
      const data3 = [];
      payload.forEach((comment) => {
        if (Array.isArray(comment.replies) && comment.replies.length > 0) {
          const replies = [];
          comment.replies.forEach((reply) => {
            if (reply.id !== action.commentId) {
              replies.push(reply);
            }
          });
          comment.replies = replies;
        }
        if (comment.id !== action.commentId) {
          data3.push(comment);
        }
      });
      return data3;
    default:
      return payload;
      break;
  }
};

const initialComment = data.comments;

export default App;

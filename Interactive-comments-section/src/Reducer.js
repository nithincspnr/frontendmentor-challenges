import appData from "../data.json";
import { uniqueId } from "utils";

const appReducer = (payload, action) => {
  switch (action.type) {
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
      const data3 = [];
      payload.forEach((comment) => {
        const replies = [...comment.replies];
        if (comment.id === action.commentId) {
          replies.push({
            content: action.content,
            createdAt: "1 sec ago",
            id: uniqueId(),
            score: 0,
            replyingTo: "maxblagun",
            user: appData.currentUser,
          });
        }
        data3.push({ ...comment, replies });
      });
      return data3;
    case "delete":
      const data4 = [];
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
          data4.push(comment);
        }
      });
      return data4;
    case "comment":
      const data5 = [...payload];
      const newComment = {
        content: action.content,
        createdAt: "1 sec ago",
        replies: [],
        user: appData.currentUser,
        score: 0,
        id: uniqueId(),
      };
      data5.push(newComment);
      return data5;
    default:
      return payload;
  }
};

const initialComment = appData.comments;

export { appReducer, initialComment };

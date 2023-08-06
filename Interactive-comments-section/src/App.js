import React, { Fragment, useReducer } from "react";

import "./styles/style.scss";
import { appReducer, initialComment } from "./Reducer";
import { Layout, Comment, Reply, InputBox } from "components";
import { CommentContext, CommentDispatchContext, UserContext } from "context";

function App() {
  const [comments, dispatch] = useReducer(appReducer, initialComment);

  return (
    <UserContext.Provider value={{}}>
      <CommentContext.Provider value={comments}>
        <CommentDispatchContext.Provider value={dispatch}>
          <Layout>
            {comments.map((comment, index) => {
              return (
                <Fragment key={index}>
                  <Comment commentId={comment.id} data={comment} />
                  <Reply parentId={comment.id} replies={comment.replies} />
                </Fragment>
              );
            })}
            <InputBox />
          </Layout>
        </CommentDispatchContext.Provider>
      </CommentContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

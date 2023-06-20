import React, { Fragment, useEffect, useState } from "react";

import "./styles/style.scss";
import { getItem } from "./utils/local-storage";
import { Layout, Comment, Reply } from "components";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const comments = getItem("data").comments || [];
    setComments(comments);
  }, []);

  return (
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
  );
}

export default App;

import React, { useEffect, useState } from "react";

import "./styles/style.scss";
import { getItem } from "./utils/local-storage";
import { Layout, Comment } from "components";

function App() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const comments = getItem("data").comments || [];
        setComments(comments);
    }, []);

    return (
        <Layout>
            {comments.map((comment, index) => (
                <Comment key={index} data={comment} />
            ))}
        </Layout>
    );
}

export default App;

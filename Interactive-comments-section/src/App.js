import React, { useEffect, useState } from "react";
import "./styles/style.scss";
import { Layout, Comment } from "./components";


import { getItem } from "./utils/local-storage";
import VoteBox from "./components/comment/vote-box";

function App() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const comments = getItem("data").comments || [];
        setComments(comments);
    }, []);

    return (
        <Layout>

            <VoteBox />
            {/* {comments.map((comment, index) => (
                <Comment key={index} data={comment} />
            ))} */}
        </Layout>
    );
}

export default App;

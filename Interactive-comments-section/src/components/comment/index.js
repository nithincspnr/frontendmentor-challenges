import React from "react";

import { Card } from "components";
import Avatar from "./avatar";
import Vote from "./vote";

function Comment({ data }) {

    console.log({ data })
    return (
        <Card>
            <Avatar user={data.user} />
            <p>{data.content}</p>
            <Vote />
        </Card>
    );
}

export default Comment;

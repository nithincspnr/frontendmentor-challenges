import React from "react";

import { Card } from "components";
import Avatar from "./avatar";
import Vote from "./vote";
import Button from "../button";
import Link from "../link";

import './index.scss';

function Comment({ data }) {

    // cl

    return (
        <Card>
            <Avatar user={data.user} />
            <p className="card__content">{data.content}</p>
            <p></p>
            {/* <Vote score={data.score} />
            <Button>SEND</Button>
            <Button success>NO, CANCEL</Button>
            <Button error>YES, DELETE</Button>
            <Link replyLink>Reply</Link>
            <Link editLink>Edit</Link>
            <Link deleteLink>Delete</Link> */}
        </Card>
    );
}

export default Comment;

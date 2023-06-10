import React, { Fragment } from "react";

function Avatar({ user }) {
    return (
        <Fragment>
            {/* <img src={user.image.png} /> */}{user.username}
        </Fragment>
    );
}

export default Avatar;

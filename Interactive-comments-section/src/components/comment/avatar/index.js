import React, { Fragment } from "react";
import { Avatar as AvatarAssets } from 'assets';
import './index.scss';

function Avatar({ user }) {
    return (
        <div className='avatar'>
            <img className="avatar__img" src={AvatarAssets[user.username]} />
            <h2 className="avatar__title">{user.username}
            </h2>
        </div>
    );
}

export default Avatar;

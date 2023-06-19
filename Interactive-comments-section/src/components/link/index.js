import React from 'react';

import './index.scss';
import { ReplyIcon, EditIcon, DeleteIcon } from 'assets';

const Link = (props) => {

    const { error, editLink, deleteLink, onClick } = props

    let className = 'link';
    if (error) {
        className += ' link__error';
    } else {
        className += ' link_primary';
    }

    let icon = null;
    if (deleteLink) {
        icon = <img src={DeleteIcon} />
    } else if (editLink) {
        icon = <img src={EditIcon} />
    } else {
        icon = <img src={ReplyIcon} />
    }

    return (
        <a href='' onClick={onClick} className={className}>{icon}{props.children}</a>
    )
}

export default Link;
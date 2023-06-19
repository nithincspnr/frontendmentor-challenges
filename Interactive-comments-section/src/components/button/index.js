import React from 'react';
import './index.scss';

function Button(props) {
    const { onClick, success, error } = props;
    let className = 'btn';

    if (success) {
        className += ' btn-success';
    }
    else if (error) {
        className += ' btn-error';
    } else {
        className += ' btn-primary';
    }

    return (
        <div className={className} onClick={onClick}>{props.children}</div>
    )
}

export default Button;
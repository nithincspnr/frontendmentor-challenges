import React from 'react';

import './index.scss';
import { PlusIcon, MinusIcon } from 'assets';

function Vote({ score }) {
    return (
        <div className='vote'>
            <img className='vote__btn' src={PlusIcon} alt='Increase' />
            <p className='vote__score'>{score}</p>
            <img className='vote__btn' src={MinusIcon} alt='Decrease' />
        </div>
    )
}

export default Vote;
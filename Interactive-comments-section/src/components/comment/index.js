import React from 'react';

import Box from '../box';


function Comment({ data }) {

    console.log({ data })

    return (
        <Box>{data.content}</Box>
    )
}

export default Comment
import React from 'react';

const Image = ({width = 500, path}) => {
    const url = `https://image.tmdb.org/t/p/w${width}`;
    return (
        <div>
            <img alt={'movie poster'} src={`${url}${path}`}/>
        </div>
    );
};

export default Image;

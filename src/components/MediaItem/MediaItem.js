import React from 'react';
import Image from "../Image";
import './MediaItem.css'

const MovieInCinema = ({poster_path, title}) => {
    return (
        <div>
            <div className='image_wrapper'>
                <div className='title'> {title}</div>
                <div className='image'><Image path={poster_path} width={200}/></div>
            </div>
        </div>
    );
};

export default MovieInCinema;

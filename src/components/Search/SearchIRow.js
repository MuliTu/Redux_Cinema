import React from 'react';
import Image from "../Image";
import './SearchRow.scss'

const SearchRow = ({name, poster}) => {
    return (
        <div className='search_row'>
            <div className='name'>{name}</div>
            <div className='image'><Image path={poster} width={50}/></div>
        </div>
    );
};

export default SearchRow;

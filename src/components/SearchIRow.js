import React from 'react';
import Image from "./Image";

const SearchRow = ({name,poster}) => {
    return (
        <div style={{margin:'30px',position:'relative',visibility:'visible',backgroundColor:'red',   zIndex:'99'}}>
            <div>{name}</div>
            <div><Image path={poster} width={50}/></div>
        </div>
    );
};

export default SearchRow;

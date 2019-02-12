import React from 'react';
import Movies from "../Movies/Movies";
import TvShows from "../TvShow/TvShows";

class News extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                News!
                <Movies/>
                <TvShows/>
            </div>
        );
    }
}



export default News;
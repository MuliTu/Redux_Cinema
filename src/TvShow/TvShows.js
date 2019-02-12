import React from 'react';
import {connect} from "react-redux";
import {fetch_on_air} from "./actions";
import MovieInCinema from "../components/MediaItem/MediaItem";

import {getOnAir} from "../redux";


class TvShows extends React.Component {
    componentDidMount() {
        this.props.fetch_on_air()
    }

    renderMovies = () => {
        if (!this.props.tvshows)
            return (<div>Loading...</div>);

        return (this.props.tvshows.map(x => (
                <div key={x.id}>
                    <MovieInCinema poster_path={x.poster_path} title={x.original_name}/>
                </div>
            )))
    };

    render() {
        console.log('this is the props from TVSHOWS ',this.props.tvshows);
        return (
            <div>
                Movies
                <div className='media_wrapper'>
                    {
                        this.renderMovies()
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tvshows: getOnAir(state)
});

export default connect(mapStateToProps, {fetch_on_air})(TvShows);
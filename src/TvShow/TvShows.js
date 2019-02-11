import React from 'react';
import {connect} from "react-redux";
import {fetch_on_air} from "./actions";
import MovieInCinema from "../components/MediaItem/MediaItem";

class TvShows extends React.Component {
    componentWillMount() {
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
    tvshows: state.tvshows.onAir
});

export default connect(mapStateToProps, {fetch_on_air})(TvShows);
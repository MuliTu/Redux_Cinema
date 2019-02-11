import React from 'react';
import {connect} from "react-redux";
import {fetchMovieById, fetchMovies} from './actions'
import MovieInCinema from "../components/MediaItem/MediaItem";


class Movies extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    renderMovies = () => {
        if (!this.props.movies)
            return (<div>Loading...</div>);
        return (this.props.movies.slice(0, 5)
            .map(x => (
                <div key={x.id} onClick={() => this.props.fetchMovieById(x.id)}>
                    <MovieInCinema poster_path={x.poster_path} title={x.title}/>
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
    movies: state.movies.inTheatre
});

export default connect(mapStateToProps, {fetchMovies, fetchMovieById})(Movies)

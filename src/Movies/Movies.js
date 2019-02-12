import React from 'react';
import {connect} from "react-redux";
import {fetchMovieById, fetchMovies} from './actions'
import MovieInCinema from "../components/MediaItem/MediaItem";
import {Link} from "react-router-dom";
import {getOnCinema} from "../redux/";


class Movies extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    renderMovies = () => {
        if (!this.props.movies)
            return (<div>Loading...</div>);
        return (this.props.movies.slice(0, 5)
            .map(x => (
                <Link to={`/movie/${x.id}`}
                      key={x.id}
                      onClick={() => this.props.fetchMovieById(x.id)}>
                    <MovieInCinema poster_path={x.poster_path} title={x.title}/>
                </Link>
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
    movies: getOnCinema(state)
});

export default connect(mapStateToProps, {fetchMovies,fetchMovieById})(Movies)

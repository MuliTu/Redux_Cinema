import React from 'react';
import {connect} from "react-redux";
import {fetchMovieById, fetchMovies} from './actions'
import MovieInCinema from "../components/MediaItem/MediaItem";

class Movies extends React.Component {
    componentDidMount() {
        this.props.fetchMovies()
    }

    renderMovies = () => {
        if (!this.props.movies)
            return (<div>Loading...</div>);
        return (this.props.movies
            .map(x => (
                <div onClick={()=>this.props.fetchMovieById(x.id)}>
                    <MovieInCinema poster_path={x.poster_path} title={x.title}/>
                </div>
        )))
    };

    render() {
        console.log('this is props', this.props.movies);
        return (
            <div>
                Movies
                <div style={{display:'flex',flexWrap:'wrap'}} >
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

export default connect(mapStateToProps, {fetchMovies,fetchMovieById})(Movies)

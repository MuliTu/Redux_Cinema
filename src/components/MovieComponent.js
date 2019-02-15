import React from 'react';

import {fetchMovieById} from "../Movies/actions";
import {connect} from "react-redux";

import './MovieComponent.scss'
import Image from "./Image";
import {getMovieByID, getMovieCredits, getSimilarMovies} from "../redux";
import {Link} from "react-router-dom";

class MovieComponent extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchMovieById(id)
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id)
        {
            const id = this.props.match.params.id;
            this.props.fetchMovieById(id)
        }
    }

    castListEntity = (x, index) => (
        <Link to={'/'} key={index} className='list'>
            <div>
                <Image path={x.profile_path} width={200}/>
            </div>
            <div className='title'>
                {x.name}


            </div>
                <div className='character'>As:{x.character}</div>
        </Link>
    );

    similarMoviesListEntity = (x, index) => (
        <Link key={index} to={`/movie/${x.id}`} className='list'>
            <Image path={x.poster_path} width={200}/>
            <div className='title'>{x.title}</div>

        </Link>);

    render() {
        console.log(this.props);
        const {movie, credits, similar} = this.props;
        const backgroundImageStyle = movie ? {
            maxWidth: '100%',
            background: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}") no-repeat center`,
            backgroundSize: 'cover',
            width: '500px',
            height: '300px'
        } : {};
        return (
            <div className='movie_component_wrapper'>
                {
                    movie ?
                        <div>
                            <div className='top'>
                                <div className='left'><Image path={movie.poster_path} width={200}/></div>
                                <div>
                                    <div style={backgroundImageStyle}>
                                        <div className='background_item'>{movie.title}</div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className='body'>
                                <p>
                                    {movie.overview}
                                </p>
                                <div style={{display: 'flex', overflowX: 'scroll'}}>
                                    {
                                        credits ?
                                            credits.cast.map(this.castListEntity) :
                                            <div/>
                                    }
                                </div>
                                <div style={{display: 'flex', overflowX: 'scroll'}}>
                                    {
                                        similar ?
                                            similar.results.map(this.similarMoviesListEntity) :
                                            <div/>
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <div/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movie: getMovieByID(state),
    credits: getMovieCredits(state),
    similar: getSimilarMovies(state)
});

export default connect(mapStateToProps, {fetchMovieById})(MovieComponent);
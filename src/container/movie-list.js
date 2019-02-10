import React from 'react';
import { connect } from 'react-redux'
import MediaItem from "../components/MediaItem/MediaItem";
class MovieList extends React.Component {


    render() {
        console.log('this is props',this.props.movies);
        return (
            <div>
                {this.props.movies.map((x,index)=>{
                    return(<MediaItem item={x.title} key={index}/>)
                })}
            </div>
        );
    }
}

const mapStateToProps = state =>({
    movies:state.movies
});

export default connect(mapStateToProps)(MovieList)
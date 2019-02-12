import React from 'react';
import { getMovieByID } from '../redux'

import {fetchMovieById} from "../Movies/actions";
import {connect} from "react-redux";

class TEstComponent extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchMovieById(id)
    }

    render() {
        console.log(this.props);
        return (
            <div>

                Movie Test
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movie: getMovieByID(state)
});

export default connect(mapStateToProps, {fetchMovieById})(TEstComponent);
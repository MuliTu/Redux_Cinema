import React from 'react';
import {fetchQuery} from "./actions";
import {connect} from "react-redux";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            re:[]
        }
    }

    onChangeQuery = (event) => {
        this.setState({query: event.target.value});
        this.props.fetchQuery(this.state.query);
    };


    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary"
                            type="button" id="button-addon1">
                        <i className="fas fa-search"/>
                    </button>
                </div>
                <input type="text" className="form-control" placeholder="Search..." aria-label="SEarch"
                       aria-describedby="button-addon1" onChange={this.onChangeQuery}/>

                <div>
                    Results
                    <div>

                    </div>
                </div>
            </div>

        );
    }
}

export default connect(null, {fetchQuery})(Search);
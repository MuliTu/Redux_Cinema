import React from 'react';
import {fetchQuery} from "./actions";
import {connect} from "react-redux";
import SearchRow from "../components/SearchIRow";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            re: []
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
                    </button>tt
                </div>
                <input type="text" className="form-control" placeholder="Search..." aria-label="SEarch"
                       aria-describedby="button-addon1" onChange={this.onChangeQuery}/>

                <div>
                    Results
                    <div style={{position:'absolute',visibility:'visible'}}>
                        {
                            this.props.result ?
                                this.props.result.map(x => {
                                    return (
                                        <SearchRow name={x.name} poster={x.logo_path}/>)
                                })
                                :
                                <div>Loading...</div>
                        }
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateFromProps = state => ({
    result: state.search.results
});

export default connect(mapStateFromProps, {fetchQuery})(Search);
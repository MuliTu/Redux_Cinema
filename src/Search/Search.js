import React from 'react';
import {fetchQuery} from "./actions";
import {connect} from "react-redux";
import SearchRow from "../components/Search/SearchIRow";
import {getSearchResults} from "../redux";

import './Search.scss'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            re: [],
            isHidden: false
        }
    }

    onChangeQuery = (event) => {
        this.setState({query: event.target.value});
        this.props.fetchQuery(this.state.query);
    };

    onBlurInputHandler = () => this.setState({isHidden: true});

    onFocusInputHandler = () => this.setState({isHidden: false});

    searchResultEntity = (x, index) =>(
            <div key={index}>
                <SearchRow key={index} name={x.name} poster={x.logo_path}/>
            </div>
    );


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
                       aria-describedby="button-addon1" onChange={this.onChangeQuery}
                       onBlur={this.onBlurInputHandler}
                       onFocus={this.onFocusInputHandler}/>

                <div>
                    <div className='search_wrapper' hidden={this.state.isHidden || this.state.query.length <1}>
                        {
                            this.props.result ?
                                this.props.result.length > 0?
                                    this.props.result.map(this.searchResultEntity):
                                    <div>No match</div>
                                :
                                <div/>
                        }
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateFromProps = state => ({
    result: getSearchResults(state)
});

export default connect(mapStateFromProps, {fetchQuery})(Search);
import React, {Component} from 'react';
import './App.css';

import {Provider} from "react-redux";
import store from './redux/store'
import Movies from "./Movies/Movies";
import TvShows from "./TvShow/TvShows";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Search from "./Search/Search";
import Test from "./components/test";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={'/movies'} component={Test}/>
                    <Provider store={store}>
                        <div className="App">
                            <Search/>
                            <Movies/>
                            <TvShows/>
                        </div>
                    </Provider>
                </div>
            </Router>
        );
    }
}

export default App;


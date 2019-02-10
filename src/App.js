import React, {Component} from 'react';
import './App.css';

import {Provider} from "react-redux";
import store from './redux/store'
import Movies from "./Movies/Movies";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Movies/>
                </div>
            </Provider>
        );
    }
}

export default App;


import React, {Component} from 'react';
import './App.css';

import {Provider} from "react-redux";
import store from './redux/store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Search from "./Search/Search";
import News from "./containers/News";
import TEstComponent from "./components/TEstComponent";


class App extends Component {
    render() {
        return (

            <Router>
                <Provider store={store}>
                    <Search/>
                    <Route exact path={'/'} component={News}/>
                    <Route path={'/movie/:id'} render={(props)=><TEstComponent {...props}/>}/>
                </Provider>

            </Router>
        );
    }
}

export default App;


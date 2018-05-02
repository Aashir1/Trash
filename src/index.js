import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import Posts from './components/Posts.js'
import Profile from './components/Profile.js'
import History from './components/History';

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>Home</div>
        );
    }
}

export default App;

ReactDOM.render(
    <Router history={History}>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/Profile" component={Profile}></Route>
            <Route path="/Posts" component={Posts}></Route>
        </Switch>
    </Router>  
, document.getElementById('root'));


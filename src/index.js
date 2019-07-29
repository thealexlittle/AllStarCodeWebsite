import React from 'react';
import ReactDOM from 'react-dom';
import './lib/style/index.css';
import Home from './pages/Home';
import * as serviceWorker from './lib/serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './pages/About';
import Projects from './pages/Projects';
import PageNotFound from './pages/NotFound'


ReactDOM.render(
    (
        <Router basename= {''}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

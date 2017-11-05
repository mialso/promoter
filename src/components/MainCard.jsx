import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import SearchResults from './Search';

import '../css/Main.css';

export default function MainCard() {
    return (
        <div className="MainCard">
            <div className="MainCard-inner">
                <Switch>
                    <Route path="/search/:zipcode/:name" component={SearchResults} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </div>
    );
}

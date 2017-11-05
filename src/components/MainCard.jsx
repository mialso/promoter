import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import SearchResults from './Search';

import '../css/Main.css';

export default function MainCard() {
    return (
        <div className="MainCard">
            <div className="MainCard-inner">
                <Route exact path="/" component={Home} />
                <Route path="/search/:zipcode/:name" component={SearchResults} />
            </div>
        </div>
    );
}

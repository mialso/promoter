import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

import '../css/Main.css';

export default function MainCard() {
    return (
        <div className="MainCard">
            <div className="MainCard-inner">
                <Route path="/" component={Home} />
            </div>
        </div>
    );
}

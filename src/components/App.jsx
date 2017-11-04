import React from 'react';
import MainCard from './MainCard';

import '../css/App.css';

export default function App() {
    return (
        <div className="App">
            <div className="App-topLinks">
                <p>how it works</p>
                <p>login</p>
            </div>
            <div className="App-headLogo">
                <h1>Promoter</h1>
            </div>
            <div className="App-main">
                <MainCard />
            </div>
        </div>
    );
}
